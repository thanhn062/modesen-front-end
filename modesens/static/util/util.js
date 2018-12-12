// 时间戳转为时间
export function getLocalTime (nS) {
	var date = new Date(parseInt(nS) * 1000);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    return Y+M+D;
};

// 时间转为时间戳
export function getTimestamp (nS) {
	var date = new Date(nS);
	var time = Date.parse(date);
return time;
};