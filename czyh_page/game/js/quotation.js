status(2)
var Data;
function status(i) {
	$('.optional,.all').css('background-color', '#F4F4F4');
	$('.optional,.all').css('color', '#333333');
	$('.list').hide()
	if(i == 1) {
		$('.edit').show()
		$('.list1').empty()
		$('.list1').show();
		$('.optional').css('color', 'white');
		$('.optional').css('background-color', '#0A8DE7');
		myQuotation()
	} else {
		$('.edit').hide()
		$('.list2').empty()
		$('.topl').show()
		$('.list2').show();
		$('noZx').hide()
		$('.all').css('color', 'white');
		$('.all').css('background-color', '#0A8DE7');
		imgdefault()
		getQuotation()
	}
}
function imgdefault(){
	$('.symbol_img,.priceUsd_img,.percentChange1h_img').attr('src','../img/quotation/default.png')
}
function getQuotation() {
	http(URL.getQuotation, {}, 'getQuotationBack')
}

function sort(name) {
	http(URL.quotationSort, {
		field: name,
		sort: $('.' + name).data('id')
	}, 'quotationSortBack')
	imgdefault()
	if($('.' + name).data('id') == 1) {
		$('.' + name).data('id', '0')
		$('.' + name + '_img').attr('src', '../img/quotation/down.png')
	} else {
		$('.' + name).data('id', '1')
		$('.' + name + '_img').attr('src', '../img/quotation/up.png')
	}
}

function quotationSortBack(e) {
	$('.list2').empty()
	getQuotationBack(e)
}

function myQuotation() {
	$('.topl').hide()
	http(URL.myQuotation, {}, 'myQuotationBack')
}
function edit(){
	console.log(Data.length)
	if(Data.length > 0){
		window.location.href = 'edit.html'
	}else{
		mask.type6('请先添加自选')
	}
}
function myQuotationBack(e) {
	Data = e.data;
	if(e.data.length > 0) {
		$('.list1').append(`<div class="item">
					<div class="left">
						<div class="top">${e.data[i].symbol}<span>/USDT</span></div>
						<div class="bottom">
							<div>24H量</div>
							<div>${market_cap_cny}</div>
						</div>
					</div>
					<div class="center">
						<div class="top">${e.data[i].price_cny}</div>
						<div class="bottom">$${e.data[i].price_usd}</div>
					</div>
					<div class="right">
						<div ${e.data[i].percent_change_1h>0? 'class="blue"':'class="red"'} class="red">${e.data[i].percent_change_1h}%</div>
					</div>
				</div>`)
	} else {
		$('.list1').append(`<div class="noZx">
					<img src="../img/quotation/quotationNo.png" />
					<div>+添加自选</div>
				</div>`)
	}
}

function getQuotationBack(e) {
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
						<div class="top">${e.data[i].price_cny}</div>
						<div class="bottom">$${e.data[i].price_usd}</div>
					</div>
					<div class="right">
						<div ${e.data[i].percent_change_1h>0? 'class="blue"':'class="red"'} class="red">${e.data[i].percent_change_1h}%</div>
					</div>
				</div>`)

	}
}