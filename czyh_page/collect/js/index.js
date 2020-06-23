/**
 * 配置使用rem的规则
 */
document.documentElement.clientWidth > 375 ? document.documentElement.style.fontSize = 375 / 375 * 100 + 'px' : document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px';

/**
 * tab
 */
var k_tab = {
	init:function(id = 1){
		let cla = document.getElementsByClassName('k_tab')
		for(var i = 0; i < cla.length; i++) {
			if(cla[i].dataset.id == id) {
				cla[i].classList.add('k_tab_current')
			}
		}
	},
	/**
	 * @param {this} element
	 */
	tab_click:function (element,callback) {
		let cla = document.getElementsByClassName('k_tab')
		for(var i = 0; i < cla.length; i++) {
			cla[i].classList.remove('k_tab_current')
		}
		element.classList.add('k_tab_current')
		callback(element.dataset.id)
	}
}

/**
 * 单选
 */
var k_radio = {
	/**初始化
	 * @param {data-*中的值} id
	 */
	init: function(id = 1) {
		let cla = document.getElementsByClassName('k_radio')
		for(var i = 0; i < cla.length; i++) {
			if(cla[i].dataset.id == id) {
				cla[i].classList.add('k_radio_current')
			}
		}
	},
	/**
	 * @param {this} element
	 * @param {回调} callback
	 */
	radio_click: function(element, callback) {
		let cla = document.getElementsByClassName('k_radio')
		for(var i = 0; i < cla.length; i++) {
			cla[i].classList.remove('k_radio_current')
		}
		element.classList.add('k_radio_current')
		callback(element.dataset.id)
	}
}