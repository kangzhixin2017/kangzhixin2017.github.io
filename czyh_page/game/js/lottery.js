var Data;
var URL_HEAD;
var token;
if(GetQueryString('token')) {
	token = GetQueryString('token');
	window.localStorage.setItem('token', token);
}
var Data_prize;

http(URL.config, {
	attribute: 'head'
}, 'configBack')

function configBack(e) {
	URL_HEAD = e.data;
	window.localStorage.setItem('URL_HEAD', URL_HEAD);
	requestData();
}

function requestData() {
	http(URL.sudoku, {}, 'requestDataBack')
}

function requestDataBack(e) {
	Data = e.data
	setSudoku()
}

function setSudoku() {
	for(var i = 0; i < Data.drawList.length; i++) {
		$('#prize' + i).attr('src', URL_HEAD + Data.drawList[i].img)
	}
	$('.msg').html(`注：抽奖一次需要${Data.score}积分，邀请好友助力必中哦～`);
	for(var i = 0; i < Data.winList.length; i++) {
		var img = URL_HEAD + Data.winList[i].head;
		var time = formatDate(Data.winList[i].createTime, '1')
		var nickName = formatString(Data.winList[i].nickName,7)
		$('.jl_list').append(`<div class="item">
						<div class="i_left">
							<img src="${img}" />
							<div class="name">
								<div>${nickName}</div>
								<div>${time}</div>
							</div>
						</div>
						<div class="i_right">${Data.winList[i].goods}</div>
					</div>`)
	}
}

//抽奖
//setTimeout(e => {
//	luck.is_end = true
//}, 5000)
var luck = {
	index: 0, //当前转动到哪个位置，起点位置
	count: 0, //总共有多少个位置
	timer: 0, //setTimeout的ID，用clearTimeout清除
	speed: 200, //初始转动速度
	times: 0, //转动次数
	cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
	prize: -1, //中奖位置
	end_prize: 2, //最终中奖位置
	is_end: false, //后台是否返回数据
	init: function(id) {
		if($("#" + id).find(".luck-unit").length > 0) {
			$luck = $("#" + id);
			$units = $luck.find(".luck-unit");
			this.obj = $luck;
			this.count = $units.length;
			//			$luck.find(".luck-unit-" + this.index).addClass("active");
		};
	},
	roll: function() {
		var index = this.index;
		var count = this.count;
		var luck = this.obj;
		$(luck).find(".luck-unit-" + index).removeClass("active");
		index += 1;
		if(index > count - 1) {
			index = 0;
		};
		$(luck).find(".luck-unit-" + index).addClass("active");
		this.index = index;
		return false;
	},
	stop: function(index) {
		this.prize = index;
		return false;
	}
};

function roll() {
	luck.roll();
	if(luck.is_end) {
		luck.times += 1;
	}
	if(luck.times > luck.cycle + 10 && luck.prize == luck.index) {
		clearTimeout(luck.timer);
		luck.prize = -1;
		luck.times = 0;
		click = false;
		if(Data_prize.goodsType == 0) {
			maskShow('0');
		} else if(Data_prize.goodsType == 1) {
			maskShow('1');
		} else if(Data_prize.goodsType == 2) {
			//实物
			maskShow('3');
		}
	} else {
		if(luck.times < luck.cycle) {
			luck.speed -= 10;
		} else if(luck.times == luck.cycle) {
			luck.prize = luck.end_prize; //最终中奖位置
		} else {
			if(luck.times > luck.cycle + 10 && ((luck.prize == 0 && luck.index == 7) || luck.prize == luck.index + 1)) {
				luck.speed += 100;
			} else {
				luck.speed += 60;

			}
		}
		if(luck.speed < 40) {
			luck.speed = 40;
		};
		//		console.log(luck.speed)
		luck.timer = setTimeout(roll, luck.speed);
	}
	return false;
}

var click = false;
window.onload = function() {
	luck.init('luck');
	$("#btn").click(function() {
		if(click) {
			return false;
		} else {
			click = true;
			clickPrize();
		}
	});
};

function clickPrize() {
	http(URL.draw, {
		type: 0,
	}, 'AppBack');
	//		http(URL.draw, {
	//			token: window.localStorage.getItem('token'),
	//			type: 0,
	//		}).then(e => {
	//			console.log(e)
	//			AppBack(e)
	//		})
}

function AppBack(e) {
	//奖品有更新
	if(e.code == 10036) {
		maskShow(e.code);
		return;
	}
	//积分不足
	if(e.code == 10028) {
		console.log('s')
		maskShow(e.code);
		return;
	}
	e = e.data;
	luck.is_end = true
	for(var i = 0; i < Data.drawList.length; i++) {
		if(Data.drawList[i].id == e.dId) {
			luck.end_prize = i
			Data_prize = Data.drawList[i];
			console.log(Data_prize)
		}
	}
	luck.speed = 200;
	roll();
	click = true;
	//保存奖品信息给完善信息页面
	if(e.orderNo) {
		window.localStorage.setItem('orderNo', e.orderNo)
	}
}

function mask_btn() {
	$('.jf_mask1').hide()
	$('.jf_mask2').hide()
	$('.jf_mask3').hide()
	$('.jf_mask4').hide()
	$('.jf_mask5').hide()
	for(var i = 0; i < 8; i++) {
		$('.luck-unit-' + i).removeClass("active");
	}
}

function toinfo() {
	mask_btn();
	window.location.href = 'information.html'
}

function to_myprize() {
	window.location.href = 'myprize.html'
}

function zlbtn() {
	window.location.href = 'boost.html'
}

function mask_btn5() {
	window.location.reload();
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