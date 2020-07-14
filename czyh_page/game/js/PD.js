http(URL.shareAssortedBillPage, {
	token: window.localStorage.getItem('token'),
	seriesId: window.localStorage.getItem('id'),
	assortedBillId: window.localStorage.getItem('assortedBillId'),
}).then(e => {
	e = e.data;
	$('.top').text(e.blindBoxSeries.seriesName)
	$('.jifen').text(e.blindBoxSeries.assortedPrice)
	$('.btn').text('参与' + e.assortedBillList[0].initiateNickname + '的拼单')
	$('.user_img').attr('src', window.localStorage.getItem('URL_HEAD') + e.assortedBillList[0].initiateHead)
	$('.prize_i').attr('src', window.localStorage.getItem('URL_HEAD') + e.blindBoxSeries.seriesCover)
})

function toConfirm() {
	window.location.href = '../turntable/confirmOrder.html?type=2&assortedBillId=' + window.localStorage.getItem('assortedBillId')
}