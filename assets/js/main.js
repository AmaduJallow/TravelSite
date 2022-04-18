// Variable declarations
const openMenuIcon = document.getElementById('menu-toggle-open');
const closeMenuIcon = document.getElementById('menu-toggle-close');
const mobileMenu = document.getElementById('mobile-menu');
const headerOverlay = document.getElementById('header');
const grassImage = document.getElementById('grassland');
const skyImage = document.getElementById('sky');
const mountainsImage = document.getElementById('mountain');
const heroData = document.querySelector('#hero-data');




// Open menu & add overlay
openMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('menu-opened');
    headerOverlay.classList.add('menu-opened');
})
// Close menu & remove overlay
closeMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-opened');
    headerOverlay.classList.remove('menu-opened');
})
// Add parallax effect

window.addEventListener('scroll', () => {
    let scrollposition = window.scrollY;
    grassImage.style.transform = "translateY(" + -scrollposition * 0.02 + "%)";
    mountainsImage.style.transform = "translateY(" + -scrollposition * 0.04 + "%)";
    skyImage.style.transform = "translateY(" + -scrollposition * 0.01 + "%)";
    heroData.style.opacity = 1 - window.scrollY*0.002;
}
);
