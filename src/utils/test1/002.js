/**
 * 内存分配
 */

// 模拟输入
const sourceListStr = '64:2,128:1,32:4,1:128';
const applyListStr = '50,36,64,128,127';
// const sourceListStr = readline();
// const applyListStr = readline();
const obj = {};
const sourceList = sourceListStr.split(',');
sourceList.forEach((item) => {
  const source = item.split(':');
  obj[parseInt(source[0])] = parseInt(source[1]);
});
const applyList = applyListStr.split(',');
/**
 * 遍历分配请求，对照obj，如果存在资源满足条件则返回true，并修改对应资源信息。
 */
const result = applyList.map((value, index) => {
  let flag = false;
  for (let key in obj) {
    if (parseInt(key) >= value && obj[key] > 0) {
      // 成功分配
      obj[key] -= 1;
      flag = true;
      break;
    }
  }
  return flag;
});
// 模拟输出
console.log(result);
// print(result);
