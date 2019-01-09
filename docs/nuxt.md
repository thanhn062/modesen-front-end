[toc]

@(工作记录)
# vue-nuxt
## vue
官方文档：https://cn.vuejs.org/v2/guide/
### keep-alive
参考：https://cn.vuejs.org/v2/guide/components-dynamic-async.html
## nuxt
nuxt官方文档：https://zh.nuxtjs.org/guide/assets/
服务器端渲染与Nuxt.js：https://juejin.im/post/5b62f4cc6fb9a04f90792b49
### 安装流程
```
$ npm install -g vue-cli

$ vue init nuxt/starter <project-name>
$ cd <project-name>
$ npm install

$ npm run dev
```

### nuxt目录结构
- assets—用于组织未编译的静态资源如 LESS、SASS 或 JavaScript，会被Webpack编译处理
- components—用于组织应用的Vue.js组件，不会被Nuxt扩展
- layouts—用于组织应用的布局组件，在布局文件中添加 组件用于显示页面的主体内容。
- middleware—目录用于存放应用的中间件，将在每个路由改变时被调用
- pages—用于组织应用的路由及视图，该目录下的.vue文件会被Nuxt扩展，且生成对应的路由
- plugins—用于组织那些需要在根vue.js应用实例化之前需要运行的 Javascript 插件
- static—用于存放应用的静态文件，不会被Webpack编译处理
- store—目录用于组织应用的Vuex状态树文件

> store 的state可以用于存储公共变量，接口请求返回的数据（`注意：页面刷新，数据会被清空`）
> 同一页面的接口统一封装在一个js文件中（例如：static/api/1.0/product.js）
> image存放在S3
> 组件文件命名：首字母大写（例如：Header.vue）

### 页面组件
![Alt text](./nuxt11.png)
**nuxt内部的整个执行流程**
![Alt text](./NUXT12.png)
1. 在nuxt内部的整个执行流程中，最先经过的是状态管理中actions中的nuxtServerInit函数
2. 然后会经过middleware里的中间件函数，此时，还没有进行数据获取和页面渲染，所以我们可以在中间件函数中执行一些进入路由前的逻辑，比如用户权限判断。
3. 之后开始获取页面数据，asyncData和data的结果基本相同，我们可以直接调用server的接口，比如理由axios发送http请求获取页面所需的原始数据，然后以对象的形式return出去，此时，Vue对象还没有实例化，所以asyncData里无法调用到this。
4. fetch里主要用作填充状态树（store）数据。
5. 这些全部做完以后，开始实例化Vue对象，这里的逻辑和单页应用是一样的，在组装好整个页面应用之后，nuxt.js会将这个应用返回至前端。注意，这里返回的不是单纯的页面，而是应用。此时的页面局部spa应用的一些性质，比如数据监听双向绑定。
6. 页面来到前端后，开始执行mount的相关逻辑。

### nuxt 配置
参考链接：https://juejin.im/post/5b98accb6fb9a05cd8490c5b
#### 修改服务器地址
> package.json文件对config进行配置，可修改服务器地址
```
"config":{
  "nuxt":{
    "host":"127.0.0.1",
    "port":"1818"
  }
},
```
#### 配置全局CSS
> 全局CSS文件：/assets/css/main.css
```
html{
	font-size: 14px;
	color: red;
}
```
> 下载less less-loader：`npm i less less-loader -S`
> 全局Less文件： /assets/css/test.less
```
@bgColor: #CCC;
html{
	background: @bgColor;
}
```
> 在/nuxt.config.js中配置
```
module.exports = {
	css: ['~/assets/css/main.css','~/assets/test.less']
}
```
> 在vue文件导入less文件
```
<style lang="less">
@import "../../assets/test.less"
</style>
```
> 在less文件导入less文件
```
@import "~/assets/test.less"
```

#### 配置全局JS
**第一种方法：**
> 在nuxt.config.js中配置
```javascript
module.exports = {
	head: {
		script: [
			{src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
			{ src: 'js/move.js' }   //static是nuxt默认的存放类似不编译的 png图片 js的地方


		]
	}
}
```

