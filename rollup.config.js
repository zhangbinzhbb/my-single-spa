/**
 * @file
 * Created by zhangyatao on 2019/10/21.
 */
'use strict';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve'

export default {
  input: './src/my-single-spa.js', // 以哪个文件作为打包的入口
  output: {
    file: './lib/umd/my-single-spa.js', // 出口路径
    format: 'umd', // 统一模块规范
    name: 'mySingleSpa', // 指定打包后全局变量的名字
    sourcemap: true // 开启源码调试，可以准确的找到报错的位置
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // es6 - es5 过滤模块下的文件
    }),
    // 如果是开发环境的话启动本地服务器
    process.env.ENV === 'development' ? serve({
      open: true,
      contentBase: '',
      openPage: '/toutrial/quick/index.html', // 默认打开html的路径
      host: 'localhost',
      port: 10001
    }) : null
  ]
}