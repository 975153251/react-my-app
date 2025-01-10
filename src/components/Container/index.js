/**
 * 大屏容器
 * @author zixi.xie@hand-china.com
 * @date 2021/2/18
 * @version: 0.0.1
 * @copyright: Copyright (c) 2018, Hand
 */
import React, { useState, useEffect, useRef } from 'react';
import { isNil, debounce } from 'lodash';

import styles from './index.less';

export default function Container({ width, height, children }) {
  const ref = useRef(null);
  // 实际宽高（传入参数控制，或者当前dom宽高）
  let originWidth = useRef(0);
  let originHeight = useRef(0);
  // 用户屏幕宽高
  let screenWidth = useRef(0);
  let screenHeight = useRef(0);
  // 页面初始化完成标记
  const [reportInitReadyFlag, setReportInitReadyFlag] = useState(false);

  const getInitParams = () => {
    // console.log(660, ref.current.clientWidth, ref.current.clientHeight);
    // console.log(661, width, height);
    const currentWidth = isNil(width) ? ref.current.clientWidth : width;
    const currentHeight = isNil(height) ? ref.current.clientHeight : height;
    screenWidth = window.screen.width;
    screenHeight = window.screen.height;
    originWidth = currentWidth ? currentWidth : screenWidth;
    originHeight = currentHeight ? currentHeight : screenHeight;
  };

  const updateSize = () => {
    ref.current.style.width = `${originWidth}px`;
    ref.current.style.height = `${originHeight}px`;
  };

  const updateScale = () => {
    // 视口区域宽高
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;
    const widthScale = bodyWidth / originWidth;
    const heightScale = bodyHeight / originHeight;
    // console.log('bodyWidth: ', bodyWidth);
    // console.log('bodyHeight: ', bodyHeight);
    // console.log('widthScale: ', widthScale);
    // console.log('heightScale: ', heightScale);
    // ref current可能为空
    if (ref.current) {
      ref.current.style.transform = `scale(${widthScale}, ${heightScale})`;
    }
  };

  const onResize = () => {
    getInitParams();
    updateScale();
  };

  useEffect(() => {
    getInitParams();
    updateSize();
    updateScale();
    window.addEventListener('resize', debounce(onResize, 100));
    setReportInitReadyFlag(true);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={ref} className={[`${styles['report-container']}`].join(' ')}>
      {reportInitReadyFlag && children}
    </div>
  );
}
