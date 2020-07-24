var type;
var symbolsort = -1;
var priceUsdsort = -1;
var percentsort = -1;
var nowName;
var sortnum;
if(GetQueryString('type') == 1) {
	status(1)
	type = 1;
} else {
	status(2)
	type = 0;
}
if(GetQueryString('token')) {
	var token = GetQueryString('token')
	window.localStorage.setItem('token', token)
}

var Data;

function search() {
	window.location.href = 'search.html'
}

function status(i) {
	symbolsort = -1;
	priceUsdsort = -1;
	percentsort = -1;
	$('.optional,.all').css('background-color', '#F4F4F4');
	$('.optional,.all').css('color', '#333333');
	$('.list').hide()
	if(i == 1) {
		type = 1
		$('.edit').show()
		$('.list1').empty()
		$('.list1').show();
		$('.optional').css('color', 'white');
		$('.optional').css('background-color', '#0A8DE7');
		myQuotation()
	} else {
		type = 0
		$('.edit').hide()
		$('.list2').empty();
		$('.topl').show();
		$('.list2').show();
		$('noZx').hide();
		$('.all').css('color', 'white');
		$('.all').css('background-color', '#0A8DE7');
		imgdefault()
		getQuotation()
	}
}

function imgdefault() {
	$('.symbol_img,.priceUsd_img,.percentChange1h_img').attr('src', '../img/quotation/default.png')
}

function getQuotation() {
	http(URL.getQuotation, {}, 'getQuotationBack')
}
setInterval(function() {
	refresh();
}, 30000)

function refresh() {
	//	console.log(nowName, symbolsort, priceUsdsort, percentsort)

	if(type == 0) {
		//全部
		if(!nowName) {
			getQuotation()
			return;
		}
		if(nowName == 'symbol') {
			sortnum = symbolsort;
		} else if(nowName == 'priceUsd') {
			sortnum = priceUsdsort;
		} else if(nowName == 'percentChange1h') {
			sortnum = percentsort;
		}
		if(symbolsort == -1) {
			getQuotation()
		} else {
			http(URL.quotationSort, {
				field: nowName,
				sort: sortnum,
				type: type
			}, 'quotationSortBack')
		}
	} else if(type == 1) {
		if(!nowName) {
			myQuotation(true)
			return;
		}
		if(nowName == 'symbol') {
			sortnum = symbolsort;
		} else if(nowName == 'priceUsd') {
			sortnum = priceUsdsort;
		} else if(nowName == 'percentChange1h') {
			sortnum = percentsort;
		}
		if(symbolsort == -1) {
			myQuotation(true)
		} else {
			http(URL.quotationSort, {
				field: nowName,
				sort: sortnum,
				type: type
			}, 'quotationSortBack2')
		}
	}
}

function sort(name) {
	imgdefault()
	nowName = name;
	if($('.' + name).data('id') == 0) {
		symbolsort = 0;
		priceUsdsort = 0;
		percentsort = 0;
		if(type == 0) {
			http(URL.quotationSort, {
				field: name,
				sort: $('.' + name).data('id'),
				type: type
			}, 'quotationSortBack')
		} else {
			http(URL.quotationSort, {
				field: name,
				sort: $('.' + name).data('id'),
				type: type
			}, 'quotationSortBack2')
		}
		$('.' + name).data('id', '1')
		$('.' + name + '_img').attr('src', '../img/quotation/down.png')
	} else if($('.' + name).data('id') == 1) {
		symbolsort = 1;
		priceUsdsort = 1;
		percentsort = 1;
		if(type == 0) {
			http(URL.quotationSort, {
				field: name,
				sort: $('.' + name).data('id'),
				type: type
			}, 'quotationSortBack')
		} else {
			http(URL.quotationSort, {
				field: name,
				sort: $('.' + name).data('id'),
				type: type
			}, 'quotationSortBack2')
		}
		$('.' + name).data('id', '2')
		$('.' + name + '_img').attr('src', '../img/quotation/up.png')
	} else {
		symbolsort = -1;
		priceUsdsort = -1;
		percentsort = -1;
		if(type == 0) {
			getQuotation();
		} else {
			myQuotation(true);
		}
		$('.' + name).data('id', '0')
		$('.' + name + '_img').attr('src', '../img/quotation/default.png')
	}
}

