/**
 * 合唱队
 */

// 模拟输入
// const total = await readline();
// const str = await readline();
const total = '8';
const str = '186 186 150 200 160 130 197 200';
let count = 0,
  max = 0;
const newArr = str.split(' ').map((i) => parseInt(i));
const totalNum = parseInt(total);

const func = (newArr) => {
  //   const newArr = JSON.parse(JSON.stringify(newArr));
  let dp = [];
  //   判断左侧递减
  for (let i = 0; i < newArr.length; i++) {
    dp[i] = 1; // 元素自身
    for (let j = 0; j < i; j++) {
      if (newArr[i] > newArr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp;
};

const left = func(newArr);
const right = func(newArr.reverse()).reverse();
for (let i = 1; i < newArr.length - 1; i++) {
  max = Math.max(max, left[i] + right[i] - 1);
}
count = totalNum - max;
// 模拟输出
console.log(count);
