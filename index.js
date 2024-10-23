// For Music Icon
function playMusic(event) {
    event.preventDefault(); 
    const music = document.getElementById('music');
    
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// For Hamburger Menu
function toggleMenu() {
    const links = document.querySelector('.navbar-links');
    links.classList.toggle('active'); 
}

function toggleDropdown(dropdownId) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        if (dropdown.id === dropdownId) {
            dropdown.classList.toggle('active'); 
        } else {
            dropdown.classList.remove('active'); 
        }
    });
}

// For homepage Picture background
let currentIndex = 0;
const images = [
    'picture/1.jpg',
    'picture/2.jpg',
    'picture/3.jpg',
    'picture/4.jpg',
    'picture/5.jpg'
];

function changeBackground(image) {
    const background = document.querySelector('.background-image');
    isAnimating = false;
    background.style.animation = 'none';
    background.style.backgroundImage = `url(${image})`;

    setTimeout(() => {
        background.style.animation = '5s'; // Time nga magpadayon ang animation
        isAnimating = true; // Allow animations again
    }, 50);
}

// Slideshow logic
function startSlideshow() {
    setInterval(() => {
        if (isAnimating) {
            currentIndex = (currentIndex + 1) % images.length;
            changeBackground(images[currentIndex]);
        }
    }, 5000); // Change every 5 seconds / 5k equavalent sng 5sec.
}

window.onload = function() {
    startSlideshow(); // Start the slideshow when the page loads
};


// For my Gallery Page
// Ini is for X sng pics
function openModal(element) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImage.src = element.querySelector("img").src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Ini Gina Filter ang gallery
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}