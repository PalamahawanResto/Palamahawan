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




// For homepage Picture background
function changeBackground(thumbnail) {
    const background = document.querySelector('.background-image');
    const isSmallScreen = window.innerWidth <= 768; // Check for small screen
    const image = isSmallScreen ? thumbnail.dataset.small : thumbnail.dataset.large;

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

// Ini Gina Filter ang gallery / Gina categorized
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

// ini is for cuisine
// Open the Cuisine Modal
function openCuisineModal(element) {
    const modal = document.getElementById("cuisineModal");
    const modalImage = document.getElementById("cuisineModalImage");

    modal.style.display = "flex";
    modalImage.src = element.querySelector("img").src; 
}

// Close the Cuisine Modal
function closeCuisineModal() {
    const modal = document.getElementById("cuisineModal");
    modal.style.display = "none";
}

// Open modal when a menu item is clicked
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => openCuisineModal(item));
});




// pop up for submit feedback
function submitFeedback(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(document.getElementById('feedbackForm'));

    fetch('submit_feedback.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message); // Show success message
            document.getElementById('feedbackForm').reset(); // Reset form
        } else {
            alert('Error: ' + data.message); // Show error message
        }
    })
    .catch(error => {
        alert('Error: ' + error.message); // Show error
    });
}


