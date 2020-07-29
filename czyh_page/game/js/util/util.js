//获取url路径参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

//格式化时间
function formatDate(date, type) {
	var time = new Date(date)
	if(type == 1) {
		return time.getFullYear() +
			'-' + (time.getMonth() + 1 >= 10 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1)) +
			'-' + (time.getDate() > 9 ? time.getDate() : '0' + time.getDate()) +
			' ' + (time.getHours() > 9 ? time.getHours() : '0' + time.getHours()) +
			':' + (time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes())
	} else if(type == 2) {
		return time.getFullYear() +
			'-' + (time.getMonth() + 1 >= 10 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1)) +
			'-' + (time.getDate() > 9 ? time.getDate() : '0' + time.getDate())
	}
}

//复制
function copy(msg) {
	var _input = document.createElement("input"); // 直接构建input
	_input.value = msg; // 设置内容
	document.body.appendChild(_input); // 添加临时实例
	_input.select(); // 选择实例内容
	document.execCommand("Copy"); // 执行复制
	document.body.removeChild(_input); // 删除临时实例
}
//判断是不是安卓
function CheckIsAndroid() {
	var browser = {
		versions: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return { //移动终端浏览器版本信息 
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
				iPad: u.indexOf('iPad') > -1, //是否iPad 
			};
		}(),
	}
	if(browser.versions.android)
		return true;
	return false;
}
/**
 * 判断是不是IOS
 */
function CheckIsIOS() {
	var browser = {
		versions: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return { //移动终端浏览器版本信息 
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
				iPad: u.indexOf('iPad') > -1, //是否iPad 
			};
		}(),
	}
	if(browser.versions.iPhone || browser.versions.iPad || browser.versions.ios)
		return true;
	return false;
}

function formatString(str, num = 3) {
	if(str.length > num) {
		str = str.slice(0, num) + '...'
	}
	return str;
}

function formatNumber(num, index) {
	var temp = num.toFixed(index);
	console.log(temp)
	let i = 1;
	while(temp.charAt(temp.length - 1) == 0 && i <= index) {
		console.log('s')
		if(i == index) {
			temp = temp.substring(0, temp.length - 2)
		} else {
			temp = temp.substring(0, temp.length - 1)
		}
		i++;
	}
	return isNaN(temp) ? 0 : temp;
}