[toc]

# 编码规范
@(modesens)

## HTML
### 1. 语义化标签
![Alt text](./20100120_qtdl.jpg)
```
<main>
	<article>
	    <header>
		      <h1>Blog post</h1>
		      <p>Published: <time datetime="2015-02-21">21st Feb, 2015</time></p>
	    </header>
	    <p>…</p>
	</article>
</main>
```
> `template`标签下有且只有一个子元素
```
<template>
	<section>
		<h1>nuxt</h1>
		<p>template只有一个section</p>
	</section>
</template>
```

### 2. 属性顺序
> html属性应该按照特定的顺序出现以保证易读性
```
id class name data-xxx src, for, type, href title, alt aria-xxx, role value style
```

## CSS
> 项目中建议使用less编写样式
> 在公共less文件中定义常用的样式变量
> 样式文件统一放在**assets**文件夹下
> 公共样式文件在nuxt.config.js中配置
```
module.exports = {
	css: ['~/assets/css/main.less']
}
```
```scss
//assets/css/common.less
@fontSize: 16px;
@color: #333;
@border: .5px solid @color;
```
> 在其他less中引用common.less的公共变量
```
import "~/assets/css/common.less"

.productContainer {
	background: @color;
}
```
> 在.vue文件中引用common.less的公共变量
```
<style lang="less">
import "../assets/css/common.less"

.prdlist {
	border: @border;
}
</style>
```
### 1. 语法
1. 用两个空格来代替制表符（tab）（eslint检测）
1. 为选择器分组时，将单独的选择器单独放在一行。
2. 为了代码的易读性，在每个声明块的左花括号前添加一个空格。
3. 声明块的右花括号应当单独成行。
4. 声明块的右花括号应当单独成行。
5. 为了获得更准确的错误报告，每条声明都应该独占一行。
6. 所有声明语句都应当以分号结尾。
7. 不要在 rgb()、rgba()、hsl()、hsla() 或 rect() 值的内部的逗号后面插入空格。这样利于从多个属性值（既加逗号也加空格）中区分多个颜色值（只加逗号，不加空格）。
```
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

### 2. id 及 class 命名
> class 应以功能及内容命名，不以表现形式命名，通用且有意义的词
> class与id单词字母小写，多个单词组成时，使用中划线`-`分隔

### 3. 样式的生命顺序
1. 定位
2. 盒模型
3. 关于文字
4. 关于颜色、背景
5. 其他
```
.declaration-order {

  /*定位 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* 盒模型 */
  display: block;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin: 10px;
  float: right;
  overflow: hidden;

  /* 关于文字 */
  font-family: "Helvetica Neue", sans-serif;
  line-height: 1.5;
  text-align: center;

  /* 关于颜色，背景 */
  background-color: #f5f5f5;
  color: #fff;
  opacity: .8;

  /*其他 */
  cursor: pointer;
}
```

### 4. 嵌套规则（避免嵌套层级过多）
> 将嵌套深度限制在2-3级。对于超过3级的嵌套，给予重新评估。这可以避免出现过于详实的CSS选择器。 避免大量的嵌套规则。当可读性受到影响时，将之打断。推荐避免出现多于20行的嵌套规则出现。
```
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
    &:hover { text-decoration: none }
  }
}
```

## JavaScript
> 配合eslint使用

1. 使用两个空格进行缩进。
2. 除需要转义的情况外，字符串统一使用单引号。
```
console.log('hello there')
$("<div class='box'>")
```
3. 不要定义未使用的变量。
4. 关键字后面加空格。
```
if (condition) { ... } 
```
5. 函数声明时括号与函数名间加空格。
```
function name (arg) { ... } 
```
6. 始终使用 `===` 替代 `==`（例外： obj == null 可以用来检查 null || undefined。）
```
if (name === 'John')
if (name !== 'John')
```
7. 字符串拼接操作符 (Infix operators) 之间要留空格。
```
var x = 2
var message = 'hello, ' + name + '!'
```
8. 逗号后面加空格。
```
var list = [1, 2, 3, 4]
function greet (name, options) { ... }
```
9. else 关键字要与花括号保持在同一行
```
if (condition) {
  // ...
} else {
  // ...
}
```
10. 多行 if 语句的的括号不能省
```
if (options.quiet !== true) console.log('done')