**第二种方法：**
> 在layouts/default.vue中引入
```javascript
<script>
import '~/assets/js/main.js'
</script>
```
**第三种方法：**
> 在plugins文件夹下建公用的js文件，然后在nuxt.config.js中引入
```
module.exports = {
	plugins: [
		{ src: '~plugins/main.js', ssr: false },
	]
}
```
#### 配置webpack的loader
> 在nuxt.config.js可以对webpack的基本配置进行覆盖的，比如现在我们要配置一个url-loader来进行小图片的64位打包。就可以在nuxt.config.js的build选项里进行配置。
```
build: {
  loaders: [
    {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader:"url-loader",
      query:{
        limit:10000,
        name:'img/[name].[hash].[ext]'
    }
  ],
  /*
  ** Run ESLint on save
  */
  extend (config, { isDev, isClient }) {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
},
```
#### 引入jquery
**第一种方法**
> 安装jquery
```
npm i jquery
```
> 在nuxt.config.js中配置
```javascript
const webpack = require('webpack')
module.exports = {
	build: {
	    plugins: [
	      new webpack.ProvidePlugin({
	        '$': 'jquery'
	      })
	    ]
	}
}
```
**第二种方法**
> 在nuxt.config.js中配置
```javascript
head: {
	script: [
		{src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'}
	]
} 
//也可以在需要.vue文件中引入
```
**使用**
**`注意：jquery只能在页面渲染后的函数中使用（例如：mounted），或者用 process.browser判断（所有只能客户端使用的方法都可以如此使用）`**
```javascript
<script>
if (process.browser){
  $('[class*=ga-]').click(function() {
    console.log(this)
  })
}

export default () {
	mounted() {
		console.log($('div'))
	}
}
</script>
```

#### 引入字体
##### 在nuxt中引入Font Awesome字体图标库
参考链接：https://www.cnblogs.com/shenyf/p/8367185.html

#### 引入axios
> 安装axios：**npm i @nuxtjs/axios**
> 在nuxt.config.js中配置axios
> 在plugin文件夹中新建axios.js文件，可以对axios进行二次封装
```
//nuxt.config.js
module.exports = {
  plugins: [{ src: '~/plugins/axios.js', ssr: true }],
  modules: ['@nuxtjs/axios']
}
//plugin/axios.js
import qs from 'qs'
export default function ({ $axios, app }) {
  $axios.onRequest(config => {
	//根据调用时传入的不同参数进行不同操作
    if (config.async === false) { //asyncData函数中调用的接口
      config.baseURL = process.env.baseUrl + 'api/2.0/';  //请求根目录
    } else {
      config.baseURL = process.env.browserBaseURL + 'api/2.0/';  //请求根目录
    }
    config.timeout = 5000;    //请求超时
    config.headers.Authorization = 'Bearer ' + app.$cookies.get('token');//获取cookie放在头部传到后端
    // config.withCredentials = true, // 允许携带cookie
    // config.crossDomain = true   //允许跨域
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (config.secretKey === 1) {
      config.url += `?secretkey=${process.env.secretKey}`
    }
    if (config.method === 'post') {
      config.data.timestamp = new Date().getTime();
    }
    config.data = qs.stringify(config.data);
    return config;
  });
  $axios.onResponse(response => {
    return Promise.resolve(response.data);
  });
  $axios.onError(error => {
    return Promise.reject(error);
  });
}
//在vue文件中使用axios
export default {
  async asyncData({ $axios }) {
	let obj = $axios.post(url, data, {async: false});  //此处的async: false必传，async值不同，请求的baseurl不同
  },
  methods: {
	getprofile() {
	  let data = this.$axios.post(url, data, {async: true, secretKey: 1});  //页面渲染后的请求中async可以不传，如果有其它的参数需要，都可以在对象中添加（例如：secretKey）
	}
  }
}
```

### 中英翻译
> 在`lang`文件夹下建相应的语言文件（例如：en-US.js、zh-CN.js）
> 
> 公用的文字可以放在最外层
> 各组件独有的，包含在组件名称内
```javascript
//en-US.js
module.exports = {
  about: 'About',
  homepage: {
    subtitle: 'nuxt-i18n Test'
  },
  aboutpage: {
    subtitle: 'About Page'
  },
  footer: {
	  HelpCenter: 'Help Center'
  }
}
```
```javascript
//zh-CN.js
module.exports = {
  about: '关于我们',
  homepage: {
    subtitle: 'nuxt-i18n 测试'
  },
  aboutpage: {
    subtitle: 'About 页面'
  },
  footer: {
	  HelpCenter: '帮助中心'
  }
}
```
使用：`$t([变量名])`，在script中前面加**this**
```
<h2>{{ $t('homepage.subtitle') }}</h2>
<div>{{ $t('about') }}</div>
<a>{{ $t('footer.HelpCenter') }}</a>

<script>
export default {
	methods: {
		sendMessages() {
			alert(this.$t('messages'))
		}
	}
}
</script>
```
### vuex状态树
#### nuxtServerInit
> Nuxt.js 调用它的时候会将页面的上下文对象作为第2个参数传给它，上下文对象可以拿到req请求对象，那么就存在这么一种逻辑。我可以将用户信息存储在服务器session中，然后通过req.session.user来访问当前登录的用户。将用户登录信息传给客户端的状态树，代码如下：
```
actions: {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session.user) {
      commit('user', req.session.user)
    }
  }
}
```
这样在配合middleware中间件，就可以完成用户信息获取和会话控制，流程如下：
![Alt text](./nuxt13.png)

