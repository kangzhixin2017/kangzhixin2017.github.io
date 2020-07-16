var type = GetQueryString('type');
var assortedBillId;
var addressId;
var en_jifen;
if(GetQueryString('assortedBillId')) {
	assortedBillId = GetQueryString('assortedBillId')
}
console.log('拼单id', assortedBillId)
var orderNO;
http(URL.QRorder, {
	seriesId: window.localStorage.getItem('id')
}, 'AppBack2');

function AppBack2(e) {
	e = e.data
	if(e.address) {
		$('#name').text(e.address.receiverName);
		$('#address').text(e.address.province + e.address.city + e.address.area + e.address.address);
		setAddressId(e.address.id);
	}
	$('.name').text(e.blindBoxSeries.seriesName);
	$('.pri_img').attr('src', window.localStorage.getItem('URL_HEAD') + e.blindBoxSeries.seriesCover);
	if(type == 1) {
		$('.jifen_1').text(e.blindBoxSeries.price);
		$('.end_jifen').text(e.blindBoxSeries.price)
		en_jifen = e.blindBoxSeries.price;
	} else if(type == 2) {
		$('.jifen_1').text(e.blindBoxSeries.assortedPrice);
		$('.end_jifen').text(e.blindBoxSeries.assortedPrice)
		en_jifen = e.blindBoxSeries.assortedPrice;
	}
}
//http(URL.QRorder, {
//	token: window.localStorage.getItem('token'),
//	seriesId: window.localStorage.getItem('id')
//}).then(e => {
//	e = e.data
//	if(e.address) {
//		$('#name').text(e.address.receiverName);
//		$('#address').text(e.address.province + e.address.city + e.address.area + e.address.address);
//		setAddressId(e.address.id);
//	}
//	$('.name').text(e.blindBoxSeries.seriesName);
//	$('.pri_img').attr('src', window.localStorage.getItem('URL_HEAD') + e.blindBoxSeries.seriesCover);
//	if(type == 1) {
//		$('.jifen_1').text(e.blindBoxSeries.price);
//		$('.end_jifen').text(e.blindBoxSeries.price)
//		en_jifen = e.blindBoxSeries.price;
//	} else if(type == 2) {
//		$('.jifen_1').text(e.blindBoxSeries.assortedPrice);
//		$('.end_jifen').text(e.blindBoxSeries.assortedPrice)
//		en_jifen = e.blindBoxSeries.assortedPrice;
//	}
//})

function mask_btn() {
	$('#inp').val('')
	$('#mask_conf2').hide()
	$('#mask_conf').hide()
}

function setAddressId(id) {
	addressId = id;
}

function mask_btn1() {
	$('#mask_conf').hide()
}

function confirm() {
	if(!addressId) {
		mask.type6('请选择地址');
		return;
	}
	var da = {
		seriesId: window.localStorage.getItem('id'),
		addressId: addressId
	}
	if(type == 1) {
		//单独购买
		da.isAssortedBill = '0'
	} else if(type == 2) {
		//拼单
		da.isAssortedBill = '1'
		if(assortedBillId) {
			da.assortedBillId = assortedBillId
		}
	}
	console.log(da)
	http(URL.TJorder, da, 'AppBack');
	//	http(URL.TJorder, da).then(e => {
	//		if(e.code == 1002) {
	//			mask.type6(e.message)
	//		}
	//		if(e.code == 10028) {
	//			mask.type2((e) => {
	//				console.log(e)
	//			})
	//		}
	//		if(e.code == 200) {
	//			e = e.data
	//			orderNO = e.orderNo;
	//			$('#mask_conf').css('display', 'flex')
	//			$('.en_jifen').text(en_jifen)
	//		}
	//	})

}

