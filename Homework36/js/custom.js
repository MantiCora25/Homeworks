$('#label-textarea').click(function(){
	$('#textarea').toggle('fast');
	let text = $('#label-textarea').html();
	if (text == 'Больше информации'){
		$('#label-textarea').text('Спрятать');
	} else {
		$('#label-textarea').text('Больше информации');
	};
});
function openModal(){
	$('.modalWindow').slideDown();
	$('body').append('<div class="myFade"></div>')
};
function closeModal(){
	$('.modalWindow').slideUp('fast');
	$('.myFade').remove();
};
$('.menu-item button').click(function(){
	openModal();
	event.stopPropagation();
});
$('#modalClose').click(function(){
	closeModal();
});
$(window).click(function(){
	let body = $('div').hasClass('myFade');
	if (body){
		closeModal();
	};
});
$('.modalWindow').click(function(){
	event.stopPropagation();
});