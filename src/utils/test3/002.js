/**
 * 求最大面积
 */

// 模拟输入
// const barArr = JSON.parse(readline()?.slice('heights = '.length)).map((value) => parseInt(value));
const barArr = JSON.parse('heights = [2,1,5,6,2,3]'?.slice('heights = '.length)).map((value) => parseInt(value));
/**
 * 高度无序。
 * 遍历所有顶点，寻找两侧第一次低于当前顶点的高度。
 * 找到最大值。
 */
const areaArr = [];
barArr.forEach((value, index, array) => {
  let leftLen = 0;
  let rightLen = 0;
  //   寻找左侧
  for (let i = index - 1; i >= 0; i--) {
    if (array[i] && array[i] >= value) {
      leftLen++;
    } else {
      break;
    }
  }
  //   寻找右侧
  for (let i = index + 1; i < array.length; i++) {
    if (array[i] && array[i] >= value) {
      rightLen++;
    } else {
      break;
    }
  }
  //   计算面积
  const area = parseInt(value) * (1 + parseInt(leftLen) + parseInt(rightLen));
  areaArr.push(area);
});
const maxArea = areaArr.reduce((pre, cur) => {
  return pre < cur ? cur : pre;
});
// 模拟输出
print(maxArea);
// console.log(maxArea);
