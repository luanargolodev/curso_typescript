import countBy from "./countBy.js"
import { Transaction } from "./normalizeTransaction.js"

type ValueTransaction = Transaction & {
  value: number
}

function filterValue(
  transaction: Transaction
): transaction is ValueTransaction {
  return transaction.value !== null
}

export default class Statistics {
  private transactions
  public total
  public payment
  public status

  constructor(transactions: Transaction[]) {
    this.transactions = transactions
    this.total = this.setTotal()
    this.payment = this.setPayment()
    this.status = this.setStatus()
  }

  private setTotal() {
    const filtered = this.transactions
      .filter(filterValue)
      .reduce((acc, item) => {
        return acc + item.value
      }, 0)
    return filtered
  }

  private setPayment() {
    return countBy(this.transactions.map(({ payment }) => payment))
  }

  private setStatus() {
    return countBy(this.transactions.map(({ status }) => status))
  }
}
