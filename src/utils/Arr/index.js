// 数组去重
const uniqueArray = (arr) => {
  console.log('arr: ', arr);
  let uniqueArr = [];

  // 1.Set方法，Set只允许存储唯一的值，可以将数组转换成Set，然后再将Set转换回数组以去重。
  uniqueArr = [...new Set(arr)];

  //   // 2.filter方法，利用filter方法来遍历数组，只保留第一次出现的元素
  //   uniqueArr = arr.filter((value, index, self) => {
  //     return self.indexOf(value) === index;
  //   });

  //   // 3.reduce方法，使用reduce方法逐个遍历数组元素，构建一个新的数组，只添加第一次出现的元素。
  //   uniqueArr = arr.reduce((acc, current) => {
  //     if (!acc.includes(current)) {
  //       acc.push(current);
  //     }
  //     return acc;
  //   }, []);

  //   // 4.indexOf方法，遍历数组，对于每个元素，检查其在数组中的索引，如果第一次出现，则添加到新数组。
  //   arr.forEach((item) => {
  //     if (uniqueArr.indexOf(item) === -1) {
  //       uniqueArr.push(item);
  //     }
  //     return uniqueArr;
  //   });

  //   // 5.includes方法，类似于indexOf方法，只不过使用includes来检查元素是否已存在于新数组。
  //   arr.forEach((item) => {
  //     if (!uniqueArr.includes(item)) {
  //       uniqueArr.push(item);
  //     }
  //     return uniqueArr;
  //   });

  return uniqueArr;
};

// 遍历数组
const each = (list) => {
  //   1.遍历性能最好
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
  //   //   2.
  //   for (const key in list) {
  //     console.log(key, list);
  //     console.log(list[key]);
  //   }
  //   //   3.
  //   for (const item of list) {
  //     console.log(item);
  //   }
  //   //   4.forEach仅遍历
  //   list.forEach((item) => {
  //     console.log('item: ', item);
  //   });
  //   //   5.map返回构造后的新数组
  //   const newList = list.map((item) => {
  //     console.log(item);
  //     return item;
  //   });
  //   console.log('list: ', list);
  //   console.log('newList: ', newList);
};

const list = [1, 2, 2, 3, 4, 4, 5];
// 逻辑判断
list.every((item) => {
  return true;
});
list.some((item) => {
  return true;
});

// 过滤
list.filter((item) => {
  return true;
});

// 查找
list.indexOf(2); // 第一个找到的位置,否则为-1
list.lastIndexOf(2); // 最后一个找到的位置,否则为-1
list.includes(2); // 接受一个参数,如果数组有目标值,则返回true
list.find((value, index) => {
  return value === 2;
}); // 如果找到目标值,则返回目标值,否则返回undefined
list.findIndex((value, index) => {
  return value === 2;
}); // 如果找到目标值,返回下标,否则返回-1

// reduce的多种用法
// 1.求和
// 2.找最大值
// 3.数组去重
// 4.分类
// 5.字符串反转

// 什么是伪数组，如何将其转化为真实的数组？
/**
 * 伪数组是一种类似数组的对象，他们有类似数组的结构，即数字索引和length属性，单不具有数组对象上的方法和功能
 * 1.函数内部的 arguments 对象
 * 2.DOM元素列表（querySelectorAll）
 * 3.一些内置的方法（如 getElementsByTagName）
 */
// 伪数组转化为真实数组的方法
const nodeList = document.querySelectorAll('.my-elements');
// 1.Array.from()方法
let arrayFromNodeList = Array.from(nodeList);

// 2.Array.prototype.slice.call()方法
arrayFromNodeList = Array.prototype.slice.call(nodeList);

// 3.Spread 运算符（拓展运算符）
arrayFromNodeList = [...nodeList];

export { uniqueArray, each };
