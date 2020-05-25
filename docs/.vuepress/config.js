module.exports = {
  title: '程序员日常中的数学',
  description: '一些数学知识',
  base: '/math-for-programmers/',
  themeConfig: {
    activeHeaderLinks: false,
    sidebar: [{
      title: '基础',
      path: '/chapter1',
      children: [{
        title: '数学基础',
        path: '/chapter1/fundamental.html',
      }, {
        title: '数的表示',
        path: '/chapter1/number.html',
      }, {
        title: '开方计算',
        path: '/chapter1/sqrt.html',
      }, {
        title: '斐波那契数列',
        path: '/chapter1/fibonacci.html',
      }]
    }, {
      title: '算法导论中的数学',
      path: '/CLRS/',
      children: [
        { title: '求和', path: '/CLRS/sum.html' }
      ]
    }]
  },
  plugins: {
    "vuepress-plugin-mathjax": {
      target: 'svg',
        macros: {
          '*': '\\times',
        },
    },
  }
}
