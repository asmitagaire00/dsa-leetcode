//Qn: https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/

/**
 *
 * @param {number[]} prices
 * @returns {number}
 */

const maxProfit = (prices) => {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      console.log(prices[i], prices[i - 1]);
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
