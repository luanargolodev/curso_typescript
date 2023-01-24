import { Transaction } from "./normalizeTransaction"

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

  constructor(transactions: Transaction[]) {
    this.transactions = transactions
    this.total = this.setTotal()
  }

  private setTotal() {
    const filtered = this.transactions
      .filter(filterValue)
      .reduce((acc, item) => {
        return acc + item.value
      }, 0)
    return filtered
  }
}
