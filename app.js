/*
Solicitar al usuario 3 número por prompt y guardarlo en variables
Analizar e idenificar cual es el num. mayor, del centro y menor.
Imprimir por consola los numeros primero de mayor a menor y luego de menor a mayor

Ejemplo
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.

*/

//Declaramos variables
let x, esMuyMayor, esMayor, esMenor;
let i = 0;
alert("ingrese 3 números");
do {
  for (i = 1; i <= 3; i++) {
    //validamos que la cantidad de entradas sean 3
    x = prompt(`numero ${i}`);
    if ((x = Number(x))) {
      //validamos que la entrada sea tipo number
      if (i == 1) {
        //estamos pidiendo el primer número
        //inicialmente asumiremos que es el menor, luego iremos analizando
        esMenor = x;
      }
      if (i == 2) {
        if (x < esMenor) {
          esMayor = esMenor;
          esMenor = x;
        } else {
          esMayor = x;
        }
      }
      if (i == 3) {
        if (x < esMenor) {
          // Si la entrada 3 correspode a que es menor que el menor que tenemos actualmente -> ya están ordenados de menor a mayor
          esMuyMayor = esMayor;
          esMayor = esMenor;
          esMenor = x;
        } else if (x < esMayor) {
          esMuyMayor = esMayor;
          esMayor = x;
        } else {
          esMuyMayor = x;
        }
      }
    } else {
      alert(`Lo que ingresaste no es un numero`);
      break;
    }
  }
} while (confirm("¿Intentar de nuevo"));
{
  if (esMuyMayor === esMayor && esMuyMayor === esMenor) {
    alert("Los números son iguales");
  } else {
    //Se muestra por consola los números de mayor a menor y luego de menor a mayor
    console.log(esMuyMayor, esMayor, esMenor);
    console.log(esMenor, esMayor, esMuyMayor);
  }
}

//PLANTEAR OTRA LÓGICA
// Guardando las entradas en un arreglo vacío identicar los numeros y mostrar por consola


/* 
// Declaramos variables
let num1 = Number(prompt("Ingresa el numero 1"));
let num2 = Number(prompt("Ingresa el numero 2"));
let num3 = Number(prompt("Ingresa el numero 3"));
if ((num1 === Number(num1)) && (num2 === Number(num2)) && (num3 === Number(num3))) {//validamos que la entrada sea un numero
  let array01 = []; //arreglo vacio
  array01.push(num1, num2, num3); //Se agregan los valores al array con el metodo .push
 //usando Math.min y Math.max se identifcan el mayor y menor pero no el del centro.
  // el metodo .sort ordena los valores de acuerdo al estandar unicode, pero no pasa asi con los numeros
  array01.sort(function (a, b) {
    return b - a;
  }); //ordena los valores de mayor a menor, si fuera a - b seria de menor a mayor
  console.log(array01);
  let reversed = array01.reverse(); //revierte el sentido del arreglo por lo tanto los muestra de menor a mayor
  console.log(reversed);
} else {
  alert("Ingresaste un valor no numérico");
}
*/