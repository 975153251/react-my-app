/**
 * 字符串 编辑距离
 */
// const str1 = await readline();
// const str2 = await readline();
const str1 = 'ucyfsmg';
const str2 = 'zuixhuhyjgksyhqkjqxwylkoubykjxtcvkyqjpzgltbemmbmqibxxqpkgbvwbmjotixanvciibubglizmumcrjavakiygyuv';

const calc = (str1, str2) => {
  let dp = [];
  if (str1 === str2) {
    return 0;
  } else {
    //
    for (let i = 0; i <= str1.length; i++) {
      dp[i] = [];
      for (let j = 0; j <= str2.length; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
        }
      }
    }
  }
  return dp[str1.length][str2.length];
};

const result = calc(str1, str2);
console.log(result);
