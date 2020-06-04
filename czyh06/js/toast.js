//创建遮罩层
function createMask(callback) {
	var mask = document.createElement("div");
	mask.classList.add("toast-mask");
	if(callback) {
		mask.addEventListener("click", function(event) {
			event.stopPropagation();
			document.body.removeChild(mask);
			callback("cancel");
		});
		mask.addEventListener("touchmove", function(event) {
			event.preventDefault();
		});
	}
	// 点击遮罩关闭
	return mask;
}
//创建弹窗
function createToast() {
	var toast = document.createElement("div");
	toast.classList.add("toast");
	toast.addEventListener("click", function(event) {
		event.stopPropagation();
	});
	return toast;
}
//创建弹窗
function createToast4() {
	var toast = document.createElement("div");
	toast.classList.add("toast_4");
	toast.addEventListener("click", function(event) {
		event.stopPropagation();
	});
	return toast;
}
//添加到body
function appendToDom(mask, toast) {
	mask.appendChild(toast);
	document.body.appendChild(mask);
}

function appendTitle_1(toast, title) {
	if(title) {
		var tit = document.createElement("div");
		tit.classList.add("title_1");
		tit.innerHTML = title;
		toast.appendChild(tit);
	}
}
function appendTitle_3(toast, title) {
	if(title) {
		var tit = document.createElement("div");
		tit.classList.add("title_6");
		tit.innerHTML = `设置支付宝分成比例，小于上级分成比例，上级支付宝<span>1.4%</span>H5支付宝<span>1.3%</span>银行卡<span>2.3%</span>`;
		toast.appendChild(tit);
	}
}
function appendTitle_2(toast, title) {
	if(title) {
		var tit = document.createElement("div");
		tit.classList.add("title_2");
		tit.innerHTML = title;
		toast.appendChild(tit);
	}
}

function appendContent_1(toast, contentHtml) {
	if(!contentHtml) {
		return;
	}
	//	var contentEle = createContent(contentHtml);
	var contentEle = document.createElement("div");
	contentEle.classList.add("content_1");
	contentEle.innerHTML = contentHtml;
	contentEle.addEventListener("click", function(event) {
		event.stopPropagation();
	});
	toast.appendChild(contentEle);
}

function appendContent_2(toast, contentHtml) {
	if(!contentHtml) {
		return;
	}
	//	var contentEle = createContent(contentHtml);
	var contentEle = document.createElement("div");
	contentEle.classList.add("content_2");
	contentEle.innerHTML = contentHtml;
	contentEle.addEventListener("click", function(event) {
		event.stopPropagation();
	});
	toast.appendChild(contentEle);
}

function appendButtons_1(toast, callback, mask) {
	var buttons = [{
		text: "确定",
		color: "#fff"
	}]
	if(buttons && buttons.length) {
		var buttonGroup = document.createElement("div");
		buttonGroup.classList.add("buttons");
		buttons.map(function(button) {
			var buttonEle = document.createElement("div");
			buttonEle.classList.add("button_1");
			buttonEle.innerText = button.text;
			buttonEle.style.color = button.color;
			buttonGroup.appendChild(buttonEle);
			buttonEle.addEventListener("click", function(e) {
				e.stopPropagation();
				document.body.removeChild(mask);
				callback(button.text);
			});
		});
		toast.appendChild(buttonGroup);
	} else {
		toast.style.paddingBottom = "0px";
	}
}

function appendButtons_2(toast, callback, mask) {
	var buttons = [{
		text: "确定",
		color: "#fff"
	}]
	if(buttons && buttons.length) {
		var buttonGroup = document.createElement("div");
		buttonGroup.classList.add("buttons");
		buttons.map(function(button) {
			var buttonEle = document.createElement("div");
			buttonEle.classList.add("button_2");
			buttonEle.innerText = button.text;
			buttonEle.style.color = button.color;
			buttonGroup.appendChild(buttonEle);
			buttonEle.addEventListener("click", function(e) {
				e.stopPropagation();
				document.body.removeChild(mask);
				callback(button.text);
			});
		});
		toast.appendChild(buttonGroup);
	} else {
		toast.style.paddingBottom = "0px";
	}
}

