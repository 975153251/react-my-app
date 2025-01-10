import React from 'react';
import { MyContext } from '@/context';
import Container from '@/components/Container';
import Left from './Left';
import Center from './Center';
import Right from './Right';

// import { uniqueArray, each } from '@/utils/Arr';
import styles from './index.less';

const Home = () => {
  // 字符串反向
  // const str = 'abcde';
  // const func = (str) => {
  //   return str.split('').reduce((pre, cur) => {
  //     console.log(pre, cur);
  //     return cur + pre;
  //   });
  // };
  // const res = func(str);
  // console.log(res);

  // 闭包
  // for (var i = 0; i < 10; ++i) {
  //   (function (index) {
  //     setTimeout(function () {
  //       console.log(index);
  //     }, 1000);
  //   })(i);
  // }

  // // console方法
  // console.log('%o a', { a: 1 });
  // console.log('%s a', 'xx');
  // console.log('%d d', 123);
  // console.dir(document.body);
  // console.table({ a: 1, b: 2 });
  // for (var i = 0; i < 10; ++i) {
  //   console.count('a');
  // }

  // // 数组去重
  // const arr = [1, 2, 2, 3, 4, 4, 5];
  // const uniqueArr = uniqueArray(arr);
  // console.log('uniqueArr: ', uniqueArr);

  // // 遍历数组
  // const arr = [1, 2, 2, 3, 4, 4, 5];
  // each(arr);

  // 上写文 Context
  const myData = {
    a: 1,
    b: 2,
    c: 3,
  };

  // 实现一个柯里化函数add
  const myCurryAdd = (...args) => {
    const params = args;

    const fn = (...args) => {
      params.push(...args);
      return fn;
    };

    fn.valueOf = () => {
      return params.reduce((pre, cur) => {
        return pre + cur;
      });
    };

    return fn;
  };

  console.log(myCurryAdd(1)(2)(3).valueOf());
  console.log(myCurryAdd(1)(2, 3).valueOf());

  return (
    <Container width={1080} height={960}>
      <div className={`${styles.container} ${'notifyBox'}`}>
        <div className={styles.content}>
          <MyContext.Provider value={myData}>
            <div className={styles.leftPart}>
              <Left />
            </div>
            <div className={styles.centerPart}>
              <Center />
            </div>
            <div className={styles.rightPart}>
              <Right />
            </div>
          </MyContext.Provider>
        </div>
      </div>
    </Container>
  );
};

export default Home;