if (options.quiet !== true) {
  console.log('done')
}
```
11. 不要丢掉异常处理中err参数
```
run(function (err) {
  if (err) throw err
  window.alert('done')
})
```
12. 使用浏览器全局变量时加上 window. 前缀 (例外: document, console and navigator)
13. 不允许有连续多行空行
14. 三元运算符 ? 和 : 与他们所负责的代码处于同一行
```
var location = env.development ? 'localhost' : 'www.api.com'

var location = env.development
  ? 'localhost'
  : 'www.api.com'
```
15. 变量和函数名统一使用驼峰命名法
16. 不允许有多余的行末逗号
17. 始终将逗号置于行末
18. 文件末尾留一空行
19. 键值对当中冒号与值之间要留空白
```
var obj = { 'key': 'value' }
```
20. 避免修改使用 const 声明的变量
21. 不要对变量使用 delete 操作
22. 不要定义冗余的函数参数
```
function sum (a, b, a) {  // ✗ avoid
  // ...
}

function sum (a, b, c) {  // ✓ ok
  // ...
}
```
23. 同一模块有多个导入时一次性写完
```
import { myFunc1, myFunc2 } from 'module'
```
24. 不要使用多余的括号包裹函数
```
const myFunc = (function () { })   // ✗ avoid
const myFunc = function () { }     // ✓ ok
```
25. switch 一定要使用 break 来将条件分支正常中断
26. 不要省去小数点前面的0
27. 避免对声明过的函数重新赋值
28. 嵌套的代码块中禁止再定义函数
```
if (authenticated) {
  function setAuthUser () {}    // ✗ avoid
}
```
29. 外部变量不要与对象属性重名
```
var score = 100
function game () {
  score: 50         // ✗ avoid
}
```
30. 除了缩进，不要使用多个空格
31. 不要混合使用空格与制表符作为缩进
32. new 创建对象实例后需要赋值给变量
```
const character = new Character()
```
33. 不能使用let重复声明变量
34. return 语句中的赋值必需有括号包裹
```
function sum (a, b) {
  return (result = a + b)   // ✓ ok
}
```
35. 不要随意更改关键字的值
36. 不要使用制表符
37. 行末不留空格
38. 行末不留空格
39. 如果有更好的实现，尽量不要使用三元表达式
```
let score = val ? val : 0     // ✗ avoid
let score = val || 0          // ✓ ok
```
40. return，throw，continue 和 break 后不要再跟代码
41. import, export 和解构操作中，禁止赋值到同名变量
42. 代码块中避免多余留白
43. 展开运算符与它的表达式间不要留空白
44. 遇到分号时空格要后留前不留
```
for (let i = 0; i < items.length; i++) {...}
```
45. 注释首尾留空格
46. 模板字符串中变量前后不加空格
```
const message = `Hello, ${ name }`    // ✗ avoid
const message = `Hello, ${name}`      // ✓ ok
```
47. 检查 NaN 的正确姿势是使用 isNaN()

更详细规范参考地址： https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md

## vue规范
### 1. vue方法放置顺序
1. components
2. props
3. data
4. created
5. computed
5. mounted
6. activated
7. updated
8. methods
9. filter
11. watch
### 2. methods 自定义方法命名
1. 尽量使用常用单词开头（set、get、open、close、jump）
2. 驼峰命名（getListData）
3. axios方法以get、post开头，以data结尾（postFormData）
4. 事件方法以on开头

### 3. 基于模块开发
> 原则：每一个vue组件首先必须专注于解决一个单一的问题，独立的，可复用的，微小的和可测试的

### 4. 单闭合标签
> 当标签内没有内容时，使用单闭合标签
```
<div class="prdCon">dddddd</div>	//双闭合
<div class="prdCon"/>				//单闭合
```
### 5. vue组件命名
> 有意义的: 不过于具体，也不过于抽象
> 简短: 2 到 3 个单词
> 具有可读性: 以便于沟通交流
```
<app-header></app-header>
<user-list></user-list>
<range-slider></range-slider>
```
### 6. 只在需要时创建组件
### 7. 验证组件的props
> 提供默认值。
> 使用 type 属性校验类型。
> 使用 props 之前先检查该 prop 是否存在。
```
<template>
  <input type="range" v-model="value" :max="max">
</template>
<script type="text/javascript">
  export default {
    props: {
      max: {
        type: Number, // 这里添加了数字类型的校验
        default: function() { return 10; }
      },
      value: {
        type: String,
        default: function() { return 'test'; }
      }
    }
  }
</script>
```
