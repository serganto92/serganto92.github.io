$(function(){
	
	var win_h = $(window).height();
	var html_h = $('html').height();
	var scale = win_h / html_h;
	console.log('Высота окна браузера ' + win_h);
	var translate = (html_h - 5 - (html_h * scale)) / (scale * 2);

	$('body').css('transform','scale('+scale+')' + 'translateY(' + '-' + translate + 'px)');

	$('#data_activation_data').on('click',function(){
		if ($(this).is(':checked')) {
			$('#bottom_nav_item_al').show(200);
		}
		else {
			$('#bottom_nav_item_al').hide(100);
		}
	});

	$('#data_tposm_data').on('click',function(){
		if ($(this).is(':checked')) {
			$('#data_tposm_container').show(200);
			$('#data_tposm_container_outline').show(200);
		}
		else {
			$('#data_tposm_container').hide(100);
			$('#data_tposm_container_outline').hide(100);
		}
	});

	$('#data_tposm_container_button').on('click',function(){
		$('#data_tposm_container').hide(100);
		$('#data_tposm_container_outline').hide(100);
		$('#data_tposm_data').prop('checked',false);
	});

	$('#data_tposm_container_item img').on('click', function(){
		var widthimg = $(this).width();

		if (widthimg > 150) {
			$(this).css({'position': 'static', 'width': '150px', 'height': '150px', 'z-index': '10'});
		}
		else {
			$(this).css({'position': 'absolute', 'top': '20px', 'left': '20px', 'width': '560px', 'height': 'auto', 'max-height': '660px', 'z-index': '15'});
			}
	});
});