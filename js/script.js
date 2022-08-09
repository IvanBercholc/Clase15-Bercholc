"use strict";
//Tienda online de Rica
const precioVestido = 5800;
const precioCancan = 3400;
const precioPolera = 2700;
const precioConjunto = 13000;
const Carrito = [];
class ProductoVenta {
  constructor(nombre, talle, cantidad, precio) {
    this.nombre = nombre,
      this.talle = talle,
      this.cantidad = cantidad,
      this.precio = precio
  }
}
let producto = prompt(
  "Seleccione producto: 'Vestido', 'Cancan', 'Polera' o 'Conjunto'. Escriba 'Comprar' para finalizar compra"
).toUpperCase();
function seleccionarTalle() {
  let talle = prompt("Seleccione talle: 'S', 'M' o 'L'. 'Cancelar' para salir").toUpperCase();
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
    talle = prompt("Seleccione talle: 'S', 'M' o 'L'. 'Cancelar' para salir").toUpperCase();
  }
}
function agregarProducto(precio) {
  let talle = seleccionarTalle();
  if (talle != undefined) {
    let cantidadProducto = parseInt(prompt("Seleccione cantidad"));
    if (!isNaN(cantidadProducto) && (cantidadProducto > 0)) {
      let precioProducto=cantidadProducto * precio
      Carrito.push(new ProductoVenta(producto, talle, cantidadProducto, precioProducto))
      alert(
        `Han sido agregados ${cantidadProducto} ${producto} talle ${talle} $ ${cantidadProducto * precio}`
      );
    }
    else {
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
let carritoTotal=Carrito.reduce((carrito,producto)=>carrito+producto.precio,0);
alert("Total  $ " + carritoTotal);
console.table(Carrito);