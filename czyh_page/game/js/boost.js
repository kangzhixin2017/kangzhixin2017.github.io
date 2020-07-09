var Data;
var headUrl = window.localStorage.getItem('URL_HEAD')
var download;
http(URL.config, {
	attribute: 'download'
}).then(e => {
	download = e
})
$(function() {
	var j = parseInt(document.documentElement.style.fontSize) * 1.45
	var a = window.screen.height;
	var b = $('.head').height();
	var c = a - b + j + 'px';
	$('.msg').css('min-height', c)
})

function loadImg() {
	var j = parseInt(document.documentElement.style.fontSize) * 1.45
	var a = window.screen.height;
	var b = $('.head').height();
	var c = a - b + j + 'px';
	$('.msg').css('min-height', c)
}
setInterval(function() {
	setTime()
}, 200)

function setTime() {
	var nowtime = new Date().getTime();
	var endtime = (new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
	var date_s = new Date(endtime - nowtime - 28800000)
	$('.time_msg').text((date_s.getHours() > 9 ? date_s.getHours() : '0' + date_s.getHours()) + ':' + (date_s.getMinutes() > 9 ? date_s.getMinutes() : '0' + date_s.getMinutes()) + ":" + (date_s.getSeconds() > 9 ? date_s.getSeconds() : '0' + date_s.getSeconds()))
}

http(URL.drawInvite, {
	token: window.localStorage.getItem('token')
}).then(e => {
	Data = e;
	console.log(e.inviteUser.length)
	if(e.inviteUser.length == 0) {
		$('.detail_msg').show()
	} else {
		for(var i = 0; i < e.inviteUser.length; i++) {
			var img = headUrl + e.inviteUser[i].head;
			$('.details').append(`<div class="item_i">
						<div class="left">
							<img src="${img}" />
							<div>${e.inviteUser[i].nickname}</div>
						</div>
						<div class="right">助力了${e.inviteUser[i].id/100}%</div>
					</div>`)
		}
	}
	setProgress();
})

function setProgress() {
	if(Data.count) {
		$('.Progress1').text(Data.count / 100 + "%")
		$('.Progress2').text((10000 - Data.count) / 100 + "%")
		$('.speed_s').css('width', (Data.count / 100) + '%')
	} else {
		$('.Progress1').text('0%')
		$('.Progress2').text('100%')
	}
}

function mask_btn() {
	$('.jf_mask3').hide()
}

function btn() {
	$('.jf_mask3').css('display', 'flex')
	$('.code').text(Data.shareUrl)
	document.getElementById('jf_mask3').addEventListener('touchmove', function(event) {
		event.preventDefault();
	})
}

function mask_btn2() {
	$('.jf_mask3').hide()
	$('.showcopy').show()
	copy('复制链接打开“V Talk”就能和好友一起打游戏。点击打开“V Talk”：' + download + ' 邀请码：' + Data.shareUrl)
	setTimeout(function() {
		$('.showcopy').hide()
	}, 2000)
}