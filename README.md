# 一道前端关于编译的面试题
webpack loader 开发实践

一道前端关于编译相关的面试题：

编程题： 请基于但不限于acorn、babel等大前端技术编写一个webpack脚手架项目，
实现简单的wxml翻译器，将wxml+wxs翻译为html+js：
输入： 

1、pages/tools.wxs文件内容：

```javascript
// /pages/tools.wxs
var foo = "'hello world' from tools.wxs";
var bar = function (d) { return d; }
module.exports = { FOO: foo, bar: bar, }; module.exports.msg = "some msg";
```

2、page/index/index.wxml文件内容：

```html
<!-- page/index/index.wxml -->
<wxs src="./../tools.wxs" module="tools" />
<view> {{tools.msg}} </view>
<view> {{tools.bar(tools.FOO)}} </view>
```

输出html运行效果： some msg 'hello world' from tools.wxs 注：仅需实现核心功能完成以上'hello world'即可，不需要实现完整的翻译功能



其实很简单，就写一个 wxml 的 webpack loader 解析器就可以了，tools.wxs 这个文件的内容不用解析，直接返回就好。就是把源码转成 AST，然后再通过 AST 转成另外一种语言，这个我是参考了 Vue 的编译原理。也是编译原理的核心原理。



其实这道题考察的知识点挺多的，webpack 的原理，webpack loader 的原理，编译原理。