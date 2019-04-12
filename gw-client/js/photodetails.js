$('.erweima').attr('src', '../img/icon/erweima.jpg');
$('.phone').text('全国统一客服热线:400-7706161');
//$('.admsg').append(`<label style='padding: 5px 0;'>地址:广州市天河区金穗路5号佛奥</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广场4楼412室</label>`);
$('.admsg').append(`<label style="padding: 5px 0;">地址:广州市天河区金穗路5号佛奥广场4楼412室</label>`);
$('.admsg').append(`<label>版权所有@印象宝贝</label>`);

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
//获取上一个页面传值
var id = GetQueryString("id");
$.get(baseUrl + "/example/detail?id=" + id, function(res) {
	if(res.err_code == 0) {
		var data = res.data;
		console.log(data)
		$('.name').text(data.Name)
		$('.xl').text(data.SeriesName)
		for(var i = 0; i < data.Images.length; i++) {
			$('.cbody').append(`<div class="col-xs-12 col-md-4 col-sm-6"><div><img src="${data.Images[i]}" /></div></div>`);
		}

	}
})
$('.btn').click(function() {
	window.location.href = '../view/order.html'
})