### ESLINT

### asyncData
> nuxt 提供了 asyncData，可以在页面加载之前请求数据
```
async asyncData () {
	try {
		const { data } = await axios.get('https://modesens.com', data);
		return {hotList: data};
	} catch (err) {
		console.error(err);
	}
}
```

> 同时请求多个资源
```
asyncData ({ params, error }) {
	return axios.all([
		axios.get(`https://modesens.com/product/?id=${params.id}`),
		axios.get(`https://modesens.com/product/show.json?topic_id=${params.id}`)
	])
	.then(axios.spread(function (detail, comments) {
		return {
			detail: detail.data[0],
			comments: comments.data
		}
	}))
	.catch(error => console.log(error))
}
```

### 路由参数传递（动态设置）
> 动态设置路由需要在`to`前面加`:`
#### params传参
> 1.params传参，地址栏是不会显示参数的
> 2.name值代表路由地址，params对象包含传递的参数（属性名和属性值相同时，可以只写属性名）
```
<nuxt-link :to="{name: 'product', params: {pid}}">查看产品详情</nuxt-link><br>
```
在product文件夹下的index.vue里用`$route.params.pid`进行接收
```
<template>
	<div>{{$route.params.pid}}</div>
</template>
```
#### query传参
> **注意** 页面之间的跳转使用query 不然的话刷新页面后会找不到参数
```
<nuxt-link :to="{name: 'product', query: {pid}}">查看产品详情</nuxt-link><br>
```
>接收使用`$route.query.pid`
#### 问号传参
> **注意**：路由要带引号
```
<nuxt-link :to="'/product/?pid='+pid">查看产品详情</nuxt-link>
```
#### 函数式路由
```
<template>
	<div @click="go(pid)">产品详情</div>
</template>

go(id){
	this.$router.push({path: '/product/' + id});
}
```
#### route 与 router 的区别
> `$route`：是当前router跳转对象里面可以获取name、path、query、params等
> `$router`：是VueRouter实例，想要导航到不容URL，则使用`$router.push()`，返回上一个history也是使用`$router.go()`

### nuxt 重定向
#### 1. redirect
> 使用context中的redirect（页面打开前跳转）
```
asyncData({ redirect }){
	redirect('/about')
}
fetch({ redirect }){
	redirect('/about')
}
```
#### 2. middleware中间件
> 在middleware文件夹下建一个中间件文件（例如：auth.js）
> 主要用作路由拦截，如果用户未登录，重定向到login（在需要的页面直接加上middleware即可）
```
export default function({ store, redirect }) {
  if (store.state.TOKEN) {    //TOKEN状态码是否存在
    return redirect('/login')
  }
}
```
> 在vue文件引入middleware文件
```javascript
export default {
 middleware: 'auth'  //页面渲染之前执行
}
```
#### 3. router
```
methods: {
	login(){
		this.$router.replace('/about')
	}
}
```
### localStorage、sessionStorage、cookie
> `localStorage`：永久性的存储，需要手动删除（下面重新封装后，可以存储带有效期的数据）
> `sessionStorage`：回话级别的存储，会话关闭，信息消失（可以存储在当前页面不会改变的接口数据）
> `cookie`：可以设置有效期，会跟随请求发送到服务端（可以存储需要传递到服务器的数据）
> 
> 在SSR中，created生命周期在服务端执行，node环境中没有localStorage/sessionStorage/cookie所以会报错，将需要使用localStorage/sessionStorage/cookie的代码放到浏览器使用的生命周期(mounted)中。
> 
> localStorage/sessionStorage用法：`getItem`、`setItem`、`removeItem`
> cookie用法：`this.$cookies.set()`，`this.$cookies.get()`，`this.$cookies.remove()`
> 
> cookie在asyncData()方法中可以使用`app.$cookies`对cookie值进行操作

**localStorage重新封装**
> 可以设置过期时间，可以用来存储通过接口获取的不常改变的数据，减少交互
```
// static/util/localStorage.js
export default {
  set: function(key, val, exp) {  //exp代表小时
    localStorage.setItem(key, val)
    localStorage.setItem(`${key}_expires_`, Date.now() + 1000*60*60*exp)  //毫秒*秒*分*时
  },
  get: function(key) {
    let exp = localStorage.getItem(`${key}_expires_`)
    if (Date.now() > exp) {
      this.remove(key)
      return
    }
    return localStorage.getItem(key)
  },
  remove: function(key) {
    localStorage.removeItem(key)
    localStorage.removeItem(`${key}_expires_`)
  }
}
```
在全局js文件中引入localStorage.js文件
```
import Vue from 'vue'
import ls from '~/static/util/localStorage.js'
Vue.prototype.$localStorage = ls
```
> 使用：`this.$localStorage.get()`，`this.$localStorage.set()`，`this.$localStorage.remove()`

### url编码/解码
> url编码：`encodeURIComponent`
> url解码：`decodeURIComponent`

**encodeURI/decodeURI和encodeURIComponent/decodeURIComponent的区别：**
> 前者被设计来用于对完整URL进行URL Encode，于是URL中的功能字符，比如&, ?, /, =等等这些并不会被转义；而后者被设计来对一个URL中的值进行转义，会把这些功能字符也进行转义。
> 
> encodeURI: 不编码的符号是： A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( )
> encodeURIComponent: 不编码的符号是：A-Z a-z 0-9 - _ . ! ~ * ' ( )

### ga跟踪
> 安装依赖项`@nuxtjs/google-analytics`
> 在`nuxt.config.js`配置该依赖项，配置好之后，路由发生改变就会自动跟踪
```
{
  modules: [
    // Simple usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-XXXXX-X'    //id替换为自己的
    }]
  ]
}
```
#### 手动跟踪
```javascript
this.$ga.event([Category], [Action], [Label], [Value])
//Category：用户与之互动的对象（例如：Video）
//Action：互动类型（例如：play）
//Label：用于对事件进行分类（例如：Fall Campaign）
//Value：整数类型（int），与事件相关的数值（例如：123）

