function http(url, method) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: url.url,
			type: 'post',
			data: method,
			success: function(data) {
				console.log(data)
				if(data.code != 200 && data.code != 10036 ) {
					reject(data);
//					console.log(url.msg, '报错：', data)
					//					return
				} else {
					const des_key = decryptAES(data.sign, AES_KEY, AES_IV)
					const des_data = decryptDEC(data.data, des_key)
					resolve(JSON.parse(des_data))
					console.log(url.msg, '解密后：', JSON.parse(des_data))
				}
			}
		})
		//		$.post(BASE_URL + url, method, function(data) { //param为参数---键值对方式
		//			console.log(data)
		//			const des_key = decryptAES(data.sign, AES_KEY, AES_IV)
		//			const des_data = decryptDEC(data.data, des_key)
		//			resolve(JSON.parse(des_data))
		//		});
	})
}
//let signStr = '123'
//let returnStr = CryptoJS.MD5(signStr).toString()
//alert(returnStr)
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