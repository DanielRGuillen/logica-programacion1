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