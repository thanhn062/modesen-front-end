import Vue from 'vue'
let v = new Vue();

// Requred parameters: ssurl, ssurls, sstitle, ssdesp, ssimg
let piurltmp = "http://pinterest.com/pin/create/bookmarklet/?url=_ssurl&description=_ssdesp&media=_ssimg";
let fburltmp = "";
//fburltmp = "http://www.facebook.com/sharer.php?u=_ssurl&t=_ssdesp&p[images][0]=_ssimg";
if(v.ISWECHATLITE !== 1){
	 fburltmp = "http://www.facebook.com/sharer.php?s=100&p[url]=_ssurl&p[images][0]=_ssimg&p[title]=_sstitle&p[summary]=_ssdesp"
}
let twurltmp = "https://twitter.com/share?url=_ssurls&text=_ssdesp&via=modesens_com";
let ggurltmp = "https://plus.google.com/share?url=_ssurl";
let tturltmp = "http://www.tumblr.com/share/link?url=_ssurl&name=_sstitle&description=_ssdesp";
let wburltmp = "http://service.weibo.com/share/share.php?title=_ssdesp&url=_ssurl";
let rdurltmp = "http://reddit.com/submit?url=_ssurl&title=_sstitle&description=_ssdesp";
let liurltmp = "http://www.linkedin.com/shareArticle?mini=true&url=_ssurl&title=_sstitle&summary=_ssdesp"
let emurltmp = "mailto:?subject=Love this!&body=_ssdesp Find it at _ssurl";
let qrurltmp = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=_ssurl";
let _that = null;

function copyToClipboard(text) {
  window.prompt(_that.$t('share.urlshare'), text);
}

function wxlogin(){
  let obj = new WxLogin({
    id: "login_container",
    appid: "wxe1d0bd1efdb080ca",
    scope: "snsapi_login,snsapi_userinfo",
    redirect_uri: `/accounts/weixin/callback/?next=${location.href}`,
    state: new Date().getTime(),
    style: "",
    href: ""
  });
}

//from: 1=fromemodelinkshare, 2=from === 2
export function ssshare(that, target, from, ssurl, ssurls, sstitle, ssdesp, ssimg, lsuid){
  _that = that;
	if(ssurl.indexOf('frommodelink') != -1){
		ssurl = ssurl.replace('?frommodelink=1', "").replace('&frommodelink=1', "");
	}else if(ssurl.indexOf('fromcoupon') != -1){
		ssurl = ssurl.replace('?fromcoupon=1', "").replace('&fromcoupon=1', "");
	}
	
	if(from === 1){
		if(ssurl.indexOf('?') != -1){
			ssurl += "&frommodelink=1";
		}
		else{
			ssurl += "?frommodelink=1";
		}
	}else if(from === 2){
		if(ssurl.indexOf('?') != -1){
			ssurl = location.href + "&fromcoupon=1&refinfo=u"+lsuid+"&popup=open";
		}
		else{
			ssurl = location.href + "?fromcoupon=1&refinfo=u"+lsuid+"&popup=open";
		}
	}

	if (target == 'lk'){
		if(ssurl.indexOf('refinfo') == -1){
			if(ssurl.indexOf('?') != -1){
				copyToClipboard(ssurl+"&refinfo=u"+lsuid+"&popup=open");
			}
			else{
				copyToClipboard(ssurl+"?refinfo=u"+lsuid+"&popup=open");
			}
		}
		else{
			copyToClipboard(ssurl);
		}
		return;
	}
	
	let nurl = encodeURIComponent(ssurl);
	let tmp;
	if (target == 'pi') tmp = piurltmp;
	else if (target == 'fb') tmp = fburltmp;
	else if (target == 'tw') tmp = twurltmp;
	else if (target == 'gg') tmp = ggurltmp;
	else if (target == 'tt') tmp = tturltmp;
	else if (target == 'wb') tmp = wburltmp;
	else if (target == 'rd') tmp = rdurltmp;
	else if (target == 'li') tmp = liurltmp;
	else if (target == 'em') tmp = emurltmp;
	else if (target == 'qr') tmp = qrurltmp;
	let url = tmp.replace('_ssurls', ssurls.replace('&#39;', '%27')).replace('_ssurl', nurl.replace('&#39;', '%27')).replace('_ssdesp', ssdesp.replace('&#39;', '%27')).replace('_ssimg', ssimg.replace('&#39;', '%27')).replace('_sstitle', _that.$t(sstitle.replace('&#39;', '%27')));
	if (target == 'em') {
		window.location.href = url.replace('+', ' ');		
	} else if (target == 'qr') {
		$('#qrmodal img').attr('src', url);
	}else if(target == 'wc'){
        $('#wcmodal').modal('show');
        wxlogin();
    } else if(target == "wclogin"){
		$('#wcloginmodal').modal('show');
        wxlogin();
	}else {
		window.open(url,"name","width=800,height=600");	
	}
	// modelinkshare = false;
	ga('send', 'event', 'Share', target, ssurl);
}

function parentqrshare(){
	let nurl = encodeURIComponent(ssurl);
	
	let url = qrurltmp.replace('_ssurls', ssurls.replace('&#39;', '%27')).replace('_ssurl', nurl.replace('&#39;', '%27')).replace('_ssdesp', ssdesp.replace('&#39;', '%27')).replace('_ssimg', ssimg.replace('&#39;', '%27')).replace('_sstitle', sstitle.replace('&#39;', '%27'));
	
	$('#qrmodal img', window.top.document).attr('src', url);
	$('#qrmodal', window.top.document).modal('show');
	ga('send', 'event', 'Share', 'qr', url);
}
