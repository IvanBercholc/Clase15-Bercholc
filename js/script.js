"use strict";
//Tienda online de Rica
const precioVestido = 5800;
const precioCancan = 3400;
const precioPolera = 2700;
const precioConjunto = 13000;
const listaProductos = [];
class Productos {
  constructor(nombre, disponible, precio) {
    (this.nombre = nombre),
      (this.disponible = disponible),
      (this.precio = precio);
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
const vestido = new Productos("VESTIDO", true, 5800);
const cancan = new Productos("CANCAN", true, 3400);
const polera = new Productos("POLERA", true, 2700);
const conjunto = new Productos("CONJUNTO", true, 13000);
const microtop = new Productos("MICROTOP", false, 2400);
const remera = new Productos("REMERA", false, 2500);
listaProductos.push(vestido, cancan, polera, conjunto, microtop, remera);
const Carrito = [];
class ProductoVenta {
  constructor(nombre, talle, cantidad, precio) {
    (this.nombre = nombre),
      (this.talle = talle),
      (this.cantidad = cantidad),
      (this.precio = precio);
  }
}
busqueda();
let producto = prompt(
  "Seleccione producto: 'Vestido', 'Cancan', 'Polera' o 'Conjunto'. Escriba 'Comprar' para finalizar compra"
).toUpperCase();
function busqueda() {
  let busqueda = prompt(
    "Bienvenido a Rica.\nIngrese el nombre del producto para saber el precio:\nVESTIDO\nCANCAN\nPOLERA\nCONJUNTO\nMICROTOP\nREMERA\n'SALIR' para finalizar busqueda"
  ).toUpperCase();
  while (busqueda != "SALIR") {
    let productoEncontrado = listaProductos.find(
      (producto) => producto.nombre == busqueda
    );
    if (
      productoEncontrado != undefined &&
      productoEncontrado.disponible == true
    ) {
      alert(
        "Se ha encontrado " +
          productoEncontrado.nombre +
          ", tiene un precio de $ " +
          productoEncontrado.precio
      );
    } else if (
      productoEncontrado != undefined &&
      productoEncontrado.disponible == false
    ) {
      alert(
        "El producto " +
          productoEncontrado.nombre +
          " actualmente no se encuentra en stock"
      );
    } else {
      alert("No se ha encontrado ningún producto");
    }
    busqueda = prompt(
      "Bienvenido a Rica.\nIngrese el nombre del producto para saber el precio:\nVESTIDO\nCANCAN\nPOLERA\nCONJUNTO\nMICROTOP\nREMERA\n'SALIR' para finalizar busqueda"
    ).toUpperCase();
  }
  alert("Elija lo que mas le guste!");
}
function seleccionarTalle() {
  let talle = prompt(
    "Seleccione talle: 'S', 'M' o 'L'. 'Cancelar' para salir"
  ).toUpperCase();
  while (talle != "CANCELAR") {
    switch (talle) {
      case "S":
        return talle;
      case "M":
        return talle;
      case "L":
        return talle;
      default:
        alert("Error. Debe seleccionar un talle");
    }
    talle = prompt(
      "Seleccione talle: 'S', 'M' o 'L'. 'Cancelar' para salir"
    ).toUpperCase();
  }
}
function agregarProducto(precio) {
  let talle = seleccionarTalle();
  if (talle != undefined) {
    let cantidadProducto = parseInt(prompt("Seleccione cantidad"));
    if (!isNaN(cantidadProducto) && cantidadProducto > 0) {
      let precioProducto = cantidadProducto * precio;
      Carrito.push(
        new ProductoVenta(producto, talle, cantidadProducto, precioProducto)
      );
      alert(
        `Han sido agregados ${cantidadProducto} ${producto} talle ${talle} $ ${
          cantidadProducto * precio
        }`
      );
    } else {
      alert("Error");
    }
  }
}
while (producto != "COMPRAR") {
  switch (producto) {
    case "VESTIDO":
      agregarProducto(precioVestido);
      break;
    case "CANCAN":
      agregarProducto(precioCancan);
      break;
    case "POLERA":
      agregarProducto(precioPolera);
      break;
    case "CONJUNTO":
      agregarProducto(precioConjunto);
      break;
    default:
      alert("Error. Debe seleccionar un producto");
      break;
  }
  producto = prompt(
    "Seleccione producto: 'Vestido', 'Cancan', 'Polera' o 'Conjunto'. Escriba 'Comprar' para finalizar compra"
  ).toUpperCase();
}
let carritoTotal = Carrito.reduce(
  (carrito, producto) => carrito + producto.precio,
  0
);
alert("Total  $ " + carritoTotal);
console.table(Carrito);
