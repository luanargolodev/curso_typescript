export default function coinsToNumber(coin) {
    const number = Number(coin.replaceAll(".", "").replace(",", "."));
    return isNaN(number) ? null : number;
}
//# sourceMappingURL=coinsToNumber.js.map