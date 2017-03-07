var app = {
	'setScrollAnimation': function() {
		$('a[href^="#"]').click(function(e) {
			e.preventDefault();
			var id = this.getAttribute('href');
			var topPos = $(id).offset().top
			
			
			$('body, html').animate({
				scrollTop: topPos
			}, "swing");
		});
	},
	
	'setClientCarousel': function() {
		$('.owl-carousel').owlCarousel({
			loop:true,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:3
				}
			}
		});
	},
	
	'init': function() {
		app.setScrollAnimation();
		app.setClientCarousel();
	}
}

$(document).ready(app.init);