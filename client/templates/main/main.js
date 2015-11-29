Template.main.onRendered(function(){
	initSlider();
})

initSlider = function() {
	$(document).ready(function() {

		$('#carousel').slick({
			dots: false,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 500,
			mobileFirst: true
		});
		 
	});
}