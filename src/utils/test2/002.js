/**
 * 组成最大数
 */

/**
 * 按字符串比大小
 * 同位相等，越短排序越靠前
 * 输出最大数字 字符串
 */
// 模拟输入
const strArr = readline()?.split(',');
// const strArr = '22,221'?.split(',');
// const strArr = '4589,101,41425,9999'?.split(',');
const sortArr = strArr.sort((a, b) => {
  // 自定义排序方法，末尾填充9至位数相同，再进行比较
  const step = a.length - b.length;
  let newA = a,
    newB = b;
  if (step >= 0) {
    const addStr = new Array(step).fill('9').join('');
    newB += addStr;
  } else {
    const addStr = new Array(-step).fill('9').join('');
    newA += addStr;
  }
  return newB - newA;
});
const result = sortArr.join('');
// 模拟输出
print(result);
// console.log(result);
