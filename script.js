"use strict";
// Arrays
// Uma array é definida com o tipo de dado(s) que ela possui, seguida por [];
const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, "Taxas", 30, 40, 50, 3];
function maiorQue10(data) {
    return data.filter((item) => item > 10);
}
// function maiorQue10(data: number[]) {
//   return data.filter((item) => item > 10);
// }
function filtrarValores(data) {
    return data.filter((item) => typeof item === "number");
}
// function filtrarValores(data: (string | number)[]) {
//   return data.filter((item) => typeof item === "number");
// }
console.log(maiorQue10(numeros));
console.log(filtrarValores(valores));
