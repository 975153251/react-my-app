/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
const str = 'maxChoosableInteger = 10, desiredTotal = 15';
const [maxChoosableInteger, desiredTotal] = [
  parseInt(str.split(', ')[0].replace('maxChoosableInteger = ', '')),
  parseInt(str.split(', ')[1].replace('desiredTotal = ', '')),
];

var canIWin = function (maxChoosableInteger, desiredTotal) {
  // 直接获胜
  if (maxChoosableInteger >= desiredTotal) return true;

  // 全部拿完也无法到达
  var sum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;
  if (desiredTotal > sum) return false;

  // 记忆化
  var dp = {};

  /**
   * @param {number} total 剩余的数量
   * @param {number} state 使用二进制位表示抽过的状态
   */
  function f(total, state) {
    debugger;
    // 有缓存
    if (dp[state] !== undefined) return dp[state];

    for (var i = 1; i <= maxChoosableInteger; i++) {
      var curr = 1 << i;
      console.log('===', curr, state, curr & state);
      // 已经抽过这个数
      if (curr & state) continue;
      // 直接获胜
      if (i >= total) return (dp[state] = true);
      // 可以让对方输
      if (!f(total - i, state | curr)) return (dp[state] = true);
    }

    // 没有任何让对方输的方法
    console.log('***', dp);

    return (dp[state] = false);
  }

  return f(desiredTotal, 0);
};

const result = canIWin(maxChoosableInteger, desiredTotal);
console.log(result);
