import { memo } from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';

// memo: 组件的渲染结果，只会在 props 改变时才会重新渲染
const App = memo(() => {
  return (
    <div className="app">
      <div className="header">header</div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
    </div>
  );
});

export default App;
