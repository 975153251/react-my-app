// 模拟Promise实现
/**
 * Promise有三种状态
 * Pending（进行中）
 * FulFilled（已完成）
 * Rejected（已失败）
 */
function MyPromise(executor) {
  //   初始化promise的状态和结果
  this._state = 'pending';
  this._value = undefined;

  //   回调函数数组，用于存储成功和失败回调
  this._callbacks = [];

  //   定义resolve函数，用于将Promise状态从pending变为fulfilled
  const resolve = (value) => {
    if (this._state === 'pending') {
      this._state = 'fulfilled';
      this.value = value;
      this._callbacks.forEach((callback) => {
        callback.onFulfilled(value);
      });
    }
  };

  //   定义reject函数，用于将Promise状态从pending变为rejected
  const reject = (reason) => {
    if (this._state === 'pending') {
      this._state = 'rejected';
      this._value = reason;
      this._callbacks.forEach((callback) => {
        callback.onRejected(reason);
      });
    }
  };

  //   执行executor函数，传入resolve和reject作为参数
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this._state === 'fulfilled') {
    onFulfilled(this._value);
  } else if (this._state === 'rejected') {
    onRejected(this._value);
  } else if (this._state === 'pending') {
    this._callbacks.push({
      onFulfilled,
      onRejected,
    });
  }
};

// 示例用法
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
  }, 1000);
});

promise.then(
  (result) => {
    console.log('成功', result);
  },
  (error) => {
    console.log('失败', error);
  },
);

/**
 * 回调地狱：异步回调地狱是指在嵌套的回调函数钟处理多个异步操作，导致代码变得混乱和难以为维护的情况
 * 1.Promise.then() 链式调用，可以更清晰地处理异步操作，减少可回调嵌套的问题。
 * 2.async/await,是ES6的异步处理方式，允许使用类似同步代码的方式来处理异步操作。是的代码更具可读性。
 *
 */
