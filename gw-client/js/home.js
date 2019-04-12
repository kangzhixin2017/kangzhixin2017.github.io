//是否展开作品
var zk = 0;
//查看更多次数
var more_num = 0;
//系列对应的样照个数
var series_photo_num = 0;
//一次展示的样照个数
var photo_num = 6;
//当前所在系列样照
var indexphoto = -1;
//放全部样照
var imgs;
//请求添加轮播图图片、系列列表
$(function() {
	//	$('.index').css("color","rgba(241,108,43,0.84)");  
	$.get(baseUrl + "/banner", function(res) {
		Debugger.log(res);
		if(res.err_code == 0) {
			var data = res.data;
			for(var i = 0; i < data.length; i++) {
				if(i == 0) {
					var src = data[i].Url;
					$('.lbdian').append(`<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>`);
					$('.lbimg').append(`<div class="item active"><img style="width: 100%;height: 366px;" src="${src}" /></div>`);
				} else {
					var src = data[i].Url;
					$('.lbdian').append(`<li data-target="#carousel-example-generic" data-slide-to="0""></li>`);
					$('.lbimg').append(`<div class="item"><img style="width: 100%;height: 366px;" src="${src}" /></div>`);
				}
			}
		} else {
			Debugger.log(res.err_msg);
		}
	})
	$.get(baseUrl + "/series", function(res) {
		Debugger.log(res);
		if(res.err_code == 0) {
			var data = res.data;
			$('.xl').append(`<div class="seriesitem col-xs-3" onclick = "series(0)"><img src="../img/icon/all.png" /><span>全部作品</span></div>`);
			for(var i = 0; i < data.length; i++) {
				if(i < 7) {
					var src = data[i].Icon;
					$('.xl').append(`<div class="seriesitem col-xs-3" onclick = "series(${data[i].Id})"><img src="${src}" /><span>${data[i].Name}</span>`);

				} else {
					var src = data[i].Icon;
					$('.xl').append(`<div class="seriesitem col-xs-3 chao" onclick = "series(${data[i].Id})"><img src="${src}" /><span>${data[i].Name}</span>`);
					$('.chao').hide();
				}
			}
			series(0);
		} else {
			Debugger.log(res.err_msg);
		}
	})

})
//设置轮播图滑动
$(function() {
	// 获取手指在轮播图元素上的一个滑动方向（左右）

	// 获取界面上轮播图容器
	var $carousels = $('.carousel');
	var startX, endX;
	// 在滑动的一定范围内，才切换图片
	var offset = 50;
	// 注册滑动事件
	$carousels.on('touchstart', function(e) {
		// 手指触摸开始时记录一下手指所在的坐标x
		startX = e.originalEvent.touches[0].clientX;

	});
	$carousels.on('touchmove', function(e) {
		// 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
		endX = e.originalEvent.touches[0].clientX;
	});
	$carousels.on('touchend', function(e) {
		//console.log(endX);
		//结束触摸一瞬间记录手指最后所在坐标x的位置 endX
		//比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
		var distance = Math.abs(startX - endX);
		if(distance > offset) {
			//说明有方向的变化
			//根据获得的方向 判断是上一张还是下一张出现
			$(this).carousel(startX > endX ? 'next' : 'prev');
		}
	})
});
//点击全部作品
$(".btn-all-works").click(function() {
	if(zk == 0) {
		$('.chao').show();
		$('.btn-all-works').text("收起 ^")
		zk = 1;
	} else {
		$('.chao').hide();
		$('.btn-all-works').text("全部系列 >");
		zk = 0;
	}

})
//点击某个系列
function series(i) {
	Debugger.log('点击的系列ID：' + i);
	if(indexphoto == i) {
		//点击同一个系列
		return false;
	}
	$("#yz").empty();
	indexphoto = i;
	more_num = 0;
	$.get(baseUrl + "/example/list?seriesId=" + i, function(res) {
		imgs = res.data;
		Debugger.log(imgs);

		series_photo_num = res.data.length;
		more();
	})

}
//点击查看更多
function more() {
	var start = more_num * photo_num;
	var end = (more_num + 1) * photo_num;
	if(end < series_photo_num) {
		for(var i = start; i < end; i++) {
			$('#yz').append(`<div class="col-xs-6 col-md-3 photoshow-item" onclick="btnphoto(${imgs[i].Id})"><img src="${imgs[i].Images[0]}"/><span class="msg"><p>&nbsp;&nbsp;${imgs[i].Name}</p><p><img style="width: 30px;height: 16px;" src="../img/icon/icon_browse.png"/>&nbsp;${imgs[i].Watch}&nbsp;&nbsp;</p></span></div>`);
		}
	} else if((end - series_photo_num) < photo_num) {
		for(var i = start; i < series_photo_num; i++) {
			$('#yz').append(`<div class="col-xs-6 col-md-3 photoshow-item" onclick="btnphoto(${imgs[i].Id})"><img src="${imgs[i].Images[0]}"/><span class="msg"><p>&nbsp;&nbsp;${imgs[i].Name}</p><p><img style="width: 30px;height: 16px;" src="../img/icon/icon_browse.png"/>&nbsp;${imgs[i].Watch}&nbsp;&nbsp;</p></span></div>`);
		}
	} else {
		//		Debugger.log("没有数据了！")
		alert("没有数据了！")

	}
	more_num++;
}
//点击某个样照
function btnphoto(id) {
	Debugger.log(id)
	window.location.href = '../view/photodetails.html?id=' + id;
}

$('.erweima').attr('src', '../img/icon/erweima.jpg');
$('.phone').text('全国统一客服热线:400-7706161');
//$('.admsg').append(`<label style='padding: 5px 0;'>地址:广州市天河区金穗路5号佛奥</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广场4楼412室</label>`);
$('.admsg').append(`<label style='padding: 5px 0;'>地址:广州市天河区金穗路5号佛奥广场4楼412室</label>`);
$('.admsg').append(`<label>版权所有@印象宝贝</label>`);