function appendButtons_3(toast, callback, mask) {
	var buttons = [{
		name: 'button_3_1',
		text: "取消",
	}, {
		name: 'button_3_2',
		text: "确定",
	}]
	if(buttons && buttons.length) {
		var buttonGroup = document.createElement("div");
		buttonGroup.classList.add("buttons");
		buttons.map(function(button) {
			var buttonEle = document.createElement("div");
			buttonEle.classList.add(button.name);
			buttonEle.innerText = button.text;
			buttonGroup.appendChild(buttonEle);
			buttonEle.addEventListener("click", function(e) {
				e.stopPropagation();
				document.body.removeChild(mask);
				callback(button.text);
			});
		});
		toast.appendChild(buttonGroup);
	} else {
		toast.style.paddingBottom = "0px";
	}
}

function appendButtons_4(toast, callback, mask) {
	var buttons = [{
		text: "关闭",
		color: "#01C6F3"
	}]
	if(buttons && buttons.length) {
		var buttonGroup = document.createElement("div");
		buttonGroup.classList.add("buttons");
		buttons.map(function(button) {
			var buttonEle = document.createElement("div");
			buttonEle.classList.add('button_4');
			buttonEle.innerText = button.text;
			buttonGroup.appendChild(buttonEle);
			buttonEle.addEventListener("click", function(e) {
				e.stopPropagation();
				document.body.removeChild(mask);
				callback(button.text);
			});
		});
		toast.appendChild(buttonGroup);
	} else {
		toast.style.paddingBottom = "0px";
	}
}

function createInput(val) {
	var input = document.createElement("input");
	input.value = val
	input.classList.add("remark");
	return input;
}
function appendInput(toast, message, input) {
	var inputWrapper = document.createElement("div");
	inputWrapper.classList.add("remark_input");
	if(message) {
		var inputTips = document.createElement("div");
		inputTips.classList.add("input-placeholder");
		inputTips.innerText = message;
		inputWrapper.appendChild(inputTips);
	}
	inputWrapper.appendChild(input);
	toast.appendChild(inputWrapper);
}

