// =========================================
/**
 * 1.链式调用
 */
class Calculator {
  constructor(num) {
    this.value = num;
  }
  add(num) {
    this.value += num;
    return this; //返回自身，以实现链式调用
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  divide(num) {
    this.value /= num;
    return this;
  }

  getvalue() {
    return this.value;
  }
}

const calculator = new Calculator(10).add(5).subtract(2).multiply(3).divide(4).getvalue();

// =========================================

// =========================================
/**
 * 2.惰性函数
 * 惰性函数是指在第一次调用时执行特定操作，之后将函数重写或修改，以便在以后的调用中直接返回缓存结果，而不再执行该操作。这通常用于性能优化，以避免重复执行开销较大的操作
 * 如：判断浏览器时执行的操作
 */
function addEvent(element, type, handler) {
  if (element.addEventListener) {
    addEvent = function (element, type, handler) {
      element.addEventListener(type, handler, false);
    };
  } else if (element.attachEvent) {
    addEvent = function (element, type, handler) {
      element.attachEvent('on' + type, handler);
    };
  } else {
    addEvent = function (element, type, handler) {
      element['on' + type] = handler;
    };
  }

  return addEvent(element, type, handler); // 首次调用
}

// 示例使用
const myButton = document.getElementById('myButton');
addEvent(myButton, 'click', function () {
  console.log('Button clicked!');
});

// =========================================

// =========================================
/**
 * 3.JS监听对象属性的改变
 */
// /**
//  * 1.Object.defineProperty
//  */
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// Object.defineProperty(person, 'firstName', {
//   get() {
//     return this._firstName;
//   },
//   set(value) {
//     console.log(this);
//     this._firstName = value;
//     console.log(`firstName 改变为：${value}`);
//   },
//   configurable: true,
// });
// person.firstName = 'Alice'; // 输出： 'firstName 改变为：Alice'

/**
 * 2.Proxy
 */
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

const handler = {
  get(target, property) {
    console.log(`访问了属性 ${property}`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`设置了属性 ${property} 为 ${value}`);
    target[property] = value;
    return true;
  },
};

const proxyPerson = new Proxy(person, handler);
console.log(proxyPerson.firstName); // 输出："访问了属性 firstName"，然后输出 "John"
proxyPerson.lastName = 'Smith'; // 输出："设置了属性 lastName 为 Smith"

// =========================================
