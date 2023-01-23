import fetchData from "./fetchData.js"
import normalizeTransaction, {
  Transaction,
  TransactionAPI,
} from "./normalizeTransaction.js"

async function handleData() {
  const data = await fetchData<TransactionAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  )

  if (!data) return

  const transactions = data.map(normalizeTransaction)
  fillTable(transactions)
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
