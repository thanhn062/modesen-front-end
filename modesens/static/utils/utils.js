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
//登录注册
export function SignupOrLogin(opt) {
  let res = location.pathname.match(/\/[a-z]+\/[a-z]+(.+)/)
  if (!res) return
  let next_url = [...res][1]
  if (opt === 'signup') {
    if (next_url === '/about/') {
      window.open('/accounts/signup/?next=/')
    } else {
      window.open('/accounts/signup/?next=' + next_url)
    }
  }
}
// 微信登录
export function wxlogin (fullPath) {
  let res = fullPath.match(/\/[a-z]+\/[a-z]+(.+)/)
  if (!res) return
  let next = [...res][1]
  let redirect_uri =
    'https://modesens.com/accounts/weixin/callback2/?next=' + next
  let encode_url = encodeURIComponent(redirect_uri)
  let state = new Date().getTime()
  let url =
    'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9f36c4e7edbee26e&redirect_uri=' +
    encode_url +
    '&response_type=code&scope=snsapi_userinfo&state=' +
    state
  window.parent.location = url
}