var Data;
http(URL.together, {
	seriesId: window.localStorage.getItem('id')
}).then(e => {
	Data = e.data;
	setLB();
	setMsg();
	setPT();
})

function setTime(time, i) {
	var nowtime = new Date().getTime();
	var endtime = (parseInt(time) + 24 * 60 * 60 * 1000 - 1);
	var date_s = new Date(endtime - nowtime - 28800000)
	$('.time' + i).text('剩余' + (date_s.getHours() > 9 ? date_s.getHours() : '0' + date_s.getHours()) + ':' + (date_s.getMinutes() > 9 ? date_s.getMinutes() : '0' + date_s.getMinutes()) + ":" + (date_s.getSeconds() > 9 ? date_s.getSeconds() : '0' + date_s.getSeconds()))
}

function setPT() {
	$('.pnum').text(Data.assortedBillList.length)
	for(let i = 0; i < Data.assortedBillList.length; i++) {
		if(i < 2) {
			var time = setTime()
			var img = window.localStorage.getItem('URL_HEAD') + Data.assortedBillList[i].initiateHead
			$('.together_list').append(`<div class="item">
						<div class="left">
							<img src="${img}" />
							<div>${Data.assortedBillList[i].initiateNickname}</div>
						</div>
						<div class="right">
							<div class="time">
								<div>差<span>1</span>人拼成</div>
								<div class='time${i}'>剩余22:20:00</div>
							</div>
							<div class="toTog" onclick='toPD(${Data.assortedBillList[i].id})'>去拼单</div>
						</div>
					</div>`)
			setInterval(e => {
				setTime(Data.assortedBillList[i].createTime, i)
			}, 200)
		}
	}
}

function toPD(id) {
	console.log(id)
	window.localStorage.setItem('assortedBillId', id)
	window.location.href = 'PD.html'
}

function setLB() {
	var arr = Data.blindBoxSeries.seriesPic.split(',');
	for(var i = 0; i < arr.length; i++) {
		var img = window.localStorage.getItem('URL_HEAD') + arr[i]
		$('.swiper-wrapper').append(`<div class="swiper-slide"><img style="width: 100%;display: block;" src="${img}" /></div>`)
	}

	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		autoplay: 2000, //可选选项，自动滑动
		loop: true,
		autoplayDisableOnInteraction: false
	});
}

function btn(i) {
	if(i == 1) {
		window.location.href = 'confirmOrder.html?type=1'
	} else if(i == 2) {
		window.location.href = 'confirmOrder.html?type=2'
	}
}

function lookAll() {
	if(Data.assortedBillList.length == 0) {
		return
	}
	$('#mask_conf2').css('display', 'flex');
	for(var i = 0; i < Data.assortedBillList.length; i++) {
		var img = window.localStorage.getItem('URL_HEAD') + Data.assortedBillList[i].initiateHead
		$('#List').append(`<div style="height: .59rem;border-bottom: 1px solid #E9E9E9;width: 100%;display: flex;justify-content: space-between;align-items: center;">
							<div style="display: flex;align-items: center;">
								<img style="width: .3rem;height: .3rem;display: block;border-radius: 4px;" src="${img}" />
								<div style="font-size: .14rem;color: #333333;margin-left: .08rem;">${Data.assortedBillList[i].initiateNickname}</div>
							</div>
							<div onclick='toPD(${Data.assortedBillList[i].id})' style="width: .7rem;line-height: .3rem;font-size: .14rem;color: #333333;background-color: #FFDD24;border-radius: .15rem;text-align: center;">去拼单</div>
						</div>`)
	}
}

function setMsg() {
	var img = window.localStorage.getItem('URL_HEAD') + Data.blindBoxSeries.seriesCover
	$('.Pbuy').text(Data.blindBoxSeries.assortedPrice)
	$('.Dbuy').text(Data.blindBoxSeries.price + '积分')
	$('.Pbuy2').text(Data.blindBoxSeries.assortedPrice + '积分')
	$('.Dbuy2').text(Data.blindBoxSeries.price + '积分')
	$('.num').text(Data.count)
	$('#name').text(Data.blindBoxSeries.seriesName);
	$('.details_data').append(`<img style="width: 100%;" src="${img}"/>`)
}

function mask_btn() {
	$('#mask_conf2').hide()
}