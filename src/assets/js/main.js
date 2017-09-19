$(document).ready(function(){

	// Lazy load
	$(".lazy").lazyload({
		// effect: 'fadeIn'
	});

	// Wow animation
    new WOW().init();

	// Scroll to section
	$('.scroll-to').click(function(){
		var el = $(this).attr('href');

		// If not home page
		if ($(el).attr('id') !== undefined) {
			$('html').animate({
				scrollTop: $(el).offset().top
			}, 500);
		} else {
			window.location.href = '/' + el;
		}

		// If top menu open
		if($('.top-menu-big').hasClass('is-active')) {
			$('.top-menu-big').removeClass('is-active');
			$('.l-main').removeClass('is-blur');
			$('body').removeClass('is-overflow-h');
		}
		return false;
	});

	// Open top big menu
	$('header.header .menu-open').click(function(){
		$('.top-menu-big').addClass('is-active');
		$('.l-main').addClass('is-blur');
		$('body').addClass('is-overflow-h');
	});

	// Close top big menu
	$('.top-menu-big .close-menu').click(function(){
		$('.top-menu-big').removeClass('is-active');
		$('.l-main').removeClass('is-blur');
		$('body').removeClass('is-overflow-h');
	});

	// FAQ item
	$('.l-single-page .page-content .content.faq .list-item .item').click(function(){
		if (!$(this).hasClass('is-active')) {
			$(this).closest('.list-item').find('.item').removeClass('is-active');
			$(this).closest('.list-item').find('.item .text').slideUp();
			$(this).addClass('is-active');
			$(this).find('.text').slideDown();
		}
	});

	// Form sending AJAX
	$(".common-form").validator().on("submit", function(e) {
		var form = $(this),
			formData = form.serializeArray();


		if (!e.isDefaultPrevented()) {
            e.preventDefault();

			console.log(formData);

			$.ajax({
				type: "POST",
				url: "./assets/php/send-mail.php",
				data: formData,
				success: function() {
					form.trigger('reset');

					form.find('.form-message').fadeIn(200);
					form.find('.form-message').addClass('success');
					form.find('.form-message p').html('Success sending');

					setTimeout(function () {
						form.find('.form-message').fadeOut(200);
						form.find('.form-message').removeClass('success');
						form.find('.form-message p').html('');
					}, 3000);
				},
				error: function() {
					form.find('.form-message').fadeIn(200);
					form.find('.form-message').addClass('error');
					form.find('.form-message p').html('Error sending');

					setTimeout(function () {
						form.find('.form-message').fadeOut(200);
						form.find('.form-message').removeClass('error');
						form.find('.form-message p').html('');
					}, 3000);
				}
			});
			return false;

		}
	});

});
