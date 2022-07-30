let producto=prompt("Seleccione producto: 'Vestido', 'Top', 'Polera' o 'Medias'. Escriba 'Comprar' para finalizar compra");
let carrito=0;
let precioVestido=4700;
let precioTop=2500;
let precioPolera=3900;
let precioMedias=1800;
while(producto!="Comprar"){
    switch(producto){
        case "Vestido":
            carrito += precioVestido;
            alert("Ha sido agregado "+producto+"  $ "+precioVestido);
            break;
        case "Top":
            carrito += precioTop;
            alert("Ha sido agregado "+producto+"  $ "+precioTop);
            break;
        case "Polera":
            carrito += precioPolera;
            alert("Ha sido agregado "+producto+"  $ "+precioPolera);
            break;
        case "Medias":
            carrito += precioMedias;
            alert("Ha sido agregado "+producto+"  $ "+precioMedias);
            break; 
        default:
            alert("Error");
            break;
    }
    producto=prompt("Seleccione producto: 'Vestido', 'Top', 'Polera' o 'Medias'. Escriba 'Comprar' para finalizar compra");
}
alert("Total  $ "+ carrito)