export default function makeChange( price, amountGiven ) {
  let change = amountGiven - price, coins = {}
  change -= ( coins.quarters = Math.floor( change / 25 ) ) * 25
  change -= ( coins.dimes = Math.floor( change / 10 ) ) * 10
  change -= ( coins.nickels = Math.floor( change / 5 ) ) * 5
  coins.pennies = change
  return coins
}