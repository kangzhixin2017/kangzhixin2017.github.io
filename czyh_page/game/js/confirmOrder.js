var type = GetQueryString('type');
var assortedBillId;
var addressId = 21;
var en_jifen;
if(GetQueryString('assortedBillId')) {
	assortedBillId = GetQueryString('assortedBillId')
}
console.log('拼单id', assortedBillId)
var orderNO;
http(URL.QRorder, {
	token: window.localStorage.getItem('token'),
	seriesId: window.localStorage.getItem('id')
}).then(e => {
	if(e.address) {
		$('#name').text(e.address.receiverName);
		$('#address').text(e.address.province + e.address.city + e.address.area + e.address.address);
		setAddressId(e.address.id);
	}
	$('.name').text(e.blindBoxSeries.seriesName);
	if(type == 1) {
		$('.jifen_1').text(e.blindBoxSeries.price);
		$('.end_jifen').text(e.blindBoxSeries.price)
		en_jifen = e.blindBoxSeries.price;
	} else if(type == 2) {
		$('.jifen_1').text(e.blindBoxSeries.assortedPrice);
		$('.end_jifen').text(e.blindBoxSeries.assortedPrice)
		en_jifen = e.blindBoxSeries.assortedPrice;
	}

})

function mask_btn() {
	$('#inp').val('')
	$('#mask_conf2').hide()
	$('#mask_conf').hide()
}
//原生写入
function setAddressId(id) {
	addressId = id;
}

function mask_btn1() {
	$('#mask_conf').hide()
}

function confirm() {
	var da = {
		token: window.localStorage.getItem('token'),
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
	http(URL.TJorder, da).then(e => {
		if(e.code == 1002){
			mask.type6(e.message)
		}
		if(!e.code) {
			orderNO = e.orderNo;
			$('#mask_conf').css('display', 'flex')
			$('.en_jifen').text(en_jifen)
		}
	})

}

function aaa() {
	event.stopPropagation()
}

function pay() {
	$('#mask_conf2').css('display', 'flex')
	$('#inp').focus()
}

function input_r() {
	console.log(event.target.value.length)
	if(event.target.value.length == 6) {
		http(URL.payOrder, {
			token: window.localStorage.getItem('token'),
			orderNo: orderNO,
			payPwd: '6B6772E7CECD71D53F0BBC289BCF1218'
		}).then(e => {
			if(e.code == 10033) {
				mask_btn()
				mask.type5(e.message, function() {})
			}
			if(e.code == 10038) {
				mask.type6(e.message, function() {})
			}
			if(!e.code) {
				mask_btn()
				mask.type5('支付成功！', function() {
					window.location.href = 'index.html'
				})
			}
		})
	}
}

function toAddress() {
	console.log('调用原生地址页面')
}
//原生调用方法
function setAddr(name, addr) {
	$('#name').text(name);
	$('#address').text(addr);
}