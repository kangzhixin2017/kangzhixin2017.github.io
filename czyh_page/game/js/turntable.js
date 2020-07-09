$(function() {
	$('#FontScroll').FontScroll({
		time: 2000,
		num: 1
	});
});

function start() {
	$('.table').rotate({
		angle: 0,
		animateTo: 770,
		duration: 1000,
		callback: function() {
			//				alert('s')
		}
	});
}