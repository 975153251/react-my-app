var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    const index = arr.indexOf(s[i]);
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s[i]);
    maxLen = Math.max(maxLen, arr.length);
  }
  return maxLen;
};

const str = 'aab';
const res = lengthOfLongestSubstring(str);
console.log(res);
