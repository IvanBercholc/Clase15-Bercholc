"use strict";

let Carrito = JSON.parse(localStorage.getItem("carrito")) || [];

class ProductoCarrito {
  constructor(producto, cantidad) {
    (this.producto = producto), (this.cantidad = cantidad);
  }
}

const productosWave = document.getElementById("productosWave");
const productosCuin = document.getElementById("productosCuin");
const productosBasics = document.getElementById("productosBasics");

const carritoCompras = document.getElementById("carrito");
const carritoTotal = document.getElementById("carritoTotal");

catalogo();
carrito();

function moneda(numero) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(numero);
}

function carrito() {
  let sumaCarrito = 0;
  carritoCompras.innerHTML = "";
  Carrito.forEach((elemento) => {
    let articulosCarrito = document.createElement("tr");
    articulosCarrito.innerHTML = `
    <td>${elemento.producto.nombre}</td>
    <td>${moneda(elemento.producto.precio)}</td>
    <td><input type="number" min="1" step="1" max="100" id="carrito-cantidad-${
      elemento.producto.codigo
    }" value="${parseInt(elemento.cantidad)}" style="width:40px"/></td>
    <td>${moneda(elemento.producto.precio * elemento.cantidad)}</td>
    <td><img src="./assets/delete.png" class="boton-delete-carrito" id="borrar-producto-${
      elemento.producto.codigo
    }"></td>
    `;

    carritoCompras.append(articulosCarrito);

    sumaCarrito += elemento.producto.precio * elemento.cantidad;

    let cantidadProducto = document.getElementById(
      `carrito-cantidad-${elemento.producto.codigo}`
    );
    cantidadProducto.addEventListener("change", (e) => {
      let nuevaCantidad = parseInt(e.target.value);
      elemento.cantidad = nuevaCantidad;
      carrito();
      localStorage.setItem("carrito", JSON.stringify(Carrito));
    });

    let borrarProducto = document.getElementById(
      `borrar-producto-${elemento.producto.codigo}`
    );
    borrarProducto.addEventListener("click", () => {
      eliminarProducto(elemento);
      carrito();
      localStorage.setItem("carrito", JSON.stringify(Carrito));
    });
  });

  Carrito.length > 0
    ? (carritoTotal.innerHTML = `<th colspan="4"> Total de la compra ${moneda(
        sumaCarrito
      )}</th>`)
    : (carritoTotal.innerHTML = `<th colspan="4">Carrito vacío</th>`);
}

function eliminarProducto(productoEliminar) {
  let productosMantener = Carrito.filter(
    (elemento) => productoEliminar.producto.codigo != elemento.producto.codigo
  );
  Carrito.length = 0;
  productosMantener.forEach((elemento) => Carrito.push(elemento));
}

function catalogo() {
  fetch("js/stock.json")
    .then((respuesta) => respuesta.json())
    .then((data) =>
      data.stock.forEach((producto) => {
        let articulo = document.createElement("article");
        let imagen = document.createElement("img");
        imagen.src = producto.foto;
        imagen.alt = producto.nombre;
        imagen.style = "width: 250px";
        let texto = document.createElement("div");
        let boton = document.createElement("button");
        boton.id = `${producto.codigo}`;
        boton.innerText = "Agregar al Carrito";
        boton.className = "btn btn-light";
        boton.onclick = () => {
          if (producto.disponible == true) {
            let elementoExistente = Carrito.find(
              (elemento) => elemento.producto.codigo == producto.codigo
            );

            if (elementoExistente) {
              elementoExistente.cantidad += 1;
              carrito();
              Swal.fire(
                producto.nombre,
                "Se ha agregado al carrito!",
                "success"
              );
              localStorage.setItem("carrito", JSON.stringify(Carrito));
            } else {
              let productoCarrito = new ProductoCarrito(producto, 1);
              Carrito.push(productoCarrito);
              carrito();
              Swal.fire(
                producto.nombre,
                "Se ha agregado al carrito!",
                "success"
              );
              localStorage.setItem("carrito", JSON.stringify(Carrito));
            }
          } else {
            Swal.fire(producto.nombre, "No se encuentra en Stock", "error");
          }
        };
        texto.innerHTML = `<p><strong> ${producto.nombre} </strong></p>
  <p>${moneda(producto.precio)}</p>`;
        articulo.append(imagen);
        articulo.append(texto);
        articulo.append(boton);
        if (producto.coleccion == "Wave") {
          productosWave.append(articulo);
        }
        if (producto.coleccion == "Cuin") {
          productosCuin.append(articulo);
        }
        if (producto.coleccion == "Basics") {
          productosBasics.append(articulo);
        }
        if (producto.disponible == false) {
          imagen.className = "noDisponible";
          texto.className = "noDisponible";
          let textoNoDisponible = document.createElement("strong");
          textoNoDisponible.innerText = "SIN STOCK";
          articulo.style = "position:relative";
          textoNoDisponible.style =
            "position:absolute; top:40%; left:50% ; transform: translate(-50%,-50%)";
          articulo.append(textoNoDisponible);
        }
      })
    );
}
console.log(Carrito);
