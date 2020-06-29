

function http(url, method) {
	return new Promise((resolve, reject) => {
//		$.ajax({
//			url: BASE_URL + url,
//			type: 'post',
//			data: {
//				token: "780926aa640d49b1b523ce7ee37a011c",
//			},
//			success: function(data) {
//				const des_key = decrypt(data.sign, AES_KEY, AES_IV)
//				const des_data = decryptDEC(data.data, des_key)
//				resolve(JSON.parse(des_data))
//				console.log(JSON.parse(des_data))
//			}
//		})
		$.post(BASE_URL + url, method, function(data) { //param为参数---键值对方式
			console.log(data)
			const des_key = decryptAES(data.sign, AES_KEY, AES_IV)
			const des_data = decryptDEC(data.data, des_key)
			resolve(JSON.parse(des_data))
		});
	})
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