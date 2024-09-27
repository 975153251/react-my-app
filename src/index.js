import React, { Suspense } from 'react'; // Suspense 解决路由懒加载问题
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';
import 'normalize.css';
import './assets/css/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
);
