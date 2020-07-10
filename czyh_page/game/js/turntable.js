var token;
var Data;
//中奖奖品
var prize;
//中奖奖品位置
var Index;
var rotate = 22.5;
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
	window.localStorage.setItem('id',i)
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
	http(URL.clickDraw, {
		token: window.localStorage.getItem('token'),
		type: 1
	}).then(e => {
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
			console.log(Data.drawList[Index])
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