"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Produto('A Guerra dos Tronos');
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('J. R. R. Tolkien', 'O Hobbit');
    }
    if (busca === 'Dark Souls') {
        return new Jogo('Dark Souls', 1);
    }
    return null;
}
const produto = buscarProduto('Dark Souls');
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto instanceof Jogo) {
    console.log(produto.jogadores);
}
if (produto instanceof Produto) {
    console.log(produto.nome);
}
const honda = {
    nome: 'Honda'
};
