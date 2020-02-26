jQuery(document).ready(function($){

	$('body').on('click', '.plan', function(e){
		e.preventDefault();
		
		var btn = $(this);
		
		$('.plan').removeClass('active');
		btn.addClass('active');
	});

});