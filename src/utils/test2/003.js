/**
 * 最大连续字串长度
 */
// 模拟输入
const AStr = readline();
const BStr = readline();
const V = parseInt(readline());
// const AStr = 'xxcdefg';
// const BStr = 'cdefghi';
// const V = parseInt('5');
const stepArr = [];
const lenArr = [];
// 求所有ASCII码之差
for (let i = 0; i < AStr.length; i++) {
  const aCharCode = AStr[i].charCodeAt();
  const BCharCode = BStr[i].charCodeAt();
  const step = aCharCode - BCharCode > 0 ? aCharCode - BCharCode : BCharCode - aCharCode;
  stepArr.push(step);
}
// 根据ASCII码之差，求满足条件的所有子串的长度
for (let m = 0; m < stepArr.length; m++) {
  let sum = stepArr[m];
  let len = 0;
  if (sum <= V) {
    len++;
  }
  for (let n = m + 1; n < stepArr.length; n++) {
    if (sum + stepArr[n] <= V) {
      sum += stepArr[n];
      len++;
    } else {
      break;
    }
  }
  lenArr.push(len);
  sum = 0;
  len = 0;
}
const result = lenArr.reduce((pre, cur) => {
  return pre > cur ? pre : cur;
});
// 模拟输出
print(result);
// console.log(result);
