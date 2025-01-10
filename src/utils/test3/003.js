/**
 * 100 game
 * 不重复
 */

// 模拟输入
const str = readline();
// const str = 'maxChoosableInteger = 10, desiredTotal = 1';
const [maxChoosableInteger, desiredTotal] = [
  parseInt(str.split(', ')[0].replace('maxChoosableInteger = ', '')),
  parseInt(str.split(', ')[1].replace('desiredTotal = ', '')),
];
const numList = [];
for (let i = 0; i < maxChoosableInteger; i++) {
  numList[i] = i + 1;
}
let firstWinFlag = false;

// 如果 maxChoosableInteger >= desiredTotal,先手直接获胜
if (maxChoosableInteger >= desiredTotal) {
  firstWinFlag = true;
} else {
  // 动态规划？？？不会
  firstWinFlag = false;
}

// 模拟输出
// console.log(firstWinFlag);
print(firstWinFlag);
