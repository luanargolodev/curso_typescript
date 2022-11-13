// Type e Interface
// Type - A palavra chave type cria um atalho (alias) para um tipo customizado.
// Interface - Funciona na maioria dos casos da mesma forma que type, porém possui uma sintaxe diferente. As interfaces são geralmente utilizadas para definirmos objetos.

interface Produto {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
  `;
}

const computador: Produto = {
  nome: "Computador",
  preco: 5500,
  teclado: true,
};

preencherDados(computador);

preencherDados({
  nome: "Notebook",
  preco: 2500,
  teclado: false,
});

type Categorias = "design" | "código" | "descod";

function pintarCategoria(categoria: Categorias) {
  console.log(categoria);
  if (categoria === "design") {
    console.log("Pintar vermelho");
  }
}

pintarCategoria("design");

// Exercício - Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela
interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface ProdutoApi {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

fetchProduct();

function showProduct(data: ProdutoApi) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}
