/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const result = new Array(amount + 1).fill(Infinity);
  result[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      const req = i - coin;

      if (req >= 0) {
        result[i] = Math.min(result[i], 1 + result[req]);
      }
    }
  }

  return result[amount] === Infinity ? -1 : result[amount];
};
