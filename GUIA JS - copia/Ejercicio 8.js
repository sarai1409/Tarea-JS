8./*Elabore un algoritmo con un menú simple con las cuatro operaciones básicas: 
sumar, restar, multiplicar, dividir.*/

function ejercicio(x,y, operaciones){
    switch (operaciones){
         case "suma":
         return console.log(x + y);

         case "resta":
         return console.log(x - y);

         case "multiplicacion":
         return console.log(x * y);

         case "division":
         return console.log(x / y);

}
}
    ejercicio(10 , 6, "suma");
    ejercicio(10 , 6, "resta");
    ejercicio(10 , 6, "multiplicacion");
    ejercicio(10 , 6, "division");
    