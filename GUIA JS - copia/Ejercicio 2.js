/*2.	En un cierto país el impuesto que se debe pagar por artículos 
importados se calcula mediante las siguientes reglas:
Precio
Impuesto
$0.00 - $20.00--------No genera impuesto.
$20.01 - $40.00-------30 %
$40.01 - $500.00------40 %
$500.01 en adelante---50 %*/

function impuesto(precio){

    if (precio >=20.01&&  precio <=40){
        console.log("El impuesto que debe pagar por el articulo es de el 30%");

    }else if(precio >=40.01 && precio <=500){
        console.log("El impuesto que debe pagar por el articulo es de el 40%");

    }else if(precio >=501){
        console.log("El impuesto que debe pagar por el articulo es de el 50%");

    }else{
    console.log("El articulo a comprar no genera impuestos")
    }
}

impuesto(20.01)
