import Vue from "vue";

// 时间戳转为UTC时间
export function getLocalTime (nS) {
  var date = new Date(parseInt(nS) * 1000);
  var Y = date.getUTCFullYear() + '-';
  var M = (date.getUTCMonth()+1 < 10 ? '0'+(date.getUTCMonth()+1) : date.getUTCMonth()+1) + '-';
  var D = date.getUTCDate() + ' ';
  return Y+M+D;
};

// 时间转为时间戳
export function getTimestamp (nS) {
	var date = new Date(nS);
	var time = Date.parse(date);
return time;
};

// 千分位过滤器
export function NumFormat (value) {
    value = value.toString();
	if(!value) return '0.00';
    
    /*原来用的是Number(value).toFixed(0)，这样取整时有问题，例如0.51取整之后为1，感谢Nils指正*/
    var intPart =  Number(value)|0; //获取整数部分
    var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
    var floatPart = ".00"; //预定义小数部分
    var value2Array = value.split(".");

    //=2表示数据有小数位
    if(value2Array.length == 2) {
        floatPart = value2Array[1].toString(); //拿到小数部分

        if(floatPart.length == 1) { //补0,实际上用不着
            return intPartFormat + "." + floatPart + '0';
        } else {
            return intPartFormat + "." + floatPart;
        }

    } else {
        return intPartFormat;
    }
};

// 微信登录
export function wxlogin (fullPath) {
  let res = fullPath.match(/\/[a-z]+\/[a-z]+(.+)/)
  if (!res) return
  let next = [...res][1]
  let redirect_uri =
    '/accounts/weixin/callback2/?next=' + next
  let encode_url = encodeURIComponent(redirect_uri)
  let state = new Date().getTime()
  let url =
    'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9f36c4e7edbee26e&redirect_uri=' +
    encode_url +
    '&response_type=code&scope=snsapi_userinfo&state=' +
    state
  window.parent.location = url
}

export function installChromeExtention(){
  ga('send', 'event', 'Test', 'Extention', 'Chrome');
  window.open('https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb', '_blank');
  // chrome.webstore.install("https://chrome.google.com/webstore/detail/cmfmhegpbogfmojekmidappigcfbgbcb", function(){
  //     $.each($(".chrome-install-button"), function (i, e){
  //         $(e).attr("onclick", "window.open('https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb/reviews')");
  //         $(e).find("span").html(gettext("Write Review"))
  //     })
  //     ga('send', 'event', 'Test', 'Extention', 'chromeSuccess');
  // });
  event.stopPropagation();
}
//搜索框
//首字母大写
export function firstUp(str){
  str = str.toLowerCase();
  result = '';
  result += str.substring(0,1).toUpperCase()+str.substring(1)+' ';
}

// 获取当前浏览器
export function getBrowse(){
  var userAgent = navigator.userAgent;
  if(userAgent.indexOf("Edge") != -1){
      return "Others";
  }
  else if(userAgent.indexOf("QQBrowser") != -1){
      return "QQBrowser";
  }
  else if(userAgent.indexOf("Opera") != -1 || userAgent.indexOf("OPR") != -1){
      return "Opera";
  }
  else if(userAgent.indexOf("Chrome") != -1){
      return "Chrome";
  }
  else if (userAgent.indexOf("Firefox") != -1) {
      return "FF";
  }
  else if (userAgent.indexOf("Safari") != -1) {
      return "Safari";
  }
  else{
      return "Others";
  }
}
//设备类型
export default function deviceType(u) {
  if (typeof u !== 'string') {
    u = navigator.userAgent;
  }
  let browser = { //移动终端浏览器版本信息
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, //是否iPad
    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
  };
  if (browser.mobile || browser.ios || browser.android || browser.iPhone || browser.iPad) {
    return 'mobile'
  } else {
    return 'pc'
  }
}
var commonfn = {
  install(Vue){
    Vue.prototype.commonfn = {
      creatMetaTitle: function(H1, TITLE, MS_LOGO) {
        let meta = []
        // let LOCATION_URL = window.location.href
        let META_name = [
          'description',
          'twitter:url',
          'twitter:title',
          'twitter:description',
          'twitter:image',
          'og:url',
          'og:title',
          'og:description',
          'og:image'
        ]
        let content_txt = ''
        META_name.map(name => {
          if (name.includes('description')) {
            content_txt = H1
          } else if (name.includes('url')) {
            content_txt = 'https://modesens.com/loyalty/'
          } else if (name.includes('title')) {
            content_txt = TITLE
          } else if (name.includes('image')) {
            content_txt = MS_LOGO
          }
          meta.push({
            hid: name,
            name,
            content: content_txt
          })
        })
        return { 
          title: TITLE,
          meta
        }
      },
    }
  }
}

Vue.use(commonfn)
