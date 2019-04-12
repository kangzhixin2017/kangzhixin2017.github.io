$('.index').css("color","rgba(241,108,43,0.84)");  
$.get(baseUrl + "/store/list", function(res) {
	console.log(res)
	if(res.err_code == 0) {
		var data = res.data;
		for(var i = 0; i < data.length; i++) {
			$('.md').append(`<div class="col-xs-12" onclick="msgmd(${data[i].Id})"><div><img src="${data[i].Image}" /><label for="">${data[i].Name}</label></div></div>`);
		}
	}

})
function msgmd(id){
	window.location.href = 'storedetails.html?id='+id;
}
