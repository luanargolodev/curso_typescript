// Any - indica que o dado pode conter qualquer tipo de dado do TS.

function normalizar(texto: string) {
  return texto.trim().toLowerCase()
}

console.log(normalizar(' DeSIGN'))
// console.log(normalizar(200))

// Uso do Any
// Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos

async function fetchJSON(url: string) {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  manipularData(data)
}

fetchJSON("https://api.origamid.dev/json/cursos.json")

function manipularData(data: { nome: string}) {
  console.log(data.nome)
}

// Any e Erros
// Usar o any pode quebrar a sua aplicação
interface Curso {
  nome: string;
  horas: number;
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach(curso => {
    document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `
  })
}

const dados: any = 'o any gera problemas'

mostrarCursos(dados)