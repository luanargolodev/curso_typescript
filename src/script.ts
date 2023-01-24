import { CountList } from "./countBy.js"
import fetchData from "./fetchData.js"
import normalizeTransaction, {
  Transaction,
  TransactionAPI,
} from "./normalizeTransaction.js"
import Statistics from "./Statistics.js"

async function handleData() {
  const data = await fetchData<TransactionAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  )

  if (!data) return

  const transactions = data.map(normalizeTransaction)
  fillTable(transactions)
  fillStatics(transactions)
}

function fillList(list: CountList, containerId: string) {
  const $container = document.querySelector(`#${containerId}`)
  if ($container) {
    Object.keys(list).forEach((key) => {
      $container.innerHTML += `<p>${key}: ${list[key]}`
    })
  }
}

function fillStatics(transaction: Transaction[]): void {
  const data = new Statistics(transaction)
  const $total = document.querySelector<HTMLElement>("#total span")

  fillList(data.payment, "payments")
  fillList(data.status, "status")

  if ($total) {
    $total.innerText = data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }
}

function fillTable(transaction: Transaction[]): void {
  const $table = document.querySelector("#transactions tbody")
  if (!$table) return

  transaction.forEach((transaction) => {
    $table.innerHTML += `
      <tr>
        <td>${transaction.name}</td>
        <td>${transaction.email}</td>
        <td>R$ ${transaction.value}</td>
        <td>${transaction.payment}</td>
        <td>${transaction.status}</td>
      </tr>
    `
  })
}

handleData()
