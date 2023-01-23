export default function normalizeTransaction(transaction) {
    return {
        name: transaction.Nome,
        id: transaction.ID,
        date: new Date(transaction.Data),
        status: transaction.Status,
        email: transaction.Email,
        coin: transaction["Valor (R$)"],
        value: 0,
        payment: transaction["Forma de Pagamento"],
        new: Boolean(transaction["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalizeTransaction.js.map