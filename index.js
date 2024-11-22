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




document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-images img');
    const dotsContainer = document.querySelector('.dot-indicators');
    let currentIndex = 0;

    // Create dots for each image
    images.forEach((image, index) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToSlide(index)); // You can still click dots to navigate manually
        dotsContainer.appendChild(dot);
    });

    // Set the first dot as active
    updateDots();

    // Show the first image
    images[0].classList.add('active'); // Show the first image initially

    // Function to go to the slide
    function goToSlide(index) {
        currentIndex = index;
        const newTransformValue = `translateX(-${100 * currentIndex}%)`;
        document.querySelector('.slider-images').style.transform = newTransformValue;

        // Update the active image
        updateActiveImage();
        updateDots();
    }

    // Function to update the active image (visible image)
    function updateActiveImage() {
        images.forEach((image, index) => {
            if (index === currentIndex) {
                image.classList.add('active'); // Add the active class to the current image
            } else {
                image.classList.remove('active'); // Remove the active class from other images
            }
        });
    }

    // Function to update the active dot
    function updateDots() {
        const dots = document.querySelectorAll('.dot-indicators span');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // Auto slide images every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        goToSlide(currentIndex);
    }, 5000); // Change slide every 5 seconds
});

