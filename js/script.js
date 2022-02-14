/* Elements */
const body           = document.body;
const header         = document.querySelector('.header');
const nav            = document.querySelector('.nav');
const nav_menu       = document.querySelector('.nav__menu');
const modal_register = document.querySelector('.modal-register');
const form_signIn    = document.querySelector('.form-sign-in');
const form_signUp    = document.querySelector('.form-sign-up');

/* Buttons */
const button_burger  = document.getElementById('button-burger');
const signIn_button  = document.getElementById('signIn');
const signUp_button  = document.getElementById('signUp');
const modal_close    = document.querySelectorAll('.modal-close');

let scroll_position = 0;
let ticking = false;

function animateHeader(scroll_pos) {
  if (scroll_pos > 20 && ticking) {
    header.classList.add('scrolled');
    nav.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', function () {
  scroll_position = window.scrollY;

  if (!ticking && window.matchMedia('(min-width: 768px)').matches) {
    window.requestAnimationFrame(function () {
      animateHeader(scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});

window.onload = function () {
  new Swiper('.testimonials', {
    speed: 500,
    slidesPerView: 1,
    pagination: {
      el: '.testimonials-pagination',
      type: 'bullets',
			clickable: true
    },
  });

	new Swiper('.blog-feed', {
    slidesPerView: 1,
		slidesPerGroup: 1,
    pagination: {
      el: '.blog-feed-pagination',
      type: 'bullets',
			clickable: true,
			centeredSlides: true
    },
		breakpoints: {
			620: {
				slidesPerView: 2,
				slidesPerGroup: 2
			},
			1020: {
        speed: 1000,
				slidesPerView: 3,
				slidesPerGroup: 3
			}
		}
  });

  button_burger.addEventListener('click', function (e) {
    e.preventDefault();
    button_burger.classList.toggle('active');
    nav_menu.classList.toggle('active');
    body.classList.toggle('lock');
  });

  function showRegistration(elem) {
    modal_register.classList.add('showed');
    elem.classList.toggle('showed');

    if (!body.classList.contains('lock')) {
      body.style.width = `${document.documentElement.clientWidth}px`;
      body.classList.toggle('lock');
    }
  }

  signIn_button.addEventListener('click', function (e) {
    e.preventDefault();
    showRegistration(form_signIn)
  });

  signUp_button.addEventListener('click', function (e) {
    e.preventDefault();
    showRegistration(form_signUp)
  });

  modal_close.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      modal_register.classList.remove('showed');
      form_signIn.classList.remove('showed');
      form_signUp.classList.remove('showed');

      if (!nav_menu.classList.contains('active')) {
        body.classList.remove('lock');
        body.style.width = `auto`;
      }
    });
  });
};
