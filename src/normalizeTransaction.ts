import coinsToNumber from "./coinsToNumber.js"
import stringToDate from "./stringToDate.js"

type TransactionPayment = "Boleto" | "Cartão de Crédito"
type TransactionStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornado"

export interface TransactionAPI {
  Nome: string
  ID: number
  Data: string
  Email: string
  Status: TransactionStatus
  ["Valor (R$)"]: string
  ["Forma de Pagamento"]: TransactionPayment
  ["Cliente Novo"]: number
}

export interface Transaction {
  nome: string
  id: string
  date: Date
  status: TransactionStatus
  email: string
  coin: string
  value: number | null
  payment: TransactionPayment
  new: boolean
}

export default function normalizeTransaction(transaction: TransactionAPI) {
  return {
    name: transaction.Nome,
    id: transaction.ID,
    date: stringToDate(transaction.Data),
    status: transaction.Status,
    email: transaction.Email,
    coin: transaction["Valor (R$)"],
    value: coinsToNumber(transaction["Valor (R$)"]),
    payment: transaction["Forma de Pagamento"],
    new: Boolean(transaction["Cliente Novo"]),
  }
}
