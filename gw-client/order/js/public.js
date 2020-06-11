var baseUrl = 'https://yxbb.yinxiangbaby.cn:8101/20190426'
//alert("sd")
//是否开启调试模式
var isdebug = true;
//服务的数据
var servicedata;
var serviceindex;
//先睹为快
var xdwkdata;
var xdwkindex;
//底片下载
var downdata;
//用户的ID
var CustomerID;
var UserInfo;
var Phone;
//var up_img_src = '../img/up.png';
//var down_img_src = '../img/dow.png';
//var right_img_src = '../img/rignt.png';
//var left_img_src = '../img/bac.png';
//var rout = [
//	"home",
//	"basicinfo",
//	"commodity",
//	"paymentdetails",
//	"photography",
//	"pickup",
//	"review",
//	"sneakpeek",
//	"binding",
//	"download",
//	"vipinfo",
//	"integral",
//	"vipconsumption",
//	"recharge"
//];
//var routname = [
//	"首页",
//	"基本资料",
//	"会员商品",
//	"付款明细",
//	"摄影流程",
//	"取件流程",
//	"客户点评",
//	"先睹为快",
//	"绑定微信",
//	"底片下载",
//	"VIP信息",
//	"积分记录",
//	"VIP消费",
//	"充值记录"
//];
var Debugger = function() {};
Debugger.switch = isdebug;
Debugger.log = function(funname,message) {
	try {
		if(Debugger.switch) {
			console.log(funname,message);
		}
	} catch(exception) {
		return 'Error:the function  log is not exist.';
	}
}



var load = {
	start: function() {
//		var name = "." + name;
		var msg = `<div class="load" style="margin: 0;padding: 0;width: 100vw;height: 100vh;position: fixed;top: 0;z-index: 1111;background-color: white;"><div class="spinner"><div class="rect1 lo"></div><div class="rect2 lo"></div><div class="rect3 lo"></div><div class="rect4 lo"></div><div class="rect5 lo"></div></div></div>`;
//		$(name).children().hide();
		$('body').append(msg);
	},
	end: function() {
		$(".load").remove();
	}
}

//取消自带alert的域名显示
window.alert = function (name) {
    var iframe = document.createElement("IFRAME");
    iframe.style.display = "none";
    iframe.setAttribute("src", 'data:text/plain,');
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(name);
    iframe.parentNode.removeChild(iframe);
};
window.prompt = function (name) {
    var iframe = document.createElement("IFRAME");
    iframe.style.display = "none";
    iframe.setAttribute("src", 'data:text/plain,');
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(name);
    iframe.parentNode.removeChild(iframe);
};