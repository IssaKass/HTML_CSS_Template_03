const menuTrigger = document.querySelector('.menu-trigger');
const navbar = document.querySelector('.nav');
const navbarLinks = document.querySelectorAll('.nav li > a');

menuTrigger.addEventListener('click', function () {
    this.classList.toggle('clicked-menu');
    navbar.classList.toggle('opened-navbar');
});

navbarLinks.forEach(link => {
    link.addEventListener('click', function () {
        navbarLinks.forEach(l => {
            l.classList.remove('active-link');
        });
        link.classList.add('active-link');
        navbar.classList.remove('opened-navbar');
        menuTrigger.classList.remove('clicked-menu');
    })
});


// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5
        }
    }
});
