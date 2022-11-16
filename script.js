"use strict";
// Null e undefined
// null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas
const button = document.querySelector('button');
const config = localStorage.getItem('config');
if (button !== null) {
    button.click();
}
if (button) {
    button.click();
}
button?.click();
// undefined representa variáveis/propriedades que foram instanciadas, porém os seus valores ainda não foram definidos
let total;
if (total) {
    console.log('total foi definido');
}
else {
    console.log('total nao foi definido');
}
const livro = {};
const jogo = {
    nome: 'Ragnarok'
};
console.log(jogo.nome?.toLowerCase());
console.log(livro.nome?.toLowerCase());
// strictNullChecks
// Sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde realmente o null | undefined podem ser retornados
