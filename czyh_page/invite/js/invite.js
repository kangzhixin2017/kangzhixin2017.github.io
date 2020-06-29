//默认点击排行榜
change(1)
//排行榜数据
var carouselList
//请求数据
http(URL.invite, {
	token: 'aa974cb187c64e48ba603aaa753d6cbc'
}).then(e => {
	console.log(e)
	//设置轮播数据
	carouselList = e.carouselList
	carousel(e.carouselList)
	//设置获得的积分
	$('.invite_num').html(e.awardScoreToMe)
	//设置我的邀请人数
	$('.total_user').html(e.shareCount)
	//设置我的邀请获得的积分
	$('.total_invite').html(e.awardScoreCount)
	$('.num2').html('完成可得' + e.awardScoreToFriend + '积分')
	//设置排行榜
	Top(e.rankingList)
})


function Top(data) {
	if(data.length > 0) {
		for(var i = 0; i < data.length; i++) {
			var img = "./img/one" + i + ".png"
			var time = new Date(data[i].finishTime)
			time = time.getFullYear() + '-' + (time.getMonth() + 1 >= 10 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1)) + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes()
			if(i < 3) {
				$('.list1').append(`<div class="item">
						<div class="item_l">
							<img src="${img}" />
							<div>
								<div>${data[i].nickName}</div>
								<div>${time}</div>
							</div>
						</div>
						<div class="item_r">邀请${data[i].number}人</div>
					</div>`)
			} else {
				$('.list1').append(`<div class="item">
								<div class="item_l">
								<span class="top_num">${i+1}</span>
								<div>
								<div>${data[i].nickName}</div>
								<div>${time}</div>
								</div>
								</div>
								<div class="item_r">邀请${data[i].number}人</div>
							</div>`)
			}
		}
	} else {
		$('.list1').append(`<div class="list1_no">
						<img style="width: 1.2rem;margin: .53rem auto 0;display: block;" src="./img/bg13.png" />
						<div style="color: #EFAF8E;font-size: .14rem;line-height: .2rem;margin-top: .1rem;text-align: center;">暂无邀请记录</div>
					</div>`)
	}
}

function carousel(data) {
	for(var i = 0; i < data.length; i++) {
		const src = CONFIG_URL + data[i].head;
		if(data[i].nickName.length > 10) {
			data[i].nickName = data[i].nickName.slice(0, 3) + '***' + data[i].nickName.slice(-3)
		}
		$('.carousel_li').append(`<div class="item"><img class="user_img" src="${src}" /><div class="name">${data[i].nickName}</div><div>邀请好友获得</div><div><span class="val">${data[i].awardScore}</span>积分</div></div>`)
	}
	x = $('.carousel_li');
	h = $('.carousel .item').length * 30; //20为每个li的高度
	setTimeout(b, 3000); //滚动间隔时间 现在是3秒
}

function b() {
	t = parseInt(x.css('top'));
	x.animate({
		'top': t - 30 + 'px'
	}, 'slow'); //20为每个li的高度
	if(Math.abs(t) == h - 60) { //20为每个li的高度
		carousel(carouselList)
	}
	setTimeout(b, 3000); //滚动间隔时间 现在是3秒
}

function change(i) {
	$('.left_c').css('background-color', 'rgba(0,0,0,0)')
	$('.right_c').css('background-color', 'rgba(0,0,0,0)')
	$('.list').css('display', 'none')
	if(i == 1) {
		$('.left_c').css('background-color', '#FFE8DC')
		$('.list1').css('display', 'block')
	} else {
		$('.right_c').css('background-color', '#FFE8DC')
		$('.list2').css('display', 'block')
	}
}

function invite() {
	toast.prompt1(
		"你的专属邀请码",
		'TW827D',
		e => {
			console.log(e)
			if(e == '去复制') {
				copy('TW827D')
				$('.showcopy').show()
				setTimeout(function() {
					$('.showcopy').hide()
				}, 2000)
			}
		}
	);
}

function rule() {
	toast.list('邀请须知', [{
				msg: '1、每天有邀请人数为5人，超出5人部分不发放积分奖励哦~'
			},
			{
				msg: '2、好友登录当天，您将会得到10积分奖励，积分发放可能会有延迟，30分钟后还没有到账的话，可以和客服反馈哦~'
			},
			{
				msg: '3、在注册后的第2-10天内，好友使用V Talk签到的第2、3天，您将分别等到4积分、6积分。'
			}
		],
		function(val) {
			console.log(val);
		}
	);
}

function copy(msg) {
	let transfer = document.createElement('input');
	document.body.appendChild(transfer);
	transfer.value = msg; // 这里表示想要复制的内容
	transfer.focus();
	transfer.select();
	if(document.execCommand('copy')) {
		document.execCommand('copy');
	}
	transfer.blur();
	console.log('复制成功');
	document.body.removeChild(transfer);
}