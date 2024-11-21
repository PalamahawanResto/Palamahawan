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

// Toggle the hamburger icon and the full-screen menu
document.getElementById('hamburger-icon').addEventListener('click', function() {
    const menu = document.getElementById('full-screen-menu');
    const hamburger = document.getElementById('hamburger-icon');

    // Toggle the full-screen menu visibility by toggling the 'active' class
    menu.classList.toggle('active');

    // Toggle the hamburger icon state (open/close)
    hamburger.classList.toggle('open');
});

// If you want to close the menu when a link is clicked
const menuLinks = document.querySelectorAll('.full-screen-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Close the menu after clicking a link
        document.getElementById('full-screen-menu').classList.remove('active');
        document.getElementById('hamburger-icon').classList.remove('open');
    });
});





// Get all the images, modal elements, and buttons
const images = document.querySelectorAll('.cuisine-item img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;  // Track the current image index

// Open modal and display the clicked image
function openModal(index) {
    currentIndex = index;  // Set current image index
    modal.style.display = 'flex';
    modalImage.src = images[index].src;  // Set the full image source
}

// Close the modal
function closeImageModal() {
    modal.style.display = 'none';
}

// Show the previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;  // Wrap to the last image if needed
    modalImage.src = images[currentIndex].src;
}

// Show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;  // Wrap to the first image if needed
    modalImage.src = images[currentIndex].src;
}

// Add event listener for each image to open modal
images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
});

// Add event listeners for modal navigation buttons
closeModal.addEventListener('click', closeImageModal);
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Close the modal if clicked outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeImageModal();
    }
});





