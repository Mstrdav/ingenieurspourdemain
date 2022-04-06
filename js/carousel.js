const CAROUSEL = document.querySelector("[data-carousel]"); // récupérer l'élement carousel grâce à son attribut
const CAROUSEL_LENGTH = 2; // Nombre de slides
const CAROUSEL_DURATION = 10 * 1000; // 10 secondes entre chaque slide
var activeCarouselImage = 0; // la variable qui stocke la slide active

/* 

Le carousel est la partie avec les slides qui s'enchaînent.

Il est simple à modifier :
- dans le code html, rajouter/modifier des slides
- dans le code javascript, modifier la variable CAROUSEL_LENGTH en conséquence

C'est tout !

*/

var carouselInterval = setInterval(() => {
    activeCarouselImage++;
    activeCarouselImage%=CAROUSEL_LENGTH; // On augmente la variable de 1, mais on remet a 0 si supérieur au nombre total de slide
    CAROUSEL.style.setProperty('--current-slide', activeCarouselImage); // On change la propriété. Tout le reste est fait en css
}, CAROUSEL_DURATION); // Interval : appelle la fonction passée en premier argument a intervalle régulier.