//请求路径
//var baseUrl = 'http://192.168.31.66:8081/web'
var baseUrl = 'http://47.112.125.206:8001/web'
//是否开启调试模式
var isdebug = true;
$('.order').click(function() {
	window.location.href = '../view/storefront.html'
})
$('.about').click(function() {
	window.location.href = '../view/about.html'
})
$('.home').click(function() {
	window.location.href = '../view/home.html'
})
$('.btnback').click(function(){
	window.location.href = '../view/DDhome.html'
})
var Debugger = function() {};
//开关，是否显示输出
Debugger.switch = isdebug;
Debugger.log = function(message) {
	try {
		if(Debugger.switch) {
			console.log(message);
		}
	} catch(exception) {
		return 'Error:the function  log is not exist.';
	}
}

//var name = '音乐586';

//会在控制台输出'音乐586'
//Debugger.log(name);

//如果你不想有输出，把开关关了即可
//Debugger.switch = false;

//				<label>版权所有@印象宝贝</label>
//Debugger.log(name); //控制台不再输出name
var load = {
	start: function(name) {
		var name = "." + name;
		var msg = `<div class="spinner">  <div class="rect1 lo"></div><div class="rect2 lo"></div><div class="rect3 lo"></div><div class="rect4 lo"></div><div class="rect5 lo"></div></div>`;
		$(name).children().hide();
		$('body').append(msg);
	},
	end: function(name) {
		var name = "." + name;
		$(".spinner").remove();
		$(name).children().show();
	}
}

