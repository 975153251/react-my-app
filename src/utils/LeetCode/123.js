var maxProfit = function (prices) {
  const dp = new Array(4).fill(0);
  dp[0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], -prices[i]);
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
    dp[2] = Math.max(dp[2], dp[1] - prices[i]);
    dp[3] = Math.max(dp[3], dp[2] + prices[i]);
  }
  return dp[3];
};

const input = [3, 3, 5, 0, 0, 3, 1, 4];
const result = maxProfit(input);
console.log(result);
