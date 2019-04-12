accessid = 'LTAIxxbZ5JkNQ02F'
accesskey = 'uUsNu0Rqqb3tFdM9fb5qdUkls73pGL'
host = 'https://yxbaby.oss-cn-shenzhen.aliyuncs.com'
policyBase64 = ''
signature = ''
callbackbody = ''
filename = ''
key = ''
expire = 0
g_object_name = ''
g_object_name_type = ''
now = timestamp = Date.parse(new Date()) / 1000;
url = '';

var policyText = {
	"expiration": "2020-01-01T12:00:00.000Z", // 设置Policy的失效时间，如果超过失效时间，就无法通过此Policy上传文件
	"conditions": [
		["content-length-range", 0, 1048576000] // 设置上传文件的大小限制，如果超过限制，文件上传到OSS会报错
	]
}
var policyBase64 = Base64.encode(JSON.stringify(policyText))
message = policyBase64
var bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, {
	asBytes: true
});
var signature = Crypto.util.bytesToBase64(bytes);

function send_request() {
	var xmlhttp = null;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
		console.log(1)
	} else if(window.ActiveXObject) {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		console.log(2)
	}

	if(xmlhttp != null) {

		phpUrl = link + '/oss/getSign.do';
		xmlhttp.open("GET", phpUrl, false);
		xmlhttp.send(null);
		console.log(xmlhttp.responseText)
		return xmlhttp.responseText
	} else {
		alert("Your browser does not support XMLHTTP.");
	}
}

function random() {
	var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';　　
	var maxPos = chars.length;　　
	var str = '';　　
	for(i = 0; i < 20; i++) {
		str += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return str;
}

function get_signature() {
	//可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
	now = timestamp = Date.parse(new Date()) / 1000;
	if(expire < now + 3) {
		// body = send_request()
		// var obj = eval("(" + body + ")");
		// console.log('obj',obj)

		// host = obj['host']
		// policyBase64 = obj['policy']
		// accessid = obj['accessid']
		// signature = obj['signature']
		// expire = parseInt(obj['expire'])
		// callbackbody = obj['callback']
		// key = obj['dir']
		return true;
	}
	return false;
};

function get_suffix(filename) {
	pos = filename.lastIndexOf('.')
	suffix = ''
	if(pos != -1) {
		suffix = filename.substring(pos)
	}
	return suffix;
}

function calculate_object_name(filename) {
	pos = filename.lastIndexOf('.')
	suffix = ''
	if(pos != -1) {
		suffix = filename.substring(pos)
	}
	var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';　　
	var maxPos = chars.length;　　
	var pwd = '';　　
	for(i = 0; i < 22; i++) {
		pwd += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	g_object_name = key + pwd + suffix

	return ''
}

function get_uploaded_object_name(filename) {

	return g_object_name

}

function set_upload_param(up, filename, ret) {
	if(ret == false) {
		ret = get_signature()
	}
	g_object_name = key;
	if(filename != '') {
		suffix = get_suffix(filename)
		calculate_object_name(filename)
	}
	new_multipart_params = {
		'key': g_object_name,
		'policy': policyBase64,
		'OSSAccessKeyId': accessid,
		'success_action_status': '200', //让服务端返回200,不然，默认会返回204
		'callback': callbackbody,
		'signature': signature,
	};

	up.setOption({
		'url': host,
		'multipart_params': new_multipart_params
	});

	up.start();
}

function previewImg(input) {

	var maxsize = 1024*300 ; //超过300k进行压缩 
	//是否支持 
	if(typeof FileReader === 'undefined') {
		alert("抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！");
		input.setAttribute('disabled', 'disabled');
	}
	if(input.files && input.files[0]) {
		var file = input.files[0],
			reader = new FileReader();
		if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
			alert('不是有效的图片文件!');
			return;
		}
		reader.readAsDataURL(file);
		reader.onload = function(e) {
			var result = this.result; //获取到base64的图片 
			var resultArr = []

			resultArr.push(result)
			var account = sessionStorage.getItem("account");
			var token = sessionStorage.getItem("token");
			var resultStr = JSON.stringify({
				'file_byte': result
			})
			//大于300k图片进行压缩 
			console.log(result.length)
			if(result.length >= maxsize) {
				alert('请压缩图片后再上传')
			} else {
				var img = new Image();
				img.src = result;
				$.ajax({
					url: link + '/oss',
					type: "POST",
					data: resultStr,
					headers: {
						"account": account,
						"token": token
					},
					datType: "json",
					success: function(Data) {
						console.log(Data)
						if(Data.err_code == 0) {
							$("#add").attr("src", Data.data.url);
						} else if(Data.err_code == 10001) {
							layer.open({
								title: '提示信息:',
								content: Data.err_msg,
								btn: ['确认'],
								yes: function(index, layero) {
									layer.close(index)
									location.hash = '/user/login';
								},
								cancel: function() {
									location.hash = '/user/login';
								}
							});
						}
					},
					error: function() {

					}
				});
			}
		}
	}
}

function addProductBanner(input, num) {

	var maxsize = 2 * 1024 * 1024; //超过300k进行压缩 
	//是否支持 
	if(typeof FileReader === 'undefined') {
		alert("抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！");
		input.setAttribute('disabled', 'disabled');
	}
	if(input.files && input.files[0]) {
		var file = input.files[0],
			reader = new FileReader();
		if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
			alert('不是有效的图片文件!');
			return;
		}
		reader.readAsDataURL(file);
		reader.onload = function(e) {
			var result = this.result; //获取到base64的图片 
			var resultArr = []

			resultArr.push(result)

			var resultStr = JSON.stringify({
				'file_byte': result
			})
			//大于300k图片进行压缩 
			if(result.length >= maxsize) {
				alert('请压缩图片后再上传')
			} else {
				var img = new Image();
				img.src = result;
				$.ajax({
					url: link + '/oss',
					type: "POST",
					data: resultStr,
					datType: "json",
					success: function(data) {
						var Data = JSON.parse(data)
						console.log(Data)
						if(Data.err_code == 0) {
							$("#add" + num).attr("src", Data.url);
						}
					},
					error: function() {

					}
				});
			}
		}
	}
}

