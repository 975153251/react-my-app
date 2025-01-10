const obj = {
  a: {
    b: {
      c: {
        d: 'abcd',
      },
    },
  },
  e: {
    f: {
      g: 'aefg',
    },
  },
  h: {
    i: 'ahi',
  },
};

const format = (obj) => {
  const res = {};
  let keyList = [];

  const func = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        res[keyList.join('.')] = obj[key];
        keyList = [];
      } else {
        keyList.push(key);
        func(obj[key]);
      }
    }
    return res;
  };
  return func(obj);
};

console.log(format(obj));
