//id = GetQueryString('token');
var Data;
var tryData;
var HEAD_IMG = window.localStorage.getItem('URL_HEAD')
http(URL.blindBox, {
	seriesId: window.localStorage.getItem('id')
}, 'blindBoxBack')

function blindBoxBack(e) {
	Data = e.data;
	setLunbo();
	setprize();
	setPage();
}

function trytryBack(e) {
	tryData = e.data;
	$('.tryImg').attr('src', HEAD_IMG + tryData.cover)
	$('.tryName').text(tryData.name)
	$('.tryNum').text(tryData.id)
}

function setPage() {
	$('.img1').attr('src', HEAD_IMG + Data.blindBoxSeries.seriesCover)
	$('.jifen').text(Data.blindBoxSeries.price)
}

function Try() {
	$('#mask').css('display', 'flex')
	document.getElementById('mask').addEventListener('touchmove', function(event) {
		event.preventDefault();
	})
	http(URL.trytry, {
		seriesId: window.localStorage.getItem('id')
	}, 'trytryBack')
}

function setprize() {
	for(var i = 0; i < Data.goodsList.length; i++) {
		var img = HEAD_IMG + Data.goodsList[i].cover
		console.log(img)
		$('.txt').append(`<img src="${img}" />
		`)
	}
	$('.txt-scroll-default').txtscroll({
		'speed': 50
	});
}

function setLunbo() {
	for(var i = 0; i < Data.nowBuyList.length; i++) {
		var username = formatString(Data.nowBuyList[i].userNickName, 2)
		$('.carousel_li').append(`<li>${username}抽到了: “${Data.nowBuyList[i].goodsName}”盲盒</li>`)
	}
	$('#FontScroll').FontScroll({
		time: 3000
	});
}

function maskDown() {
	$('#mask').hide()
}

function btn() {
	window.location.href = 'confirmOrder.html?type=1'
}