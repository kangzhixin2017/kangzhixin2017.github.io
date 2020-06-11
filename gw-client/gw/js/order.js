var name;
var phone;
var type;
var money;
var address;
var k = 0;

function change(h, l) {
	for(var i = 1; i <= 3; i++) {
		var b = "#" + h + i;
		$(b).attr("src", "../img/icon/icon_unsel.png");
	}
	var a = "#" + h + l;
	$(a).attr("src", "../img/icon/icon_sel.png");
	if(h == 1) {
		if(l == 1) {
			type = 'baby_pic';
		} else if(l == 2) {
			type = 'parental_pic';
		} else if(l == 3) {
			type = 'other';
		}
	} else if(h == 2) {
		if(l == 1) {
			money = '1000_3000';
		} else if(l == 2) {
			money = '3000_5000';
		} else if(l == 3) {
			money = '5000_up';
		}
	}
}
$('.btn-submit').click(function() {
	if(undefined == type) {
		alert("请选择咨询的类型");
		return;
	}
	if(undefined == money) {
		alert("请选择拍摄的预算");
		return;
	}
	name = $('#name').val()
	if('' == name) {
		alert("请输入姓名");
		return;

	}
	phone = $('#phone').val()
	var a = checkPhone(phone);
	if(false == a) {
		return;
	}
	address = $(".address").val();
	if(null == address) {
		alert("请选择门店区域");
		return;

	}
	if(k != 0) {
		return
	}
	k = 1;
	var data = {
		BBname: name,
		CategoryName: type,
		guestIdName: money,
		Tel: phone,
		AcceptorAddress: address
	}
	var mydata = JSON.stringify(data)
	console.log(mydata)
	$.ajax({
		url: baseUrl + '/CommitUserInfo',
		type: 'post',
		dataType: 'json',
		data: mydata,
		success: function(res) {
			console.log(res)
			if(res.code == 0) {
				alert("发送成功！");
			} else {
				alert("请重试！");
			}
			k = 0;
		}
	})
})

function checkPhone(phone) {
	if(!(/^1[34578]\d{9}$/.test(phone))) {
		alert("手机号码有误，请重填");
		return false;
	}
}