function AppBack(e) {
	if(e.code == 1002) {
		mask.type6(e.message)
	}
	if(e.code == 10028) {
		mask.type2((e) => {
			console.log(e)
		})
	}
	if(e.code == 200) {
		e = e.data
		orderNO = e.orderNo;
		$('#mask_conf').css('display', 'flex')
		$('.syJF').text(window.localStorage.getItem('jifen'))
		$('.en_jifen').text(en_jifen)
	}
}

function aaa() {
	event.stopPropagation()
}

function pay() {
	if(CheckIsIOS()) {
		window.webkit.messageHandlers.luckyPay.postMessage({
			orderNo: orderNO,
			title: '积分',
			integral: $('.end_jifen').text()
		})
	}
	if(CheckIsAndroid()) {
		var Json = {
			'path': url.url,
			'params': params,
			'method': method,
		}
		Json = JSON.stringify(Json)
		window.Android.loadWebData(Json);
	}
}

function luckyPayBack(e) {
	mask.type5('支付成功！', function() {
		if(type == 2) {
			window.localStorage.setItem('assortedBillId', e.data.assortedId)
			window.location.href = '../turntable/invite.html'
		} else {
			window.location.href = 'index.html'
		}
	})
}

function AppBack3(e) {
	if(e.code == 10033) {
		mask_btn()
		mask.type5(e.message, function() {})
	}
	if(e.code == 10038) {
		mask.type7((e) => {
			console.log(e)
			if('忘记密码' == e) {
				if(CheckIsIOS()) {
					window.webkit.messageHandlers.passwordEdit.postMessage({})
				}
				if(CheckIsAndroid()) {
					var Json = {
						'path': url.url,
						'params': params,
						'method': method,
					}
					Json = JSON.stringify(Json)
					window.Android.loadWebData(Json);
				}
			}
		})
	}
	if(e.code == 200) {
		mask_btn()
		mask.type5('支付成功！', function() {
			if(type == 2) {
				window.localStorage.setItem('assortedBillId', e.data.assortedId)
				window.location.href = '../turntable/invite.html'
			} else {
				window.location.href = 'index.html'
			}
		})
	}
}

function input_r() {
	console.log(event.target.value)
	if(event.target.value.length == 6) {
		http(URL.drawIOS, {
			orderNo: orderNO,
			payPwd: event.target.value
		}, 'AppBack3');
		//		http(URL.payOrder, {
		//			token: window.localStorage.getItem('token'),
		//			orderNo: orderNO,
		//			payPwd: event.target.value
		//		}).then(e => {
		//			if(e.code == 10033) {
		//				mask_btn()
		//				mask.type5(e.message, function() {})
		//			}
		//			if(e.code == 10038) {
		//				mask.type7((e) => {
		//					console.log(e)
		//					if('忘记密码' == e) {
		//						if(CheckIsIOS()) {
		//							window.webkit.messageHandlers.passwordEdit.postMessage({})
		//						}
		//						if(CheckIsAndroid()) {
		//							var Json = {
		//								'path': url.url,
		//								'params': params,
		//								'method': method,
		//							}
		//							Json = JSON.stringify(Json)
		//							window.Android.loadWebData(Json);
		//						}
		//					}
		//				})
		//			}
		//			if(e.code == 200) {
		//				mask_btn()
		//				mask.type5('支付成功！', function() {
		//					if(type == 2) {
		//						window.localStorage.setItem('assortedBillId', e.data.assortedId)
		//						window.location.href = '../turntable/invite.html'
		//					} else {
		//						window.location.href = 'index.html'
		//					}
		//				})
		//			}
		//		})
	}
}

function toAddress() {
	if(CheckIsIOS()) {
		window.webkit.messageHandlers.selectAddress.postMessage({})
	}
	if(CheckIsAndroid()) {
		var Json = {
			'path': url.url,
			'params': params,
			'method': method,
		}
		Json = JSON.stringify(Json)
		window.Android.loadWebData(Json);
	}
}
//原生调用方法
function setAddress(data) {
	addressId = data.id;
	$('#name').text(data.name);
	$('#address').text(data.address);
}