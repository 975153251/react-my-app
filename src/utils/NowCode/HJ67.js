let line = '6 2 1 5';
// let line = '2 2 7 6';
// let line = '7 2 1 10';
const arr = line.split(' ').map((num) => parseInt(num));

let flag = false;
const dp = (arr, res) => {
  //   if (res === 24) {
  if (Math.abs(res - 24) < 1e-7) {
    // console.log('===', arr, res);
    flag = true;
    return;
  }
  if (!flag) {
    const newArr = JSON.parse(JSON.stringify(arr));
    for (let i = 0; i < newArr.length; i++) {
      newArr.splice(i, 1);
      console.log('---', newArr, arr[i]);

      dp(newArr, parseInt(res + arr[i]));
      dp(newArr, parseInt(res - arr[i]));
      dp(newArr, parseInt(arr[i] - res));
      dp(newArr, parseInt(res * arr[i]));
      if (res !== 0) {
        dp(newArr, arr[i] / res);
      }
      if (arr[i] !== 0) {
        dp(newArr, res / arr[i]);
      }
      console.log('5552', flag);
    }
  }
};

dp(arr, 0);
console.log(flag);
