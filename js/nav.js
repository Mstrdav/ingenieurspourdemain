const NAV = document.querySelector("nav");

window.addEventListener('scroll', scrollHandler);


function scrollHandler(event) {
    if (window.scrollY != 0) {
        NAV.classList.add('scrolled');
        NAV.children[0].setAttribute('src', 'ressources/light_with_text.svg'); // TODO: adapt url to current location
    } else {
        NAV.classList.remove('scrolled');
        NAV.children[0].setAttribute('src', 'ressources/classic_with_text.svg');
    }
}

