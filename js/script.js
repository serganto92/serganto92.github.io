$(function(){
	
	/* Масштабирование окна */

	var win_h = $(window).height();
	var html_h = $('html').height();
	var scale = win_h / html_h;
	var translate = (html_h - (html_h * scale)) / (scale * 2);

	$('body').css('transform','scale('+scale+')' + 'translateY(' + '-' + translate + 'px)');

	/* Activation leader */

	$('.data_activation_data').on('click',function(){
		if ($(this).is(':checked')) {
			$('.bottom_nav_item_al').show(200);
		}
		else {
			$('.bottom_nav_item_al').hide(100);
		}
	});

	/* TPOSM Call card */

	$('.data_tposm_data').on('click',function(){
		if ($(this).is(':checked')) {
			$('.data_tposm_container').show(200);
			$('.data_tposm_container_outline').show(200);
		}
		else {
			$('.data_tposm_container').hide(100);
			$('.data_tposm_container_outline').hide(100);
		}
	});

	$('.data_tposm_container_button').on('click',function(){
		$('.data_tposm_container').hide(100);
		$('.data_tposm_container_outline').hide(100);
		$('.data_tposm_data').prop('checked',false);
	});

	$('.data_tposm_container_item img').on('click', function(){
		var widthimg = $(this).width();

		if (widthimg > 150) {
			$(this).css({'position': 'static', 'width': '150px', 'height': '150px', 'z-index': '10'});
		}
		else {
			$(this).css({'position': 'absolute', 'top': '20px', 'left': '20px', 'width': '560px', 'height': 'auto', 'max-height': '660px', 'z-index': '15'});
			}
	});

	/* Отображение изменений */

	function ServiceNavShowControl () {
		if ($('.service_nav').css('display') == 'none'){
			$('.service_nav').show(200);
		}
		else {
			$('.service_nav').hide(50);
		}
	};

	$('.service_menu_title,.service_nav li').on('click',ServiceNavShowControl);
	$('.service_nav li:first-of-type').on('click', function() {
		if ($('.service_nav li:nth-of-type(1)').text() == 'Отобразить изменения') {
			$('.data_activation').toggleClass('changes');
			$('.data_activation_data').trigger('click');
			$('.bottom_nav_item_al').toggleClass('changes');
			$(this).text('Скрыть изменения');
		}
		else {
			$('.data_activation').toggleClass('changes');
			$('.data_activation_data').trigger('click');
			$('.bottom_nav_item_al').toggleClass('changes');
			$(this).text('Отобразить изменения');
		}
	});

	/* Переключение между листами */

	$('.bottom_nav_item_al').on('click', function(){
		if ($('.second').css('display') == 'block') {
			false
		}
		else {
		$('.data:visible').hide(50);
		$('.top_logo_title').html('Activation leader');
		$('.second').show(50);
		}
	});

	$('.bottom_nav_item_main').on('click', function(){
		if ($('.first').css('display') == 'block') {
			false
		}
		else {
		$('.data:visible').hide(50);
		$('.top_logo_title').html('Меню');
		$('.first').show(50);
		}
	});

	/* Список участников */

	$('.second_data_member_table').not(':first').css('display','none');
	$('.second_data_member_header_vision').not(':first').addClass('rotate');

	$('.second_data_member_header_vision').on('click',function(){
		$(this).toggleClass('rotate')
		$(this).parent().parent().next().slideToggle(300);
	});

	/* Добавить нового участника */

	$('.second_data_member_header_add').on('click',function(){
		if ($('.second_data_member_header_data_new').val() === '') {
			false
		}
		else {
			var name = $('.second_data_member_header_data_new').val();
			$('.second_data_member').first().clone(true,true).prependTo('.members');
			$('.second_data_member_table:not(:first)').css('display','none');
			$('.second_data_member_header_vision:not(:first)').addClass('rotate');
			$('.second_data_member_header:first .second_data_member_header_data').html(name);
			$('.second_data_member_header_data_new').val('');
		}
	});

	/* Контроль Rotate кнопки */

	function vision () {
		if ($('.second_data_member .second_data_member_table').css('display') === 'none'){
			$(this).closest('.second_data_member_header_vision').toggleClass('rotate')
		}
		else {
			false
		}
	}

	/* Удаляем участника */

	$('.second_data_member_header_delete').on('click',function(){
		var n = $('.second_data_member').length;
		console.log(n);
		if (n > 1) {
			$(this).parent().parent().parent().remove();
		}
		else {
			false
		}
	});

	/* Проверка отметок DTE */
	
	$('.availability').on('click',function(){
		if ($(this).is(':checked') === false && $('.repair').is(':checked') && $('.charge').is(':checked')) {
			$('.charge').trigger('click').attr('disabled','disabled');
			$('.repair').trigger('click').attr('disabled','disabled');
		}
		else if ($(this).is(':checked') === false && $('.repair').is(':checked') && ($('.charge').is(':checked') === false)) {
			$('.repair').trigger('click').attr('disabled','disabled');
		}
		else {
			$('.repair').removeAttr('disabled');
		}
	});

	$('.repair').on('click', function(){
		if ($(this).is(':checked') && $('.charge').is(':checked') === false) {
			$('.charge').removeAttr('disabled');
		}
		else if ($(this).is(':checked') === false && $('.charge').is(':checked')) {
			$('.charge').trigger('click').attr('disabled','disabled');
		}
		else if ($(this).is(':checked') === false && $('.charge').is(':checked') === false) {
			$('.charge').attr('disabled','disabled');
		}
		else {
			console.log('Остальное');
		}
	});

	/* Проверка отметок LAS */

	$('.sale').on('click', function () {
		if ($('.sale').is(':checked')) {
			$(this).next('.dismiss').attr('disabled','disabled');
		}
		else {
			$(this).next('.dismiss').removeAttr('disabled');
		}
	});

	$('.dismiss').on('click', function () {
		if ($('.dismiss').is(':checked')) {
			$(this).prev('.sale').attr('disabled','disabled');
		}
		else {
			$(this).prev('.sale').removeAttr('disabled');
		}
	});

	/* Скрываем placeholder input */

	$('.sr').on('focusin',function() {
		$(this).removeAttr('placeholder');
	});

	$('.sr').on('focusout',function() {
		$(this).attr('placeholder','Пред.месяц со скидкой');
	});
	
	$('.fp').on('focusin',function() {
		$(this).removeAttr('placeholder');
	});

	$('.fp').on('focusout',function() {
		$(this).attr('placeholder','Пред.месяц без скидки');
	});
});