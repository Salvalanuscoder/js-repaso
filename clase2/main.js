/*
estructura del consicional if

if(condicion){
    codigo a ejecutar en caso de que la condicion sea verdadera
}
*/

/*
= asignacion
== comparacion solo de valor
=== comparacion tanto de valor como de tipo de datos
*/

//if (false){
//     console.log("hola");
// }

// let numero = 6;

// if (numero === 5){
//     console.log("entramos");
// }

// let nombre = prompt("ingrese su  nombre");

// if (nombre === "salvador"){
//     alert("holaa salva");
// }

/*
estructura del if else
if(condicion){
    codigo a ejecutar en caso de que la condicion sea verdadera
}else{
    codigo a ejecutar en caso de que la xcondicion no sea verdadera
}
*/
/*
let respuesta = prompt("terminaste la tarea?");

if(respuesta === "si"){
    alert("puedes salir a jugar");
}else{
    alert("no puedes salir a jugar");
}
*/

/*
estructura del if else if

if(condicion1){
    codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
    codigo a ejecutar cuando la condicion2 es verdadera
}else{
    codigo a ejecutar cuando ningua de las condiciones es verdadera
}
*/

let edad = parseInt(prompt("ingrese su edad"));

if(edad < 14){
    alert("no puedes entrar")
}else if(edad < 18){
    alert("puedes entrar con un acompañante");
}else if(edad < 25){
    alert("puedes entrar a la fiesta");
}else{
    alert("no puedes entrar a la fiesta")
}

/*
operador1 && operador2 es verdadera cuando ambos operadores son verdaderos, en caso contrario ees false

operador1 || operador2 es verdadera cuando al menos uno de los operadores es verdaderos, en caso contrario es false
*/

// let nombre = prompt("ingrese el nombre");
// let apellido = prompt("ingrese el apellido");

// if (nombre != "" && apellido != "" ){
//     let mensaje ="hola" + nombre + " " + apellido;
//     alert(mensaje);
// }

let nombre = prompt("ingrese nombre");

if (nombre != "" && (nombre === "SALVI" || nombre === "salvi")){
    alert("bienvenida Salvi");
}else{
    alert("Nombre incorrecto");
}