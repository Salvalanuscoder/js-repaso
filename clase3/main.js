/*
estructura del for

for (desde; hasta; actualizacion){
    el codigo a repetir
}
*/ 
// i++    i = i + 1;

// for (let i = 0; i < 3; i++){
//     console.log(i);
// }

// let numero = parseInt(prompt("ingrese el numero"));

// for(let i = 1; i <= 10; i++){
//     let resultado = numero * i;

//     alert(`${numero} * ${i} = ${resultado}`);
// }

// let saludo = "hola";
// let nombre = "salva";
// // let resultado = saludo + " "+ nombre;
// let resultado = `${saludo} ${nombre} como estan muchachos`;

// console.log(resultado);

// for(let turno = 1; turno <= 7; turno++) {
//     let nombre = prompt("ingrese su nombre");
//     alert(`Turno #${turno} Nombre:${nombre}`)
// }

// console.log('final');

// for (let i = 0; i < 10; i++) {
//     if(i ===  5 ){

//         // break;
//         continue;
//     }

//     console.log(i);
// }
// console.log('final');

/*
Estructura del while

while(condicion){
    codigo a repetir mientras la condicion es verdadera
}
*/

// let repetir = true;

// while(repetir){
//     console.log(repetir);
// }

// let usuario = prompt("ingrese el usuario");

// while (usuario != "salvi"){
//     alert('usuario incorrecto');
//     usuario = prompt("ingrese el usuario");
// }

// alert("Bienvenido");

// let valor = false;

// // while(valor){
// //     console.log("entramos");
// // }

// do{
// console.log("entramos");
// } while (valor);

/*
estructura del switch

switch(valor){
    case valor1:
        codigo a ejecutar en caso de que valor sea igual a valor1
        break;

    case valor2
          codigo a ejecutar en caso de que valor sea igual a valor1
        break;
    .
    .
    .
    case valorn:
          codigo a ejecutar en caso de que valor sea igual a valorn
        break;

    default:
        codigo a ejecutar en caso de que ningun valor coincida con valor
    }  
*/


// let moneda = "ars";

// switch (moneda){
//     case "ars":
//         console.log("la moneda de argentina");
//         break;
    
//     case "cop":
//         console.log("la moneda de colombia");
//         break;

//     case "cpl":
//         console.log("la moneda de chile");
//         break;

//     default:
//         console.log("moneda desconocida");
//         break;
// }

let nombre = prompt("Ingrese su nombre");

while(nombre != "ESC"){
    switch (nombre){
        case "Ana":
            alert("hola Ana")
            break;
    
        case "juan":
            alert("hola juan");
            break;

            default:
                alert("nombre desconocido");
                break;
    }

nombre = prompt("Ingrese su nombre");
}