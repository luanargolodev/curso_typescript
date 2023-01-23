/**
 *
 * Recebe string 'R$ 1.000,00' e retorna number 1000
 */

export default function coinsToNumber(coin: string): number | null {
  const number = Number(coin.replaceAll(".", "").replace(",", "."))

  return isNaN(number) ? null : number
}
