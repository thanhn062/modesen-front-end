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