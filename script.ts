// Exercício
// Selecione os elementos com a classe link
// Crie uma função que deve ser executada para cada elemento
// Modificar através da função o estilo da color e border

const links = document.querySelectorAll(".link");

function handleLink(link: HTMLElement) {
  link.style.color = "red";
  link.style.border = "1px solid red";
}

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    handleLink(link);
  }
});