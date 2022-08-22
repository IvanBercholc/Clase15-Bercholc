"use strict";
//TIENDA ONLINE DE RICA
// Listas de Precios y Productos
const precioVestido = 5800;
const precioCancan = 3400;
const precioPolera = 2700;
const precioConjunto = 13000;
const precioMicrotop = 2400;
const listaProductos = [];
class Productos {
  constructor(nombre, disponible, precio, foto, coleccion, codigo) {
    (this.nombre = nombre),
      (this.disponible = disponible),
      (this.precio = precio),
      (this.foto = foto),
      (this.coleccion = coleccion),
      (this.codigo = codigo);
  }
  habilitar() {
    if (this.disponible == false) {
      this.disponible = true;
    } else {
      console.log("Error. Producto disponible");
    }
  }
  deshabilitar() {
    if (this.disponible == true) {
      this.disponible = false;
    } else {
      console.log("Error. Producto no disponible");
    }
  }
  modificarPrecio(nuevoPrecio) {
    if (!isNaN(nuevoPrecio)) {
      this.precio = nuevoPrecio;
    } else {
      console.log("Error al modificar precio de producto");
    }
  }
}
const vestidoWave = new Productos(
  "Vestido Wave",
  true,
  precioVestido,
  "./assets/vestido-wave.jpg",
  "Wave",
  1
);
const cancanWave = new Productos(
  "Cancan Wave",
  true,
  precioCancan,
  "./assets/cancan-wave.jpg",
  "Wave",
  2
);
const microtopWave = new Productos(
  "Microtop Wave",
  false,
  precioMicrotop,
  "./assets/microtop-wave.jpg",
  "Wave",
  3
);
const poleraCuinAzul = new Productos(
  "Polera Cuin Azul",
  true,
  precioPolera,
  "./assets/polera-cuin-azul.jpg",
  "Cuin",
  4
);
const cancanCuinMarron = new Productos(
  "Cancan Cuin Marron",
  true,
  precioCancan,
  "./assets/cancan-cuin-marron.jpg",
  "Cuin",
  5
);
const cancanCuinAzul = new Productos(
  "Cancan Cuin Azul",
  true,
  precioCancan,
  "./assets/cancan-cuin-azul.jpeg",
  "Cuin",
  6
);
const poleraCuinMarron = new Productos(
  "Polera Cuin Marron",
  false,
  precioPolera,
  "./assets/polera-cuin-marron.jpeg",
  "Cuin",
  7
);
const cancanLigaNegra = new Productos(
  "Cancan Liga Negra",
  true,
  precioCancan,
  "./assets/cancan-liga-negra.jpg",
  "Basics",
  8
);
const poleraOxidoNegra = new Productos(
  "Polera Oxido Negra",
  false,
  precioPolera,
  "./assets/polera-oxido-negra.jpg",
  "Basics",
  9
);
const cancanOxidoOcre = new Productos(
  "Cancan Oxido Ocre",
  true,
  precioCancan,
  "./assets/cancan-oxido-ocre.jpeg",
  "Basics",
  10
);
const cancanOxidoNegra = new Productos(
  "Cancan Oxido Negra",
  true,
  precioCancan,
  "./assets/cancan-oxido-negro.jpeg",
  "Basics",
  11
);
const conjuntoOxidoNegro = new Productos(
  "Conjunto Oxido Negro",
  true,
  precioConjunto,
  "./assets/conjunto-oxido-negro.jpeg",
  "Basics",
  12
);

listaProductos.push(
  vestidoWave,
  cancanWave,
  microtopWave,
  poleraCuinAzul,
  cancanCuinMarron,
  cancanCuinAzul,
  poleraCuinMarron,
  cancanLigaNegra,
  poleraOxidoNegra,
  cancanOxidoOcre,
  cancanOxidoNegra,
  conjuntoOxidoNegro
);
console.log(listaProductos);

const Carrito = [];
class ProductoCarrito {
  constructor(producto, cantidad) {
    (this.producto = producto), (this.cantidad = cantidad);
  }
}

// Carga de Productos
const productosWave = document.getElementById("productosWave");
const productosCuin = document.getElementById("productosCuin");
const productosBasics = document.getElementById("productosBasics");

const divCarrito=document.getElementById("divCarrito");
const carritoCompras = document.getElementById("carrito");

catalogo();

function moneda(numero){
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(numero);
}

