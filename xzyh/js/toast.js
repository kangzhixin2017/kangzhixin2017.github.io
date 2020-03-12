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

function createToast() {
	var toast = document.createElement("div");
	toast.classList.add("toast");
	toast.addEventListener("click", function(event) {
		event.stopPropagation();
	});
	return toast;
}

function createTitle(text) {
	var title = document.createElement("div");
	title.classList.add("title");
	title.innerHTML = text;
	return title;
}

function createContent(chtml) {
	var content = document.createElement("div");
	content.classList.add("content");
	content.innerHTML = chtml;
	return content;
}

function createInput() {
	var input = document.createElement("input");
	input.classList.add("password");
	return input;
}

function appendInput(toast, message, input) {
	var inputWrapper = document.createElement("div");
	inputWrapper.classList.add("input-wrapper");
	var inputTips = document.createElement("div");
	inputTips.classList.add("input-placeholder");
	inputTips.innerText = message;
	inputWrapper.appendChild(inputTips);

	inputWrapper.appendChild(input);
	toast.appendChild(inputWrapper);
}

function appendTitle(toast, title) {
	if(title) {
		var titleEle = createTitle(title);
		toast.appendChild(titleEle);
	}
}

function appendContent(toast, contentHtml) {
	if(!contentHtml) {
		return;
	}
	var contentEle = createContent(contentHtml);
	contentEle.addEventListener("click", function(event) {
		event.stopPropagation();
	});
	toast.appendChild(contentEle);
}

function appendButtons(toast, buttons, callback, mask, input) {
	if(buttons && buttons.length) {
		var buttonGroup = document.createElement("div");
		buttonGroup.classList.add("buttons");
		buttons.map(function(button) {
			var buttonEle = document.createElement("div");
			buttonEle.classList.add("button");
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

function appendMessage(toast, message) {
	var messageEle = document.createElement("div");
	messageEle.classList.add("message");
	messageEle.innerText = message;
	toast.appendChild(messageEle);
}

function appendToDom(mask, toast) {
	mask.appendChild(toast);
	document.body.appendChild(mask);
}

var toast = {
	confirm: function(title, contentHtml, buttons, callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast();
		// 添加内容
		appendTitle(toast, title);
		appendContent(toast, contentHtml);
		appendButtons(toast, buttons, callback, mask);
		// 添加到dom
		appendToDom(mask, toast);
	},
	passwordConfirm: function(title, message, buttons, callback) {
		// 创建元素
		var mask = createMask(callback);
		var toast = createToast();
		var input = createInput();
		var u = navigator.userAgent;
		if((u.indexOf('iPhone') > -1) && (u.indexOf('UCBrowser') > -1)) {
			setTimeout(function(){
			window.scrollTo(1, 0)
			},3000)
			input.addEventListener('focus', function() {
				$('.toast').css('margin-top', '25%')
				$('.toast-mask').css('position', 'absolute')
			})
		}
		// 添加内容
		appendTitle(toast, title);
		appendInput(toast, message, input);
		appendButtons(toast, buttons, callback, mask, input);
		// 添加到dom
		appendToDom(mask, toast);
	},
	info: function(message, delay) {
		var mask = createMask();
		var toast = createToast();
		toast.classList.add("info-toast");

		appendMessage(toast, message);
		appendToDom(mask, toast);
		setTimeout(function() {
			document.body.removeChild(mask);
		}, delay || 1000);
	},
	list: function(list, callback) {
		var mask = createMask(callback);
		var toast = createToast();
		list.map(item => {
			var itemEle = document.createElement("div");
			itemEle.classList.add("item");
			var label = document.createElement("span");
			label.classList.add("label");
			label.innerText = item.label;
			var value = document.createElement("span");
			value.classList.add("value");
			value.innerText = item.value;
			itemEle.appendChild(label);
			itemEle.appendChild(value);
			toast.appendChild(itemEle);
		});
		appendToDom(mask, toast);
	}
};