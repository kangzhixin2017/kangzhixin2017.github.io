//alert('s')

var nowIndex = 1;
var pageSize = 15;
var isRequest = true;
var ii = 0;
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
			//			Data = e.list;

			if(e.list.length == 0) {
				$('.dataNO').show()
				return;
			}
			for(var i = 0; i < e.list.length; i++) {
				var img = window.localStorage.getItem('URL_HEAD') + e.list[i].img;
				var time = formatDate(e.list[i].create_time,'1')
				if(e.list[i].order_status == 4) {
					$('.list').append(`<div class="item">
					<div class="left">
						<img src="${img}" />
						<div>
							<div class="top">${e.list[i].name}</div>
							<div class="bottom">${time}</div>
						</div>
					</div>
					<div class="right" onclick=toinfo(${ii})>去领取</div>
				</div>`)
				} else {
					$('.list').append(`<div class="item">
					<div class="left">
						<img src="${img}" />
						<div>
							<div class="top">${e.list[i].name}</div>
							<div class="bottom">${time}</div>
						</div>
					</div>
					<div class="right2">已领取</div>
				</div>`);
				}
				ii++;
			}
			Data = Data ? Data.concat(e.list) : e.list;
			console.log(Data)
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