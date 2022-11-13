"use strict";
// Exercício
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(number) {
    if (typeof number === "number") {
        return number;
    }
    else if (typeof number === "string") {
        return Number(number);
    }
    else {
        throw "value deve ser um number | string";
    }
}
console.log(Number(true));
