const path = require('path');
const CracoLessPlugin = require('craco-less');
const { loaderByName } = require('@craco/craco');
const { name } = require('./package.json');

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {},
          },
        },
        modifyLessRule(lessRule, context) {
          lessRule.exclude = /\.less$/;
          return lessRule;
        },
        modifyLessModuleRule(lessModuleRule, context) {
          lessModuleRule.test = /\.less$/;
          const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'));
          cssLoader.options.modules = {
            localIdentName: '[local]_[hash:base64:5]',
          };
          return lessModuleRule;
        },
      },
    },
  ],
  // webpack
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@constants': pathResolve('src/constants'),
      '@containers': pathResolve('src/containers'),
      '@hooks': pathResolve('src/hooks'),
      '@mocks': pathResolve('src/mocks'),
      '@routes': pathResolve('src/routes'),
      '@services': pathResolve('src/services'),
      '@styles': pathResolve('src/styles'),
      '@types': pathResolve('src/types'),
      '@utils': pathResolve('src/utils'),
      '@contexts': pathResolve('src/contexts'),
    },
    configure(webpackConfig) {
      // 配置扩展扩展名
      webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.scss', '.css']];
      // 接入微前端框架qiankun的配置,不接入微前端可以不需要
      webpackConfig.output.library = `${name}-[name]`;
      webpackConfig.output.libraryTarget = 'umd';
      webpackConfig.output.globalObject = 'window';
      return webpackConfig;
    },
  },
  devServer: {
    // 本地服务的端口号
    port: 8080,
    // 本地服务的响应头设置
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*',
    },
  },
};
