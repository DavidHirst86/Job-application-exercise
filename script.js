document.addEventListener('DOMContentLoaded', function() {    

    let navbar = document.getElementById("nav");
    let mytravel = document.getElementById("myTravel")
    let chevron = document.getElementById("chevron")
    let suitcase = document.getElementById("suitcase")

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= 1) {
            navbar.classList.add("sticky")
            mytravel.classList.add("red_colour_bg")
            chevron.classList.remove("hidden")
            suitcase.classList.add("hidden")
        } else {
            navbar.classList.remove("sticky");
            mytravel.classList.remove("red_colour_bg");
            suitcase.classList.remove("hidden")
            chevron.classList.add("hidden")            
        }
    })



/* image slider */
// Select the carousel you'll need to manipulate and the buttons you'll add events to
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// Prepare to limit the direction in which the carousel can slide, 
// and to control how much the carousel advances by each time.
// In order to slide the carousel so that only three cards are perfectly visible each time,
// you need to know the carousel width, and the margin placed on a given card in the carousel
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;
const maxX = -((cardCount / 3) * carouselWidth + 
               (cardMarginRight * (cardCount / 3)) - 
               carouselWidth - cardMarginRight);


// Add the click events
leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
    }
})
  
rightButton.addEventListener("click", function() {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
})

}) /* end of dom loaded event */