var rob = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      dp[0] = nums[0];
    } else if (i === 1) {
      dp[i] = Math.max(nums[i], nums[i - 1]);
    } else {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
  }
  return dp[n - 1];
};

const input = [1, 2, 3, 1];
const result = rob(input);
console.log(result);
