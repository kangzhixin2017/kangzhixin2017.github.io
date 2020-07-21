status(2)

function status(i) {
	$('.optional,.all').css('background-color', '#F4F4F4')
	$('.optional,.all').css('color', '#333333')
	$('.list').hide()
	if(i == 1) {
		$('.list1').show()
		$('.optional').css('color', 'white')
		$('.optional').css('background-color', '#0A8DE7')
	} else {
		$('.list2').show()
		$('.all').css('color', 'white')
		$('.all').css('background-color', '#0A8DE7')
	}
}
function requestBack(){
	$('.topl').hide()
}
