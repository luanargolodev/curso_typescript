function filterValue(transaction) {
    return transaction.value !== null;
}
export default class Statistics {
    transactions;
    total;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
    }
    setTotal() {
        const filtered = this.transactions
            .filter(filterValue)
            .reduce((acc, item) => {
            return acc + item.value;
        }, 0);
        return filtered;
    }
}
//# sourceMappingURL=Statistics.js.map