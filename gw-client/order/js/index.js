//加载导航
$(".nav").load('view/nav.html?time=' + new Date().getTime(), function(response, status, xhr) {
	//	$(".title").text('登录')
	$(".btnback").hide()
	$(".backlogin").hide()
})
window.location.hash = 'login'
if(sessionStorage.getItem('isfx') != undefined) {
	window.location.hash = 'sneakpeek_1'
}
//加载首页
//$(".content").load('view/home.html?time=' + new Date().getTime(), function(response, status, xhr) {
//		$(".title").text('首页')
//	$(".btnback").hide()
//})

function goback() {
	window.history.go(-1)
}

//监听hash事件
function hashchange() {
	var hash = location.hash.slice(1);
	//	var a = rout.indexOf(hash);
	//	if(-1 == a) {
	//		return;
	//	}
	//	load.start()
	$(".content").load("view/" + hash + ".html?time=" + new Date().getTime(), function(response, status, xhr) {
		$(".title").text(navtitle)
		if(navtitle == '首页' || navtitle == '登录') {
			$(".btnback").hide()
			if(navtitle == '首页'){
				$(".backlogin").show()
			}else{
				$(".backlogin").hide()
			}
		} else {
			$(".btnback").show()
			$(".backlogin").hide()
		}
	})
}
//改变上下图标
function changeimg(name, is) {
	if(is == 1) {
		var name1 = '.' + name;
		var name2 = '.a' + name;
		var src = $(name1).attr('src')
		var upsrc = 'img/up.png';
		var downsrc = 'img/dow.png';
		if(src == upsrc) {
			$(name1).attr('src', downsrc);
			$(name2).css('background-color', 'white')
		} else {
			$(name1).attr('src', upsrc);
			$(name2).css('background-color', '#f5f5f5')
		}
	} else {
		var name = '.' + name;
		var src = $(name).attr('src')
		var upsrc = 'img/up.png';
		var downsrc = 'img/dow.png';
		if(src == upsrc) {
			$(name).attr('src', downsrc);
		} else {
			$(name).attr('src', upsrc);
		}
	}
}

function changecolor(name) {
	var name = '.' + name;
	$(name).css('background-color', 'white')
}