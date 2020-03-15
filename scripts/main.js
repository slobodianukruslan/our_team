;(function($){
	"use strict";

	$(function(){
	
		$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			slide: '.slider__card',
			autoplaySpeed: 3000,
			speed: 1000,
			dots: true,
			arrows: true,
			draggable: true,
			pauseOnDotsHover: true,
			pauseOnHover: false,
			prevArrow: '.left__arrow',
			nextArrow: '.right__arrow'
		});

	})
}) (jQuery);