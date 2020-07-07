//alert('s')

var Data;
http(URL.prizeList, {
	token: window.localStorage.getItem('token')
}).then(e => {
	if(!e.length) {
		$('.nolist').show()
	} else {
		Data = e;
		for(var i = 0; i < e.length; i++) {
			var img = window.localStorage.getItem('URL_HEAD') + e[i].img;
			var time = formatDate(e[i].create_time)
			if(e[i].order_status == 4) {
				$('.list').append(`<div class="item">
					<div class="left">
						<img src="${img}" />
						<div>
							<div class="top">${e[i].name}</div>
							<div class="bottom">${time}</div>
						</div>
					</div>
					<div class="right" onclick="toinfo(${i})">去领取</div>
				</div>`)
			} else {
				$('.list').append(`<div class="item">
					<div class="left">
						<img src="${img}" />
						<div>
							<div class="top">${e[i].name}</div>
							<div class="bottom">${time}</div>
						</div>
					</div>
					<div class="right2">已领取</div>
				</div>`);
			}
		}
	}
})

function toinfo(i) {
	console.log('点击的奖品：',Data[i])
	window.localStorage.setItem('prize_img', window.localStorage.getItem('URL_HEAD') + Data[i].img)
	window.localStorage.setItem('prize_name', Data[i].name)
	window.localStorage.setItem('orderNo', Data[i].order_no)
	window.location.href = 'information.html'
}