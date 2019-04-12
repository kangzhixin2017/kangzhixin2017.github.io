function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
//获取上一个页面传值
var id = GetQueryString("id");
$.get(baseUrl + "/store/info?id="+id, function(res) {
	console.log(res)
	var data = res.data;
	var msg = data.Intro;
	console.log(msg)
	$('.msgbody').append(msg);
})