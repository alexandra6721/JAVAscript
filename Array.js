var frutas = ["manzana", "pera", "mango", "fresa"];

console.log (frutas);

console.log (frutas [0]);

var masFrutas = frutas.push("Piña","Uvas"); //manda al final

var ultimo = frutas.pop ("Uvas"); //eliminar datos

var nuevalongitud = frutas.unshift("Uvas"); //mandar al inicio

var borrarfruta = frutas.shift ("Uvas"); //borra la primera sin importar que "Uvas" se haya digitado 

var posicion = frutas.indexOf ("piña");
posicion //para ver la posicion 


export function solution(arraySecreto) {
    return (typeof arraySecreto[0] == "string"? true: false)  
  }
  