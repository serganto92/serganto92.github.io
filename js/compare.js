$(function(){

	var win_h = $(window).height();
	var html_h = $('html').height();
	var scale = win_h / html_h;
	var translate = (html_h - (html_h * scale)) / (scale * 2);

	$('body').css('transform','scale('+scale+')' + 'translateY(' + '-' + translate + 'px)');
});