import countBy from "./countBy.js";
function filterValue(transaction) {
    return transaction.value !== null;
}
export default class Statistics {
    transactions;
    total;
    payment;
    status;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
    }
    setTotal() {
        const filtered = this.transactions
            .filter(filterValue)
            .reduce((acc, item) => {
            return acc + item.value;
        }, 0);
        return filtered;
    }
    setPayment() {
        return countBy(this.transactions.map(({ payment }) => payment));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => status));
    }
}
//# sourceMappingURL=Statistics.js.map