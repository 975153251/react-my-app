// Write your code here
let line = '123 15';
let addStr = '';

// 1.
let tokens = line.split(' ');
let a = tokens[0];
let b = tokens[1];
addStr = a + b;

// 2.
let sortArr = [];
const arrDouble = [];
const arrSingle = [];
for (let i = 0; i < addStr.length; i++) {
  if (i % 2 === 0) {
    arrDouble.push(addStr[i]);
  } else {
    arrSingle.push(addStr[i]);
  }
}
arrDouble.sort();
arrSingle.sort();
for (let i = 0; i < addStr.length; i++) {
  if (i % 2 === 0) {
    sortArr[i] = arrDouble[Math.floor(i / 2)];
  } else {
    sortArr[i] = arrSingle[Math.floor(i / 2)];
  }
}

// 3.
const transformStr = sortArr.reduce((pre, cur) => {
  // 判断cur，并转换cur
  let newCur = cur;
  if (!isNaN(parseInt(cur, 16))) {
    newCur = parseInt(('0000' + parseInt(cur, 16).toString(2)).substr(-4).split('').reverse().join(''), 2)
      .toString(16)
      .toUpperCase();
  }
  return pre + newCur;
}, '');

console.log(transformStr);
