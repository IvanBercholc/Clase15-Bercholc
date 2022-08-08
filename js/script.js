"use strict";
//Tienda online de Rica
const precioVestido = 5800;
const precioCancan = 3400;
const precioPolera = 2700;
const precioConjunto = 13000;
let carrito=0;
let talle;
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
function agregarProducto(precio){
    let cantidadProducto = parseInt(prompt("Seleccione cantidad"));
            if (!isNaN(cantidadProducto)&&(cantidadProducto>0)) {
    carrito += cantidadProducto * precio;
            alert(
              `Han sido agregados ${cantidadProducto} ${producto} talle ${talle} $ ${cantidadProducto * precio}`
            );
            }
            else{
                alert("Error");
            }
}
while (producto != "COMPRAR") {
    switch (producto) {
      case "VESTIDO":
        talle = seleccionarTalle();
        if (talle != undefined) {
            agregarProducto(precioVestido);
          }
          break;
      case "CANCAN":
        talle = seleccionarTalle();
        if (talle != undefined) {
            agregarProducto(precioCancan);
          }
          break;
      case "POLERA":
        talle = seleccionarTalle();
        if (talle != undefined) {
            agregarProducto(precioPolera);
          }
          break;
      case "CONJUNTO":
        talle = seleccionarTalle();
        if (talle != undefined) {
            agregarProducto(precioConjunto);
          }
          break;
      default:
        alert("Error. Debe seleccionar un producto");
        break;
    }
    producto = prompt(
      "Seleccione producto: 'Vestido', 'Cancan', 'Polera' o 'Conjunto'. Escriba 'Comprar' para finalizar compra"
    ).toUpperCase();
  }
alert("Total  $ " + carrito);