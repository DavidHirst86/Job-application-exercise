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
})