function http(url, params, method) {
	if(url.appRequest) {
		if(CheckIsIOS()) {
			window.webkit.messageHandlers.loadWebData.postMessage({
				'path': url.appUrl,
				'params': params,
				'method': method,
			})
		}
		if(CheckIsAndroid()) {
			var Json = {
				'path': url.appUrl,
				'params': params,
				'method': method,
			}
			Json = JSON.stringify(Json)
			window.Android.loadWebData(Json);
		}
	} else {
		params.token = window.localStorage.getItem('token');
		console.log(url.msg, url.url, params, method)
		return new Promise((resolve, reject) => {
			$.ajax({
				url: url.url,
				type: 'post',
				data: params,
				success: function(data) {
					console.log(url.msg, data)
					if(data.code != 200) {
						eval(method + '(data)')
						resolve(data);
					} else if(data.code == 200 || data.code == 10036) {
						//10036奖品信息更新
						if(!data.data) {
							eval(method + '(data)')
							resolve(data);
							return
						}
						const des_key = decryptAES(data.sign, AES_KEY, AES_IV)
						const des_data = decryptDEC(data.data, des_key)
						data.data = JSON.parse(des_data)
						eval(method + '(data)')
						resolve(data)
						console.log(url.msg, '解密后：', data)
					}
				},
				error: function(e) {
					reject(e);
				}
			})
		})
	}
}
//
//function app(url, params, method) {
//	if(CheckIsIOS()) {
//		window.webkit.messageHandlers.loadWebData.postMessage({
//			'path': url.url,
//			'params': params,
//			'method': method,
//		})
//	}
//	if(CheckIsAndroid()) {
//		var Json = {
//			'path': url.url,
//			'params': params,
//			'method': method,
//		}
//		Json = JSON.stringify(Json)
//		window.Android.loadWebData(Json);
//	}
//}
// AES加密
function encryptAES(data, key, iv) { //key,iv：16位的字符串
	var key1 = CryptoJS.enc.Latin1.parse(key);
	var iv1 = CryptoJS.enc.Latin1.parse(iv);
	return CryptoJS.AES.encrypt(data, key1, {
		iv: iv1,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.ZeroPadding
	}).toString();
}
//AES解密
function decryptAES(data, key, iv) { //key,iv：16位的字符串
	var key1 = CryptoJS.enc.Latin1.parse(key);
	var iv1 = CryptoJS.enc.Latin1.parse(iv);
	var decrypted = CryptoJS.AES.decrypt(data, key1, {
		iv: iv1,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.ZeroPadding
	});
	return decrypted.toString(CryptoJS.enc.Utf8);
}
//DES加密
function encryptDEC(msg, key, iv) {
	var text = msg;
	var base64 = CryptoJS.enc.Utf8.parse(key)
	var encrypt = CryptoJS.TripleDES.encrypt(text, base64, {
		iv: CryptoJS.enc.Utf8.parse(iv), //iv偏移量
		mode: CryptoJS.mode.CBC, //CBC模式
		// mode: CryptoJS.mode.ECB,  //ECB模式
		padding: CryptoJS.pad.Pkcs7 //padding处理
	});
	var encryptData = encrypt.toString(); //加密完成后，转换成字符串
	return encryptData
}
//DES解密
function decryptDEC(msg, key) {
	//key不足24位自动以0(最小位数是0)补齐,如果多余24位,则截取前24位,后面多余则舍弃掉
	var base64 = CryptoJS.enc.Utf8.parse(key)
	var decrypt = CryptoJS.TripleDES.decrypt(msg, base64, {
		iv: CryptoJS.enc.Utf8.parse(DES_IV),
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});
	//解析数据后转为UTF-8
	var parseData = decrypt.toString(CryptoJS.enc.Utf8);
	return parseData
}