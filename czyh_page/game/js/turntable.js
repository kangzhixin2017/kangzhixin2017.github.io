var token;
var Data;
//中奖奖品
var prize;
//中奖奖品位置
var Index;
var URL_HEAD;
var rotate = 22.5;
var isclick = false;
if(GetQueryString('token')) {
	token = GetQueryString('token');
	window.localStorage.setItem('token', token);
}
http(URL.config, {
	attribute: 'head'
}).then(e => {
	URL_HEAD = e;
	window.localStorage.setItem('URL_HEAD', e);
	getData();
})
$(function() {
	//拼单抢购
	status('1');

});

function getData() {
	http(URL.turntable, {
		token: window.localStorage.getItem('token'),
	}).then(e => {
		Data = e;
		setTurnTable();
		setNameList();
		setassortedBlindBox();
		setallBlindBox();
	})
}

function setallBlindBox() {
	for(var i = 0; i < Data.allBlindBox.length; i++) {
		var img = URL_HEAD + Data.allBlindBox[i].seriesCover
		$('.prizeCont2').append(`<div class="item2">
						<img src="${img}" alt="" />
						<div class="name">${Data.allBlindBox[i].seriesName}</div>
						<div class="bott">
							<div><span>${Data.allBlindBox[i].price}</span>积分</div>
							<img onclick='toBuy(${Data.allBlindBox[i].id})' src="../img/turn_btn3.png" />
						</div>
					</div>`)
	}
}

function setassortedBlindBox() {
	for(var i = 0; i < Data.assortedBlindBox.length; i++) {
		var img = URL_HEAD + Data.assortedBlindBox[i].seriesCover
		$('.prizeCont1').append(`<div class="item">
						<img src="${img}" alt="" />
						<div class="msg">
							<div class="title">${Data.assortedBlindBox[i].seriesName}</div>
							<div class="num">
								<div><span>${Data.assortedBlindBox[i].price}</span>积分</div>
								<img onclick='toSyndicate(${i})' src="../img/turn_btn.png" />
							</div>
						</div>
					</div>`)
	}
}

function toBuy(i) {
	console.log(i)
	window.localStorage.setItem('id', i)
	window.location.href = 'buy.html';
}

function toSyndicate(i) {
	console.log(i)
}

function setNameList() {
	for(var i = 0; i < Data.winList.length; i++) {
		var img = URL_HEAD + Data.winList[i].head;
		var time = formatDate(Data.winList[i].createTime, '2')
		$('.carousel_li').append(`<li class="item">
							<div class="left">
								<img src="${img}" />
								<div>
									<div class="top">${Data.winList[i].nickName}</div>
									<div class="bottom">${time}</div>
								</div>
							</div>
							<div class="right">获得了<span>${Data.winList[i].goods}</span></div>
						</li>`)
	}
	if(Data.winList.length > 5) {
		//中奖名单轮播
		$('#FontScroll').FontScroll({
			time: 3000,
			num: 1
		});
	}
}

function setTurnTable() {
	for(var i = 0; i < Data.drawList.length; i++) {
		var img = URL_HEAD + Data.drawList[i].img;
		//		console.log(rotate)
		$('.table').append(`<div class="item" style="transform: rotate(${rotate}deg);transform-origin: bottom;height: 1.65rem;width: .7rem;display: flex;position: absolute;align-items: center;flex-direction: column;">
						<img style="margin-top: .35rem;width: .5rem;height: .4rem;display: block;" src="${img}" />
						<div style="font-size: .1rem;color: #E13738;">${Data.drawList[i].name}</div>
					</div>`)
		rotate += 45;
		//		Data.drawList[i]
	}
}

function start() {
	if(isclick) {
		return
	}
	isclick = true;
	http(URL.clickDraw, {
		token: window.localStorage.getItem('token'),
		type: 1
	}).then(e => {
		//奖品有更新
		if(e.code == 10036) {
			maskShow(e.code);
			isclick = false;
			return;
		}
		//积分不足
		if(e.code == 10028) {
			isclick = false;
			maskShow(e.code);
			return;
		}
		for(var i = 0; i < Data.drawList.length; i++) {
			if(e.dId == Data.drawList[i].id) {
				prize = Data.drawList[i];
				Index = i;
				console.log('中奖奖品：', prize);
				console.log(Index);
			}
		}
		xuanzhuan();
	})
}

function xuanzhuan() {
	var animateto;
	if(Index == 0) {
		animateto = (360 * 5) + (360 - 22.5)
	} else {
		animateto = (360 * 5) + (360 - ((Index * 45) + 22.5))
	}
	$('.table').rotate({
		angle: 0,
		animateTo: animateto,
		duration: 7000,
		callback: function() {
			if(prize.goodsType == 0) {
				maskShow('0');
			} else if(prize.goodsType == 1) {
				maskShow('1');
			} else if(prize.goodsType == 2) {
				$('#mask').css('display', 'flex')
				document.getElementById('mask').addEventListener('touchmove', function(event) {
					event.preventDefault();
				})
				$('.tryImg').attr('src', URL_HEAD + prize.img)
				$('.tryName').text(prize.name)
				$('.tryNum').text(prize.id)
			}
			isclick = false;
		}
	});
}

function status(i) {
	$('.statu1').attr('src', '../img/turn_bg11.png');
	$('.statu2').attr('src', '../img/turn_bg10.png');
	$('.prizeCont').hide()
	if(i == 1) {
		$('.statu1').attr('src', '../img/turn_bg11_s.png')
		$('.prizeCont1').show()
	} else if(i == 2) {
		$('.statu2').attr('src', '../img/turn_bg10_s.png')
		$('.prizeCont2').show()
	}
}

function mask_btn() {
	$('.jf_mask1').hide()
	$('.jf_mask2').hide()
	$('.jf_mask3').hide()
	$('.jf_mask4').hide()
	$('.jf_mask5').hide()
}

function maskShow(code) {
	if(code == 10036) {
		$('.jf_mask5').css('display', 'flex')
		document.getElementById('jf_mask5').addEventListener('touchmove', function(event) {
			event.preventDefault();
		})
	} else if(code == 10028) {
		$('.jf_mask1').css('display', 'flex');
		document.getElementById('jf_mask1').addEventListener('touchmove', function(event) {
			event.preventDefault();
		})
	} else if(code == 0) {
		$('.jf_mask3').css('display', 'flex');
		document.getElementById('jf_mask3').addEventListener('touchmove', function(event) {
			event.preventDefault();
		})
	} else if(code == 1) {
		$('.jf_mask4').css('display', 'flex')
		$('.mask4_jifen').text(Data_prize.name)
		document.getElementById('jf_mask4').addEventListener('touchmove', function(event) {
			event.preventDefault();
		})
	} else if(code == 3) {
		$('.jf_mask2').css('display', 'flex')
		$('.mask2_img').attr('src', URL_HEAD + Data_prize.img)
		window.localStorage.setItem('prize_img', URL_HEAD + Data_prize.img)
		window.localStorage.setItem('prize_name', Data_prize.name)
		document.getElementById('jf_mask2').addEventListener('touchmove', function(event) {
			event.preventDefault();
		})
	}
}

function maskDown() {
	$('#mask').hide()
}
//setInterval(function(){
//	test()
//},1)
//function test() {
//	for(var i = 0; i < 100; i++) {
//		http(URL.clickDraw, {
//			token: '7249dc49b442455ca3f1a2629d75557a',
//			type: 0
//		}).then(e => {})
//	}
//}