function carrito() {
  let renglonesCarrito = "";
  Carrito.forEach((elemento) => {
    renglonesCarrito += `
    <tr>
    <td>${elemento.producto.nombre}</td>
    <td>${moneda(elemento.producto.precio)}</td>
    <td>${elemento.cantidad}</td>
    <td>${moneda(elemento.producto.precio * elemento.cantidad)}</td>
    </tr>`;
  });
  carritoCompras.innerHTML=renglonesCarrito;
}

function catalogo() {
  listaProductos.forEach((producto) => {
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
        let productoCarrito = new ProductoCarrito(producto, 1);
        Carrito.push(productoCarrito);
        carrito();
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
  });
}
console.log(Carrito);

//
//
// ---PROCESO ANTERIOR---
// function busqueda() {
//   let busqueda = prompt(
//     "Bienvenido a Rica.\nIngrese el nombre del producto para saber el precio:\nVESTIDO\nCANCAN\nPOLERA\nCONJUNTO\nMICROTOP\nREMERA\n'SALIR' para finalizar busqueda"
//   ).toUpperCase();
//   while (busqueda != "SALIR") {
//     let productoEncontrado = listaProductos.find(
//       (producto) => producto.nombre == busqueda
//     );
//     if (
//       productoEncontrado != undefined &&
//       productoEncontrado.disponible == true
//     ) {
//       alert(
//         "Se ha encontrado " +
//           productoEncontrado.nombre +
//           ", tiene un precio de $ " +
//           productoEncontrado.precio
//       );
//     } else if (
//       productoEncontrado != undefined &&
//       productoEncontrado.disponible == false
//     ) {
//       alert(
//         "El producto " +
//           productoEncontrado.nombre +
//           " actualmente no se encuentra en stock"
//       );
//     } else {
//       alert("No se ha encontrado ningún producto");
//     }
//     busqueda = prompt(
//       "Bienvenido a Rica.\nIngrese el nombre del producto para saber el precio:\nVESTIDO\nCANCAN\nPOLERA\nCONJUNTO\nMICROTOP\nREMERA\n'SALIR' para finalizar busqueda"
//     ).toUpperCase();
//   }
//   alert("Elija lo que mas le guste!");
// }
// function seleccionarTalle() {
//   let talle = prompt(
//     "Seleccione talle: 'S', 'M' o 'L'. 'Cancelar' para salir"
//   ).toUpperCase();
//   while (talle != "CANCELAR") {
//     switch (talle) {
//       case "S":
//         return talle;
//       case "M":
//         return talle;
//       case "L":
//         return talle;
//       default:
//         alert("Error. Debe seleccionar un talle");
//     }
//     talle = prompt(
//       "Seleccione talle: 'S', 'M' o 'L'. 'Cancelar' para salir"
//     ).toUpperCase();
//   }
// }
// function agregarProducto(precio) {
//   let talle = seleccionarTalle();
//   if (talle != undefined) {
//     let cantidadProducto = parseInt(prompt("Seleccione cantidad"));
//     if (!isNaN(cantidadProducto) && cantidadProducto > 0) {
//       let precioProducto = cantidadProducto * precio;
//       Carrito.push(
//         new ProductoVenta(producto, talle, cantidadProducto, precioProducto)
//       );
//       alert(
//         `Han sido agregados ${cantidadProducto} ${producto} talle ${talle} $ ${
//           cantidadProducto * precio
//         }`
//       );
//     } else {
//       alert("Error");
//     }
//   }
// }
// // PROCESO DE BÚSQUEDA Y COMPRA
// busqueda();
// let producto = prompt(
//   "Seleccione producto: 'Vestido', 'Cancan', 'Polera' o 'Conjunto'. Escriba 'Comprar' para finalizar compra"
// ).toUpperCase();
// while (producto != "COMPRAR") {
//   switch (producto) {
//     case "VESTIDO":
//       agregarProducto(precioVestido);
//       break;
//     case "CANCAN":
//       agregarProducto(precioCancan);
//       break;
//     case "POLERA":
//       agregarProducto(precioPolera);
//       break;
//     case "CONJUNTO":
//       agregarProducto(precioConjunto);
//       break;
//     default:
//       alert("Error. Debe seleccionar un producto");
//       break;
//   }
//   producto = prompt(
//     "Seleccione producto: 'Vestido', 'Cancan', 'Polera' o 'Conjunto'. Escriba 'Comprar' para finalizar compra"
//   ).toUpperCase();
// }
// // RESULTADO Y SALIDA
// let carritoTotal = Carrito.reduce(
//   (carrito, producto) => carrito + producto.precio,
//   0
// );
// alert("Total  $ " + carritoTotal);
// console.table(Carrito);