function upload(id, oid) {
	var uploader = new plupload.Uploader({
		browse_button: id,

	});
	if(id != oid && oid) {
		id = oid;
	}
	uploader.init();
	var div;
	uploader.bind('UploadProgress', function(up, file) {
		document.getElementById('percent').innerHTML = file.percent + '%';
	});
	uploader.bind('FilesAdded', function(up, files) {
		console.log('FilesAdded')
		if(files[0].size > (1024 * 1024 * 1)) {
			layer.msg('上传图片大小不能超过1M');
			for(var i = 0; i < files.length; i++) {
				uploader.removeFile(files[i].id);
			}
			return false;
		}
		div = document.createElement('div');
		div.setAttribute('id', 'loadingToast');
		div.innerHTML = '<div class="weui-mask_transparent" style="font-size: 16px;display:none;"></div> <div class="weui-toast"><i class="weui-loading weui-icon_toast"></i><p class="weui-toast__content" id="percent">0%</p></div>';
		document.body.appendChild(div);
		// fadeIn(div);
		plupload.each(files, function(file) {
			set_upload_param(uploader, '', false);
			return false;
		});
	});
	uploader.bind('BeforeUpload', function(up, file) {

		set_upload_param(up, file.name, true);
	});
	uploader.bind('FileUploaded', function(up, file, info) {
		if(info.status == 200) {
			console.log(id);
			document.getElementById(id).src = url + g_object_name;
			document.getElementById(id).setAttribute('value', g_object_name);
			div.remove();
		} else {

			alert('上传图片出错');
		}
	});
	return uploader;
}

function ueup(id, ue) {
	var arr = [];
	var uploader = new plupload.Uploader({
		browse_button: id,
		url: 'https://oss.aliyuncs.com',
	});
	uploader.init();
	var div;
	uploader.bind('UploadProgress', function(up, file) {
		document.getElementById('percent').innerHTML = file.percent + '%';
	});
	uploader.bind('FilesAdded', function(up, files) {
		div = document.createElement('div');
		div.setAttribute('id', 'loadingToast');
		div.innerHTML = '<div class="weui-mask_transparent" style="font-size: 16px;display:none;"></div> <div class="weui-toast"><i class="weui-loading weui-icon_toast"></i><p class="weui-toast__content" id="percent">0%</p></div>';
		document.body.appendChild(div);
		fadeIn(div);
		plupload.each(files, function(file) {
			set_upload_param(uploader, '', false);
		});
	});
	uploader.bind('BeforeUpload', function(up, file) {
		set_upload_param(up, file.name, true);
		arr[file.id] = g_object_name;
	});
	uploader.bind('FileUploaded', function(up, file, info) {
		if(info.status == 200) {
			console.log();
			// document.getElementById(id).src=url+g_object_name;
			// document.getElementById(id).setAttribute('value',g_object_name);
			ue.setContent('<img src="' + imgurl + arr[file.id] + '"/>', true);
		} else {

			alert('上传图片出错');
		}
	});
	uploader.bind('uploadComplete', function(up, file) {
		div.remove();
	});
}

