/**
 * 求最少交换次数
 * 给出数字K，请输出所有结果小于K的整数组合到一起的最少交换次数。
 * 组合一起是指满足条件的数字相邻，不要求相邻后再数组中的位置。
 * 数据范围
 * -100 < K <= 100
 * -100 <= 数组中的数值 <= 100
 */

/**
 * 输入描述：
 * 数组：1 3 1 4 0
 * K的数值：2
 */

/**
 * 输出描述：
 * 第一行输出最少较好次数： 1
 */

// 模拟输入
const arr = readline().split(' ');
const K = parseInt(readline());
// const arr = '1 3 1 4 0'.split(' ');
// const K = parseInt('2');
let count = 0;
/**
 * 1.求小于的数量 m
 * 2.求最小间隔距离 n
 * 3.n === 0 => 0
 * 4.m === n + 2 => n
 * 5.m > n + 2 => m - n
 * 6.m < n + 2 => m - 1
 */
const newArr = arr.filter((item) => {
  return item < K;
});
const m = newArr.length;
const indexArr = [];
arr.forEach((item, index) => {
  if (item < K) {
    indexArr.push(index);
  }
});
let n;
for (let i = 1; i < indexArr.length; i++) {
  const step = indexArr[i] - indexArr[i - 1] - 1;
  if (!n) {
    n = step;
  } else {
    n = step > n ? n : step;
  }
}
// 计算次数
if (n === 0) {
  count = 0;
} else {
  if (m > n + 2) {
    count = m - n;
  } else if (m === n + 2) {
    count = n;
  } else {
    count = m - 1;
  }
}
// 模拟输出
// console.log(count);
print(count);