function quotationSortBack(e) {
	$('.list2').empty()
	getQuotationBack(e)
}

function quotationSortBack2(e) {
	$('.list1').empty()
	myQuotationBack(e, true)
}

function myQuotation(type = null) {
	if(!type) {
		$('.topl').hide()
	}
	http(URL.myQuotation, {}, 'myQuotationBack')
}

function edit() {
	console.log(Data.length)
	if(Data.length > 0) {
		window.location.href = 'edit.html'
	} else {
		mask.type6('请先添加自选')
	}
}

function myQuotationBack(e, i = null) {
	$('.list1').empty()
	Data = e.data;
	if(!i) {
		Data.sort(function(b, a) {
			return(a.sort - b.sort)
		})
	}

	if(e.data.length > 0) {
		$('.topl').show()
		for(var i = 0; i < e.data.length; i++) {
			var market_cap_cny = (parseInt(e.data[i].market_cap_cny) / 1000000000000) > 1 ?
				(e.data[i].market_cap_cny / 1000000000000).toFixed(2) + '万亿' :
				(parseInt(e.data[i].market_cap_cny) / 100000000) > 1 ?
				(e.data[i].market_cap_cny / 100000000).toFixed(2) + '亿' :
				(e.data[i].market_cap_cny / 10000).toFixed(2) + '万'
			$('.list1').append(`<div class="item">
					<div class="left">
						<div class="top">${e.data[i].symbol}<span>/USDT</span></div>
						<div class="bottom">
							<div>24H量</div>
							<div>${market_cap_cny}</div>
						</div>
					</div>
					<div class="center">
						<div class="top">${e.data[i].price_usd}</div>
						<div class="bottom">¥${e.data[i].price_cny}</div>
					</div>
					<div class="right">
						<div ${e.data[i].percent_change_1h>0? 'class="blue"':'class="red"'} class="red">${e.data[i].percent_change_1h>0?'+'+e.data[i].percent_change_1h:e.data[i].percent_change_1h}%</div>
					</div>
				</div>`)
		}
	} else {
		$('.list1').append(`<div class="noZx">
					<img src="../img/quotation/quotationNo.png" />
					<div onclick='search()'>+添加自选</div>
				</div>`)
	}
}

function getQuotationBack(e) {
	$('.list2').empty()
	Data = e.data;
	for(var i = 0; i < e.data.length; i++) {
		//		console.log(e.data[i].percent_change_1h)
		var market_cap_cny = (parseInt(e.data[i].market_cap_cny) / 1000000000000) > 1 ?
			(e.data[i].market_cap_cny / 1000000000000).toFixed(2) + '万亿' :
			(parseInt(e.data[i].market_cap_cny) / 100000000) > 1 ?
			(e.data[i].market_cap_cny / 100000000).toFixed(2) + '亿' :
			(e.data[i].market_cap_cny / 10000).toFixed(2) + '万'
		$('.list2').append(`<div class="item">
					<div class="left">
						<div class="top">${e.data[i].symbol}<span>/USDT</span></div>
						<div class="bottom">
							<div>24H量</div>
							<div>${market_cap_cny}</div>
						</div>
					</div>
					<div class="center">
						<div class="top">${e.data[i].price_usd}</div>
						<div class="bottom">¥${e.data[i].price_cny}</div>
					</div>
					<div class="right">
						<div ${e.data[i].percent_change_1h>0? 'class="blue"':'class="red"'} class="red">${e.data[i].percent_change_1h>0?'+'+e.data[i].percent_change_1h:e.data[i].percent_change_1h}%</div>
					</div>
				</div>`)
	}
}