//获取url路径参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

//格式化时间
function formatDate(date) {
	var time = new Date(date)
	time = time.getFullYear() +
		'-' + (time.getMonth() + 1 >= 10 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1)) +
		'-' + (time.getDate() > 9 ? time.getDate() : '0' + time.getDate()) +
		' ' + (time.getHours() > 9 ? time.getHours() : '0' + time.getHours()) +
		':' + (time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes())
	return time
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