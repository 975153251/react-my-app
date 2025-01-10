import React, { useContext } from 'react';
import { MyContext } from '@/context';

const LeftBox = () => {
  const value = useContext(MyContext);
  console.log('value: ', value);
  return <div>LeftBox</div>;
};

export default LeftBox;
