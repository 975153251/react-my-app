var rob1 = function (nums) {
  console.log(nums);
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
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

var rob = function (nums) {
  const n = nums.length;
  // 偷0 与 不偷0 求最大
  const result1 = nums[0] + rob1(nums.slice(2, n - 1));
  console.log('result1: ', nums.slice(2, n - 1), nums[0]);
  const result2 = rob1(nums.slice(1, n));
  console.log(result1, result2);
  return Math.max(result1, result2);
};

const input = [1, 2, 3, 1];
const result = rob(input);
console.log(result);