this.$ga.event('accounts', 'login', 'login', 123)
```
```vbscript-html
<button @click="$ga.event('accounts', 'login', 'login', 123)">Login</button>
```
#### 全局ga跟踪
> 为需要跟踪的标签添加`data-ga-click`属性，在公用js文件中匹配所有有这个属性的标签为其添加相应事件操作
```
<div data-ga-click="accounts-login-click-123">ga跟踪</div>
```
```javascript
//main.js
//所有有data-ga属性的元素的点击事件
$('*[data-ga-click]').click(function() {
  let res = $(this).attr('data-ga-click');
  if (res) {
    var [category, action, label, val] = [...res.split('-')];
    label = label || 'click'
    ga('send', 'event', category, action, label, val)
  }
})
```
#### 命名规则
> `category`：事件类别，可以以组件名称或页面名称命名（例如：accounts）
> `action`：事件行为，用户进行的什么操作（例如：login，signup）
> `label`：对事件进行具体的分类，可以省略（例如：click，mouseover）
> `val`：与事件相关的数值，整数类型，可以省略（例如：123）
> 
> **注意：**因为全局跟踪以`-`连接几个参数，所以每个参数命名是不能包含`-`，可以使用驼峰命名法

|category|action|label|val|
| :-------- | --------:| :------: |:--------|
|Header|WomenClothing |mouseover|0
|Header|MenShoes||2
|Accounts|Login|||
|Accounts|Signup|||
|Footer|HelpCenter|click|
|Footer|ContactUs|OpenModal|1
|Homepage|bannerSwiper|click| 2
|Homepage|ShopWomen||
|coupons|storeLogo||
|coupons|shareBtn|click|

参考链接：
https://github.com/nuxt-community/analytics-module
https://matteogabriele.gitbooks.io/vue-analytics/content/

### 自定义全局方法、全局属性、全局变量解决方案
> **注意：**这个 在 asyncData 还是不能用的 ，在mounted等其他生命周期里面可以

> 在Vue原型上添加，一般建议函数名使用 `$` 前缀（像 vue-router 的 `$route` 和 `$router`），使用时直接用`this.$xxx`

全局main.js文件中
```javascript
Vue.prototype.$method = function () {}
Vue.prototype.STATIC_DOMAIN = 'https://d2go30nqlx7k6d.cloudfront.net'
//挂载到 prototype 上是为了方便组件内直接用 this.$method 来使用
```
在组件中使用
```javascript
export default {
  created () {
    this.$method()
  }
}
```
```html
<template>
	<div><img :src="STATIC_DOMAIN + '/static/img/20181129LOGO_Christmas.png'"></div>
</template>
```
## iframe
> django通过iframe打开vue页面后，再跳转需要刷新页面，此时不能使用nuxt-link，在js中控制跳转
```
 window.parent.location.pathname = '/'
```
### 跨域下获取iframe的父页面URL
```
if (parent != widnow) {
	url = document.referrer;  ////跨域(非同源)下的操作
} else {
	url = parent.location.href;
}
```

## bootstrap-vue
使用说明文档：https://bootstrap-vue.js.org/docs/
### 分页器
