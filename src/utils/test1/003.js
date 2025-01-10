/**
 * 求最小的数字
 * 移除长度为 n
 */

/**
 * 1.寻找左侧 n + 1 位中的最小数字, 是否是第n+1位, 是则直接去掉前n位.不是则前n位,去掉n-1位.
 * 2.寻找右侧 去掉1位后的最小值
 */

// 模拟输入
const number1 = '123456789';
const n = parseInt('4');
// const number1 = readline();
// const n = parseInt(readline());
let result;
let rightResultArr = [];
const leftArr = number1.slice(0, n + 1).split('');
const leftMin = leftArr.reduce((pre, cur) => {
  return pre > cur ? cur : pre;
});
if (leftArr[leftArr.length - 1] <= leftMin) {
  result = parseInt(number1.slice(n));
} else {
  // 遍历右侧去掉1位后的所有情况
  const rightArr = number1.slice(n).split('');
  for (let i = 0; i < rightArr.length; i++) {
    rightResultArr.push(parseInt(number1.slice(n).split(rightArr[i]).join('')));
  }
  const rightMin = rightResultArr.reduce((pre, cur) => {
    return pre > cur ? cur : pre;
  });
  result = parseInt(`${leftMin}${rightMin}`);
}
// 模拟输出
console.log(result);
// print(result);
