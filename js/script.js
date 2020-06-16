/* Elements */
let body = $("body");
let header = $(".header");
let nav = $(".nav");
let nav_menu = $(".nav__menu");
let modal_register = $(".modal-register");
let form_signIn = $(".form-sign-in");
let form_signUp = $(".form-sign-up");

/* Buttons */
let button_burger = $("#button-burger");
let signIn_button = $("#signIn");
let signUp_button = $("#signUp");
let modal_close = $(".modal-close");

let scroll_position = 0;
let ticking = false;

function animateHeader(scroll_pos) {
	if (scroll_pos > 20 && ticking) {
		header.addClass("scrolled");
		nav.addClass("scrolled");
	} else {
		header.removeClass("scrolled");
		nav.removeClass("scrolled");
	}
}

window.addEventListener("scroll", function () {
	scroll_position = window.scrollY;

	if (!ticking && window.matchMedia('(min-width: 768px)').matches) {
		window.requestAnimationFrame(function () {
			animateHeader(scroll_position);
			ticking = false;
		});
		ticking = true;
	}
});

$(document).ready(() => {
	$(".testimonials__list").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});

	$(".blog-feed__list").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	button_burger.click((e) => {
		e.preventDefault();
		button_burger.toggleClass("active");
		nav_menu.toggleClass("active");
		body.toggleClass("lock");
	});

	signIn_button.click((e) => {
		e.preventDefault();
		modal_register.addClass("showed");
		form_signIn.toggleClass("showed");
		
		if(!body.classList.contains("lock")) {
			body.toggleClass("lock");
		}
	});

	signUp_button.click((e) => {
		e.preventDefault();
		modal_register.addClass("showed");
		form_signUp.toggleClass("showed");
		
		if(!body.classList.contains("lock")) {
			body.toggleClass("lock");
		}
	});

	modal_close.click((e) => {
		e.preventDefault();
		modal_register.removeClass("showed");
		form_signIn.removeClass("showed");
		form_signUp.removeClass("showed");
		
		if(!nav_menu.classList.contains("active")) {
			body.removeClass("lock");
		}
	});
});
