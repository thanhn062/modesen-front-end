import Vue from 'Vue';

//搜索框
//首字母大写
function firstUp(str){
  str = str.toLowerCase();
  result = '';
  result += str.substring(0,1).toUpperCase()+str.substring(1)+' ';
}

Vue.mixin({
  methods: {
    firstUp: firstUp(str)
  }
})