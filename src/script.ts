import fetchData from "./fetchData.js"
import normalizeTransaction, { TransactionAPI } from "./normalizeTransaction.js"

async function handleData() {
  const data = await fetchData<TransactionAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  )

  if (!data) return

  const transactions = data.map(normalizeTransaction)

  transactions.forEach((item) => {
    console.log(item.date.getHours())
  })
}

handleData()
