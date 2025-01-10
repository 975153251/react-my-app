const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// =========================================
// 如何遍历对象

// 1.for in
for (let key in obj) {
  console.log(key, obj[key]);
}

// 2.Object.keys
const keys = Object.keys(obj);
keys.forEach((key) => {
  console.log(key, obj[key]);
});

// 3.Object.entries
const entries = Object.entries(obj);
entries.forEach(([key, value]) => {
  console.log(key, value);
});

// 4.Reflect.ownKeys
Reflect.ownKeys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
// =========================================

// =========================================
// 创建对象的几种方式
// // 1.对象字面量， 使用大括号{}创建对象，可以在大括号里定义对象的属性和方法
// var person = {
//   name: 'A',
//   age: 18,
// };

// // 2.构造函数，使用构造函数创建对象，通过new关键字调用一创建对象
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var person1 = new Person('B', 19);

// // 3.Object.create()方法，使用Object.create()方法创建对象，可以指定对象的类型
// var person = Object.create(null);
// person.name = 'C';
// person.age = 20;

// // 4.工厂函数，使用工厂函数创建对象，工厂函数是一个返回新对象的函数
// function CreatePerson(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }
// var person = CreatePerson('D', 22);

// 5.类(ES6)，使用类定义对象，类是一种对象构造器的语法糖
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
var person1 = new Person('E', 22);
// =========================================
