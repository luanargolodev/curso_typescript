// Annotation (anotação)
const produto: string = "Livro";

const preco: number = 200;

const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5,
};

const barato = preco < 400 ? true : "produto caro";

//IMPORTANTE: As anotações serão necessárias quando lidamos com funções.
function somar(a: number, b: number) {
  return a + b;
}

somar(4, 10);
// somar(4, '4');

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$ " + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
