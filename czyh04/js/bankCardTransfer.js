//用户输入的数据
var data_card = new Array(6)
var data_class = ['min', 'max', 'addr', 'name', 'num','vip']

function writeData(e) {
	if(e == 'data_min') {
		data_card[0] = event.target.value
	} else if(e == 'data_max') {
		data_card[1] = event.target.value
	} else if(e == 'data_addr') {
		data_card[2] = event.target.value
	} else if(e == 'data_name') {
		data_card[3] = event.target.value
	} else if(e == 'data_num') {
		data_card[4] = event.target.value
	} else if(e == 'data_vip') {
		data_card[6] = event.target.value
	}
}

function selectInput(e) {
	defaultStyle(e)
	changeStyle(e)
}
//			显示
function changeStyle(e) {
//	console.log(e)
	$('.' + e).css({
		'font-size': '14rem',
		'line-height': '16rem'
	})
	$('.item_' + e).css({
		'border-bottom': '1rem solid #FC660C'
	})
	$('.input_' + e).show()
	$('.data_' + e).focus()
}
//			还原
function defaultStyle() {
//	console.log(data_card)
	for(let i = 0; i < data_card.length; i++) {
		if(!data_card[i]) {
			$('.input_' + data_class[i]).hide();
			$('.item_' + data_class[i]).css('border-bottom', '1rem solid #E2E2E2')
			$('.' + data_class[i]).css('font-size', '17rem')
		}
	}
}