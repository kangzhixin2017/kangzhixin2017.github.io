var ZxData;
var searchData;
var soonData;
http(URL.hotSearch, {}, 'hotSearchBack')
http(URL.myQuotation, {}, 'myQuotationBack')

function setSoon() {
	var soon1 = JSON.parse(window.localStorage.getItem('soon'))
	soonData = soon1;
	if(!soon1) {
		return
	}
	for(var i = 0; i < soon1.length; i++) {
		var is = false;
		if(ZxData) {
			for(var j = 0; j < ZxData.length; j++) {
				//				console.log(ZxData[j].bitcoinId, e.data[i].bitcoinId)
				if(ZxData[j].bitcoinId == soon1[i].bitcoinId) {
					is = true
				}
			}
		}
		if(is) {
			$('.soon_l').append(`<div class="item2">
							<div>${soon1[i].symbol}/<span>USDT</span></div>
							<img data-id='1' onclick='xing("${soon1[i].bitcoinId}","-2")' src="../img/quotation/xing_s.png" />
						</div>`)
		} else {
			$('.soon_l').append(`<div class="item2">
							<div>${soon1[i].symbol}/<span>USDT</span></div>
							<img data-id='0' onclick='xing("${soon1[i].bitcoinId}","-2")' src="../img/quotation/xing.png" />
						</div>`)
		}
	}
}

function myQuotationBack(e) {
	if(e.data.length == 0) {} else {
		ZxData = e.data;
	}
	setSoon()
}

function hotSearchBack(e) {
	for(var i = 0; i < e.data.length; i++) {
		$('.hot_l').append(`<div onclick='searchHot("${e.data[i].symbol}")' class="item">
						<div>${e.data[i].symbol}</div>
					</div>`)
	}
}

function search() {
	$('.serch').empty()
	var val = $('.input_search').val()
	if(val) {
		http(URL.search, {
			keyword: val
		}, 'searchBack')
	} else {
		$('.msg').show()
	}
}

function searchHot(name) {
	$('.input_search').val(name)
	http(URL.search, {
		keyword: name
	}, 'searchBack')
}

function searchBack(e) {
	$('.msg').hide()
	if(e.data.length == 0) {
		$('.serch').append(`<div class="noSearch">
					<img src="../img/quotation/searchNo.png"/>
					<div>搜索无结果～</div>
				</div>`)
	} else {
		$('.serch').empty()
		searchData = e.data;
		for(var i = 0; i < e.data.length; i++) {
			var is = false;
			if(ZxData) {
				for(var j = 0; j < ZxData.length; j++) {
					//				console.log(ZxData[j].bitcoinId, e.data[i].bitcoinId)
					if(ZxData[j].bitcoinId == e.data[i].bitcoinId) {
						is = true
					}
				}
			}
			if(is) {
				$('.serch').append(`<div class="item2">
							<div>${e.data[i].symbol}/<span>USDT</span></div>
							<img data-id='1' onclick='xing("${e.data[i].bitcoinId}","${i}")' src="../img/quotation/xing_s.png" />
						</div>`)
			} else {
				$('.serch').append(`<div class="item2">
							<div>${e.data[i].symbol}/<span>USDT</span></div>
							<img data-id='0' onclick='xing("${e.data[i].bitcoinId}","${i}")' src="../img/quotation/xing.png" />
						</div>`)
			}
		}
	}
}

function xing(id, i) {
	//	console.log(searchData[i])
	var ii = false;
	if(i != -2) {
		var arrz = JSON.parse(window.localStorage.getItem('soon'));
		if(!arrz) {
			arrz = [];
		}
		console.log(arrz)
		for(var k = 0; k < arrz.length; k++) {
			console.log(arrz[k].bitcoinId, searchData[i].bitcoinId)
			if(arrz[k].bitcoinId == searchData[i].bitcoinId) {
				ii = true
			} else {
				
			}
		}
		if(!ii) {
			arrz.unshift(searchData[i])
			window.localStorage.setItem('soon', JSON.stringify(arrz))
		}
		if(arrz.length == 0) {
			arrz.unshift(searchData[i])
			window.localStorage.setItem('soon', JSON.stringify(arrz))
		}
	}
	//	console.log(window.localStorage.getItem('soon'))
	//	console.log(id)
	//	console.log(event.target.src)
	//	console.log(event.target.dataset.id)
	if(event.target.dataset.id == 0) {
		event.target.src = '../img/quotation/xing_s.png'
		event.target.dataset.id = 1
		http(URL.collect, {
			bitcoinId: id
		}, 'collectBack')
	} else {
		var arr = []
		arr.push(id)
		event.target.src = '../img/quotation/xing.png'
		event.target.dataset.id = 0
		http(URL.deleteCollect, {
			bitcoinIds: arr.toString()
		}, 'deleteCollectBack')
	}
}

function collectBack(e) {
	if(e.code == 200) {
		mask.type6('添加成功')
	}
}

function deleteCollectBack(e) {
	if(e.code == 200) {
		mask.type6('取消成功')
	} else {
		mask.type6(e.message)
	}
}

function toMy() {
	window.location.href = 'index.html?type=1'
}

function delete_soon(){
	window.localStorage.removeItem('soon');
	$('.soon_l').empty()
	
}
