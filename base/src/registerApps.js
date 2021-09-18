import { registerMicroApps, start } from 'qiankun';

const loader = (loading) => {
  console.log(loading);
};

registerMicroApps(
  [
    {
      name: 'm-vue',
      entry: '//localhost:20000',
      activeRule: '/vue',
      container: '#container',
      loader,
    },
    {
      name: 'm-react',
      entry: '//localhost:30000',
      activeRule: '/react',
      container: '#container',
      loader,
    },
  ],
  {
    beforeLoad: () => {},
    beforeMount: () => {},
    afterMount: () => {},
    beforeUnmount: () => {},
    afterUnmount: () => {},
  }
);

start({
  sandbox: {
    // experimentalStyleIsolation: true,
    strictStyleIsolation: true,
  },
});

// qiankun中的样式处理
// 1. css-module, 加前缀进行样式隔离
// 2. shadowDOM, 问题是shadowDOM标签中没有body标签
