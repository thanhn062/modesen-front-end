[toc]

# 开发积累
@(modesens)

## 项目需求
### 开发前准备工作
1. 确认需求内容，每个模块的具体功能（建立需求文档）
2. 页面的url（路由）
3. 页面的title、meta等信息
4. api
5. 是否需要ssr

### 开发完成
1. 标注测试点
2. 开发人员也需按照测试点测一遍（自测自修）
3. 跟踪测试进度
4.  测试完成发送merge request、上线

## CodeReview
> 功能提测阶段进行code review
> 目的：促进工程师日常代码交流和人员的成长上面来，与此同时作为辅助手段来对产品质量进行把关。

### 1. 代码规范
> 严格按照已制定的编码规范进行编写 <br>
> 如有更好的编码规范，可以对规范进行修改 <br>
[编码规范](./coding_rule.md)

### 2. checklist（逐步完善）
1. 通用样式font-size、color、border、space等，使用已定义好的`@[变量]`
2. 需要循环添加元素的，先将元素循环拼接到字符串，循环完成后再append到页面（性能优化）
3. 


### 3. 总结优化
> 定期回顾和总结


## 主题替换
> 首先样式用less编写
> 1. 建一个公共变量文件common.less，用来存放所有的可变值的公共样式变量
> 2. 建一个全局样式类文件main.less，用来存放所有的公共样式类，其中样式值引用common.less文件中定义的变量
> 3. 在所有需要用到公共样式变量的less文件中，都需要引入common.less文件，否则变量无法使用
> 4. 主题替换时，将common.less备份，命名为当前主题风格（如：common-black.less），在现有的common.less文件中修改需要改变的变量值，这样引用common.less文件的地方不需要改文件名字

```less
//common.less
@borderColor: #8e8e8e;
@fontColor: #1c1c1c;
@fontGray: #8e8e8e;
@underlineColor: #f54a35;
@fontStandard: 14px;id @borderColor;
@btnBgColor: #1c1c1c;
@btnFontColor: #fff;
@bgColor: #f5f5f5;

//main.less
@import 'common.less';	//引入common.less文件
.show > .btn-success.dropdown-toggle {
  background: @btnBgColor;
  border-color: @btnBgColor;
}
.btn-default {
  color: #333;
  background-color: @btnFontColor;
  border-color: @borderColor;
  &:hover {
    color: @btnFontColor;
    background-color: @btnBgColor;
    border-color: @btnBgColor;
  }
}
```


