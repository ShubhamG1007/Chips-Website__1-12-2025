/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

// Menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    // When we click on each nav__link, we remove the show-menu....
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SHADOW HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    
    // Add or remove class based on scroll position
    window.scrollY >= 40 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', scrollHeader);

/*=============== SWIPER FAVORITES ===============*/
const swiperFavorites = new Swiper('.favorites__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    speed: 500
});

/*=============== SHOW SCROLL UP ===============*/
const scrollup = () => {
    const scrollUpButton = document.getElementById('scroll-up');

    if (window.scrollY >= 313) {
        scrollUpButton.classList.add('show-scroll');
    } else {
        scrollUpButton.classList.remove('show-scroll');
    }
};
window.addEventListener('scroll', scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal(`.home__data, .favorites__container, .footer__container`)

sr.reveal(`.home__circle, .home__img`, {
    delay: 600,
    scale: .5
})

sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, {
    delay: 1000,
    interval: 100
})

sr.reveal(`.home__leaf`, {
    delay: 1200
})

sr.reveal(`.home__tomato-1, .home__tomato-2`, {
    delay: 1400,
    interval: 100
})

sr.reveal(`.care__img, .contact__img`, {
    origin: 'left'
})

sr.reveal('.care__item , .contact__data', {
    origin: 'right',
    interval: 200,
})

sr.reveal('.favorites__data, .favorites__swiper', {
    origin: 'top',
    interval: 500
})

sr.reveal('.banner__item, .products__card', {
    interval: 100,
})

sr.reveal('.care__item', {
    origin: 'right',
    interval: 200,
})
