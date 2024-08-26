
//? Pre entrega: Calcular edad promedio de los alumnos de una clase de crossfit que tiene hasta 10 alumnos - sumando todas las edades de las personas que componen esa población, y dividiendo esa suma por el número de dichas personas.


let edad = 0;
let sumaEdad = 0;
let ingresos = 0;


do{
    edad = parseInt(prompt("Por favor ingresá la edad de los 10 alumnos de la clase"));
    
    if(edad > 0 ){
        console.log("La edad ingresada es: " + edad);
        sumaEdad += edad;
        ingresos++;
    }else{
        alert("La edad ingresada debe ser mayor a 0"); 
    }
    
}while(ingresos < 10);

function calcularPromedio(sum, can){
    let promedio = sumaEdad / ingresos;
    return promedio;

}


console.log("Edades ingresadas para " + ingresos + " alumnos");
console.log("La suma de edades ingresadas es: " + sumaEdad); 
console.log("El promedio de las edades de la clase es: " + calcularPromedio());

