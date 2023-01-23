import fetchData from "./fetchData.js"

type TransactionPayment = "Boleto" | "Cartão de Crédito"
type TransactionStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornado"

interface TransactionAPI {
  Nome: string
  ID: number
  Data: string
  Email: string
  Status: TransactionStatus
  ["Valor (R$)"]: string
  ["Forma de Pagamento"]: TransactionPayment
  ["Cliente Novo"]: number
}

async function handleData() {
  const data = await fetchData<TransactionAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  )

  if (data) {
    data.forEach((item) => {
      console.log(item)
    })
  }
}

handleData()
