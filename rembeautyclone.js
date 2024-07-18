// Announcement bar
const messages = [
    "Free shipping on orders over $75 USD. Free returns always.",
    " <a>The sum.m.e.r SHOPPE is open ♡</a>  Shop summer-ready merch + minis.",
    "Get a <b>free sweetener tote bag</b> when you purchase <a> sweetener foundation</a> while supplies last."
];

let messageIndex = 0;

function changeText() {
    const changingTextElement = document.getElementById('changing-text');
    changingTextElement.innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

setInterval(changeText, 2000); 

// menu display 
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const popupWindow = document.getElementById("popupWindow");
    const closePopup = document.getElementById("closePopup");

    menuIcon.addEventListener("click", function() {
        popupWindow.style.display = "block";
    });

    closePopup.addEventListener("click", function() {
        popupWindow.style.display = "none";
    });

    // Close the popup when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target === popupWindow) {
            popupWindow.style.display = "none";
        }
    });
});

// search display 
document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("searchIcon");
    const searchBar = document.getElementById("searchBar");
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    searchIcon.addEventListener("click", function() {
        if (searchBar.style.display === "none" || searchBar.style.display === "") {
            searchBar.style.display = "block";
            overlay.style.display = "block";
        } else {
            searchBar.style.display = "none";
            overlay.style.display = "none";
        }
    });

    // Close the search bar when clicking outside of it
    overlay.addEventListener("click", function() {
        searchBar.style.display = "none";
        overlay.style.display = "none";
    });
});

// cart display 
document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.getElementById("cart-icon");
    const cartPopup = document.getElementById("cart-popup");
    const closePopup = document.getElementById("close-popup");

    cartIcon.addEventListener("click", function() {
        cartPopup.style.display = "block";
    });

    closePopup.addEventListener("click", function() {
        cartPopup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == cartPopup) {
            cartPopup.style.display = "none";
        }
    });
});



// Product display carousel-container

const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(carouselTrack.children);
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');

let currentIndex = 0;
const totalSlides = slides.length;
const slideWidth = slides[0].getBoundingClientRect().width;

const updateCarousel = () => {
    const moveAmount = slideWidth * currentIndex;
    carouselTrack.style.transform = `translateX(-${moveAmount}px)`;
}

rightButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex += 1;
    } else {
        currentIndex = 0; // Loop back to the start
    }
    updateCarousel();
});

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = totalSlides - 1; // Loop to the end
    }
    updateCarousel();
});

updateCarousel();