function ups(selectid) {
	var arr = [];
	var uploader = new plupload.Uploader({
		browse_button: selectid,
		url: 'https://oss.aliyuncs.com',
	});
	uploader.init();
	var div;
	uploader.bind('UploadProgress', function(up, file) {
		document.getElementById('percent').innerHTML = file.percent + '%';
	});
	uploader.bind('FilesAdded', function(up, files) {
		div = document.createElement('div');
		div.setAttribute('id', 'loadingToast');
		div.innerHTML = '<div class="weui-mask_transparent" style="font-size: 16px;display:none;"></div> <div class="weui-toast"><i class="weui-loading weui-icon_toast"></i><p class="weui-toast__content" id="percent">0%</p></div>';
		document.body.appendChild(div);
		fadeIn(div);
		plupload.each(files, function(file) {
			set_upload_param(uploader, '', false);
		});
	});
	uploader.bind('BeforeUpload', function(up, file) {
		set_upload_param(up, file.name, true);
		arr[file.id] = g_object_name;
	});
	uploader.bind('FileUploaded', function(up, file, info) {
		if(info.status == 200) {
			var diva = document.createElement('div');
			diva.className = 'imgfile divs';
			diva.setAttribute('type', 2);
			var rand = random();
			diva.innerHTML = '<img src="' + imgurl + arr[file.id] + '" width="100%" height="100%" id="' + rand + 'act"><span class="funicon"><i class="iconfont" onclick="up(this)">&#xe6c6;</i><i class="iconfont" onclick="down(this)">&#xe6c5;</i><i class="iconfont" onclick="closeel(this)">&#xe615;</i></span><div class="imgselect"><span>图库中选择</span><span id="' + rand + '">本地图片</span></div>';
			document.getElementById('edit').appendChild(diva);
			ups(rand);
		} else {}
	});
	uploader.bind('uploadComplete', function(up, file) {
		div.remove();
	});
}

function upmore(selectid) {
	var arr = [];
	var uploader = new plupload.Uploader({
		browse_button: selectid,
		url: 'https://oss.aliyuncs.com',
	});
	uploader.init();
	uploader.bind('FilesAdded', function(up, files) {
		plupload.each(files, function(file) {
			var imglist = document.getElementById('imglist');
			if(imglist.getElementsByTagName("li").length >= 9) {
				uploader.removeFile(file.id);
				return false;
			}
			var li = document.createElement('li');
			li.setAttribute('class', 'weui-uploader__file weui-uploader__file_status');
			li.setAttribute('id', file.id);
			li.innerHTML = '<div class="weui-uploader__file-content">0%</div>';
			imglist.appendChild(li);
			// return false;
			set_upload_param(uploader, '', false);
		});
	});
	uploader.bind('UploadProgress', function(up, file) {
		var d = document.getElementById(file.id);
		var div = d.getElementsByTagName('div')[0];
		div.innerHTML = file.percent + '%';
	});
	uploader.bind('BeforeUpload', function(up, file) {
		set_upload_param(up, file.name, true);
		arr[file.id] = g_object_name;
	});
	uploader.bind('FileUploaded', function(up, file, info) {
		if(info.status == 200) {
			var d = document.getElementById(file.id);
			d.setAttribute('class', 'weui-uploader__file');
			d.setAttribute('value', arr[file.id]);
			d.removeChild(d.getElementsByTagName('div')[0]);
			d.style.backgroundImage = 'url(' + url + arr[file.id] + ')';
			d.innerHTML = '<i class="clearimg iconfont" onclick="closeimg(this);">&#xe615;</i>'; //<input type="hidden" name="thumb[]" value="'+arr[file.id]+'">
			//regclose();
			document.getElementById('imgnum').innerHTML = document.getElementById('imglist').getElementsByTagName("li").length + '/9';
		} else {
			//document.getElementById(file.id).getElementsByName('b')[0].innerHTML = info.response;
		}
	});
}

function closeimg(obj) {
	obj.parentNode.remove();
}