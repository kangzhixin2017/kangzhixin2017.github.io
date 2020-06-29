//创建遮罩层
function createMask(callback) {
	var mask = document.createElement("div");
	mask.classList.add("toast-mask");
	if(callback) {
		mask.addEventListener("click", function(event) {
			event.stopPropagation();
			//			document.body.removeChild(mask);
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

function createToast2() {
	var toast = document.createElement("div");
	toast.classList.add("toast2");
	toast.addEventListener("click", function(event) {
		event.stopPropagation();
	});
	return toast;
}

function createToast3() {
	var toast = document.createElement("div");
	toast.classList.add("toast3");
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
		text: "去复制",
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

function appendButtons_2(toast, callback, mask, input) {
	var buttons = [{
		text: "确认",
		color: "#CE6A20"
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

function appendButtons_3(toast, callback, mask) {
	var buttons = [{
		name: 'button_3_1',
		text: "我也要领积分",
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
		text: "我知道了",
		color: "#FF8F51"
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

var toast = {
	prompt1: function(title, contentHtml, callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast();
		var img_back = document.createElement('img')
		img_back.src = './img/back.png'
		img_back.classList.add('back_img')
		img_back.addEventListener("click", function(event) {
			event.stopPropagation();
			document.body.removeChild(mask);
		});
		toast.appendChild(img_back)
		// 添加内容
		appendTitle_1(toast, title);
		appendContent_1(toast, contentHtml);
		appendButtons_1(toast, callback, mask);
		// 添加到dom
		appendToDom(mask, toast);
	},
	prompt2: function(contentHtml, url, value, callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast2();
		var user = document.createElement('div');
		user.classList.add('user');
		var user_img = document.createElement('img');
		user_img.classList.add('user_img');
		user_img.src = url;
		var user_msg = document.createElement('div')
		user_msg.classList.add('user_msg');
		user_msg.innerHTML = '谢谢你成功帮我领积分';
		user.appendChild(user_img);
		user.appendChild(user_msg);
		toast.appendChild(user);
		var input = createInput(value);
		input.placeholder = '请输入好友的六位邀请码'

		// 添加内容
		appendTitle_2(toast, 'V Talk平台送你');
		appendContent_2(toast, contentHtml);
		appendInput(toast, '填写邀请码，你和好友都可领取积分', input);
		appendButtons_2(toast, callback, mask, input);
		// 添加到dom
		appendToDom(mask, toast);
	},
	prompt3: function(title, contentHtml, callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast3();
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
			var itemEle = document.createElement("div");
			itemEle.classList.add("item");
			var label = document.createElement("span");
			label.classList.add("key");
			label.innerText = item.msg;
			itemEle.appendChild(label);
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
};