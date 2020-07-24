var Data;
var selectData = [];
http(URL.myQuotation, {}, 'myQuotationBack')

function myQuotationBack(e) {
	Data = e.data;
	console.log(Data)
	if(!Data) {
		return
	}
	Data.sort(function(b, a) {
		return(a.sort - b.sort)
	})
	for(var i = 0; i < e.data.length; i++) {
		$('.list_wrap').append(`<div class="list_con">
							<div class="left">
								<img data-id='0' onclick='change("${e.data[i].bitcoinId}")' src="../img/quotation/unselected.png" />
								<div>${e.data[i].symbol}<span>/USDT</span></div>
							</div>
							<div class="drag">
								<img src="../img/quotation/drag.png" />
							</div>
						</div>`)
	}
}

function change(id) {
	//	console.log(id)
	//	console.log(event.target.src.indexOf('gou_s.png'))
	if(event.target.src.indexOf('gou_s.png') == -1) {
		event.target.src = '../img/quotation/gou_s.png'
		//		console.log(selectData.indexOf(id))
		if(selectData.indexOf(id) == -1) {
			selectData.push(id)
		}
	} else {
		event.target.src = '../img/quotation/unselected.png'
		if(selectData.indexOf(id) != -1) {
			var i = selectData.indexOf(id)
			selectData.splice(i, 1)
		}
	}
	//	console.log($('.list_con .left img'))
	console.log(selectData)
	if(selectData.length == Data.length) {
		$('.allImg').attr('src', '../img/quotation/gou_s.png')
	} else {
		$('.allImg').attr('src', '../img/quotation/unselected.png')
	}
}

function allChange() {
	var allImg = $('.list_con .left img')
	selectData = [];
	if($('.allImg')[0].src.indexOf('gou_s.png') == -1) {
		$('.allImg').attr('src', '../img/quotation/gou_s.png')
		for(var i = 0; i < allImg.length; i++) {
			allImg[i].src = '../img/quotation/gou_s.png';
			selectData.push(Data[i].bitcoinId)
		}
	} else {
		$('.allImg').attr('src', '../img/quotation/unselected.png')
		for(var i = 0; i < allImg.length; i++) {
			allImg[i].src = '../img/quotation/unselected.png'
		}
		selectData = [];
	}
	console.log(selectData)
}

function deleteChange() {
	if(selectData.length == 0) {
		mask.type6('请先选择')
		return
	} else {
		mask.type9(function(e) {
			if(e == '取消') {
				return;
			} else {
				http(URL.deleteCollect, {
					bitcoinIds: selectData.toString()
				}, 'deleteCollectBack')
			}
		});
	}
}

function deleteCollectBack(e) {
	if(e.code == 200) {
		mask.type6('删除成功', function() {
			window.location.reload()
		})
	} else {
		mask.type6('删除失败')
	}
}

function sortData(oldIndex, newIndex) {
	var arr = Data[oldIndex];
	Data.splice(oldIndex, 1)
	Data.splice(newIndex, 0, arr)
	console.log(Data)
}

function confirm() {
	if(Data.length == 0) {
		mask.type6('请先添加自选');
		return;
	}
	var arrz = [];
	for(var i = 0; i < Data.length; i++) {
		arrz.push(Data[i].bitcoinId)
	}
	console.log(arrz)
	http(URL.collectSort, {
		bitcoinIds: arrz.toString()
	}, 'collectSortBack')
}

function collectSortBack(e) {
	if(e.code == 200) {
		mask.type6(e.message, function() {
			window.location.href = 'index.html?type=1'
		})
	} else {
		mask.type6(e.message)
	}
}

function add() {
	window.location.href = 'search.html'
}