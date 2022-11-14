/*5.	Elaborar un algoritmo para leer la edad de 10 personas y mostrar cuantos son mayores de edad.*/

function mayor_de_edad(arreglo){
    var contador=0
    for ( let i =0 ; i<arreglo.length; i++){
        
        if(arreglo[i]>=18){
            contador++
        }
    }   console.log("El numero de personas mayores de edad es de:" + contador);
}
mayor_de_edad([75,16,5,3,13,18,54,23,42,100])