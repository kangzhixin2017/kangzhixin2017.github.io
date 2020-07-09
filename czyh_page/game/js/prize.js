//alert('s')

var nowIndex = 1;
var pageSize = 15;
var isRequest = true;
var Data;
initData()

function initData() {
	http(URL.prizeList, {
		token: window.localStorage.getItem('token'),
		pageNum: nowIndex,
		pageSize: pageSize
	}).then(e => {
		if(!e.total) {
			$('.nolist').show()
		} else {
			Data = e.list;
			if(Data.length == 0){
				$('.dataNO').show()
				return;
			}
			for(var i = 0; i < Data.length; i++) {
				var img = window.localStorage.getItem('URL_HEAD') + Data[i].img;
				var time = formatDate(Data[i].create_time)
				if(Data[i].order_status == 4) {
					$('.list').append(`<div class="item">
					<div class="left">
						<img src="${img}" />
						<div>
							<div class="top">${Data[i].name}</div>
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
							<div class="top">${Data[i].name}</div>
							<div class="bottom">${time}</div>
						</div>
					</div>
					<div class="right2">已领取</div>
				</div>`);
				}
			}
		}
		isRequest = true;
	})
}

function toinfo(i) {
	console.log('点击的奖品：', Data[i])
	window.localStorage.setItem('prize_img', window.localStorage.getItem('URL_HEAD') + Data[i].img)
	window.localStorage.setItem('prize_name', Data[i].name)
	window.localStorage.setItem('orderNo', Data[i].order_no)
	window.location.href = 'information.html'
}

$(window).scroll(function(event) {
	var wScrollY = window.scrollY; // 当前滚动条位置
	var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
	var bScrollH = document.body.scrollHeight; // 滚动条总高度
//	console.log(wScrollY, wInnerH, bScrollH)
	if(wScrollY + wInnerH >= bScrollH) {
		if(isRequest) {
			isRequest = false;
			console.log('到底了')
			nowIndex++;
			initData()
		}
	}
})