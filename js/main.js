const NAV = document.querySelector("nav");
const CAROUSEL = document.querySelector("[data-carousel]");
const CAROUSEL_IMAGES = [
    '/ressources/carousel/thisisengineering-raeng-Na86iQQOAOQ-unsplash.jpg',
    '/ressources/carousel/thisisengineering-raeng-NmcylAy9sHE-unsplash.jpg',
    '/ressources/carousel/thisisengineering-raeng-oqQu7qjXWRk-unsplash.jpg',
]
var activeCarouselImage = 0;

window.addEventListener('scroll', scrollHandler);


function scrollHandler(event) {
    if (window.scrollY != 0) {
        NAV.classList.add('scrolled')
        NAV.children[0].setAttribute('src', '/ressources/light_with_text.svg')
    } else {
        NAV.classList.remove('scrolled')
        NAV.children[0].setAttribute('src', '/ressources/classic_with_text.svg')
    }
}

var carouselInterval = setInterval(() => {
    activeCarouselImage++;
    activeCarouselImage%=CAROUSEL_IMAGES.length
    CAROUSEL.style.setProperty('--current-slide', activeCarouselImage);
}, 10000);