function appendButtons_5(toast, callback, mask, input) {
	var buttons = [{
		name: 'button_3_1',
		text: "取消",
	}, {
		name: 'button_3_2',
		text: "确定",
	}]
	if(buttons && buttons.length) {
		var buttonGroup = document.createElement("div");
		buttonGroup.classList.add("buttons");
		buttons.map(function(button) {
			var buttonEle = document.createElement("div");
			buttonEle.classList.add(button.name);
			buttonEle.innerText = button.text;
			buttonEle.style.color = button.color;
			buttonGroup.appendChild(buttonEle);
			buttonEle.addEventListener("click", function(e) {
				e.stopPropagation();
				var password = input && input.value;
				document.body.removeChild(mask);
				callback(button.text, password || "");
			});
		});
		toast.appendChild(buttonGroup);
	} else {
		toast.style.paddingBottom = "0px";
	}
}
function appendButtons_6(toast, callback, mask, input,input2,input3) {
	var buttons = [{
		name: 'button_3_1',
		text: "取消",
	}, {
		name: 'button_3_2',
		text: "确定",
	}]
	if(buttons && buttons.length) {
		var buttonGroup = document.createElement("div");
		buttonGroup.classList.add("buttons");
		buttons.map(function(button) {
			var buttonEle = document.createElement("div");
			buttonEle.classList.add(button.name);
			buttonEle.innerText = button.text;
			buttonEle.style.color = button.color;
			buttonGroup.appendChild(buttonEle);
			buttonEle.addEventListener("click", function(e) {
				e.stopPropagation();
				var password = input && input.value;
				var password2 = input2 && input2.value;
				var password3 = input3 && input3.value;
				document.body.removeChild(mask);
				callback(button.text, password || "",password2 || "",password3 || "");
			});
		});
		toast.appendChild(buttonGroup);
	} else {
		toast.style.paddingBottom = "0px";
	}
}
function createToast_img() {
	var toast = document.createElement("div");
	toast.classList.add("toast_img");
	toast.addEventListener("click", function(event) {
		event.stopPropagation();
	});
	return toast;
}
function appendimg(toast, src) {
	//	alert(src)
	var im = document.createElement("img");
	im.src = src
	toast.appendChild(im);
}
var toast = {
	prompt1: function(title, contentHtml, callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast();
		// 添加内容
		appendTitle_1(toast, title);
		appendContent_1(toast, contentHtml);
		appendButtons_1(toast, callback, mask);
		// 添加到dom
		appendToDom(mask, toast);
	},
	prompt2: function(title, contentHtml, callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast();
		// 添加内容
		appendTitle_2(toast, title);
		appendContent_2(toast, contentHtml);
		appendButtons_2(toast, callback, mask);
		// 添加到dom
		appendToDom(mask, toast);
	},
	prompt3: function(title, contentHtml, callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast();
		// 添加内容
		appendTitle_2(toast, title);
		appendContent_2(toast, contentHtml);
		appendButtons_3(toast, callback, mask);
		// 添加到dom
		appendToDom(mask, toast);
	},
	list: function(title, list, callback) {
		var mask = createMask(callback);
		var toast = createToast4();
		appendTitle_1(toast, title);
		list.map((item, i) => {
			var he
			if(i + 3 == list.length) {
				console.log('sdf')
				he = document.createElement("div");
				he.classList.add("he");
				toast.appendChild(he);
			}
			var itemEle = document.createElement("div");
			itemEle.classList.add("item");
			var label = document.createElement("span");
			label.classList.add("key");
			label.innerText = item.label;
			var value = document.createElement("span");
			value.style.color = item.label == '订单金额' ? '#FC0C0C' : '#262B2F';
			value.classList.add("value");
			value.innerText = item.value;
			itemEle.appendChild(label);
			itemEle.appendChild(value);
			toast.appendChild(itemEle);

		});
		appendButtons_4(toast, callback, mask);
		appendToDom(mask, toast);
	},
	remark: function(title, message, value, callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast();
		var input = createInput(value);
		var u = navigator.userAgent;
		if((u.indexOf('iPhone') > -1) && (u.indexOf('UCBrowser') > -1)) {
			window.scrollTo(0, 0)
			input.addEventListener('focus', function() {
				$('.toast').css('margin-top', '25%')
				$('.toast-mask').css('position', 'absolute')
			})
		}
		// 添加内容
		appendTitle_1(toast, title);
		appendInput(toast, message, input);
		appendButtons_5(toast, callback, mask, input);
		// 添加到dom
		appendToDom(mask, toast);
	},
	remark2: function(title, value, value2,value3,callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast();
		var input = createInput(value);
		input.placeholder = '支付宝分成设置'
		var input2 = createInput(value2);
		input2.placeholder = 'H5支付宝分成设置'
		var input3 = createInput(value3);
		input3.placeholder = '银行卡分成设置'
		var u = navigator.userAgent;
		if((u.indexOf('iPhone') > -1) && (u.indexOf('UCBrowser') > -1)) {
			window.scrollTo(0, 0)
			input.addEventListener('focus', function() {
				$('.toast').css('margin-top', '25%')
				$('.toast-mask').css('position', 'absolute')
			})
			input2.addEventListener('focus', function() {
				$('.toast').css('margin-top', '25%')
				$('.toast-mask').css('position', 'absolute')
			})
			input3.addEventListener('focus', function() {
				$('.toast').css('margin-top', '25%')
				$('.toast-mask').css('position', 'absolute')
			})
		}
		// 添加内容
		appendTitle_3(toast, title);
		appendInput(toast, '', input);
		appendInput(toast, '', input2);
		appendInput(toast, '', input3);
		appendButtons_6(toast, callback, mask, input,input2,input3);
		// 添加到dom
		appendToDom(mask, toast);
	},
	img: function(src, callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast_img();
		// 添加内容
		appendimg(toast, src);
		// 添加到dom
		appendToDom(mask, toast);
	},
};