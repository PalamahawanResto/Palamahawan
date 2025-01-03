
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



// Hamburger Menu
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





// Cuisine Section
const imageList = document.getElementById('imageList');
const searchBar = document.getElementById('searchBar');
const categorySelect = document.getElementById('categorySelect'); // The dropdown select element


// Example data for images and categories (could be fetched from an API or backend)
const data = {
    "menu": [
        { "name": "Menu Item 1", "image": "picture/menulist/menu1.jpg" },
        { "name": "Menu Item 2", "image": "picture/menulist/menu2.jpg" },
        { "name": "Menu Item 3", "image": "picture/menulist/menu3.jpg" },
        { "name": "Menu Item 4", "image": "picture/menulist/menu4.jpg" },
        { "name": "Menu Item 5", "image": "picture/menulist/menu5.jpg" },
        { "name": "Menu Item 6", "image": "picture/menulist/menu6.jpg" },
    ],
    "main-dish": [
        { "name": "Chopsuey", "image": "picture/maindish/chopsuey.png", "price": "₱249" },
        { "name": "Friedchicken", "image": "picture/maindish/fried.jpg", "price": "₱329" },
        { "name": "Pork Sisig", "image": "picture/maindish/sisig.jpg", "price": "₱259" },
        { "name": "Chicken Inasal", "image": "picture/maindish/chickeninasal.jpg", "price": "₱179" },
        { "name": "Grilled Boneless Bangus", "image": "picture/maindish/grilledbangus.jpg", "price": "₱149" },      
        { "name": "Grilled Pork Belly", "image": "picture/maindish/grilledporkbelly.jpg", "price": "₱199" },
        { "name": "Bangus Sisig", "image": "picture/maindish/bangussisig.jpg", "price": "₱249" },
        { "name": "Buttered Chicken", "image": "picture/maindish/butteredchicken.jpg", "price": "₱399" },
        { "name": "Calamares", "image": "picture/maindish/calamares.jpg", "price": "₱289" },
        { "name": "Fish Sinigang", "image": "picture/maindish/fishsinigang.jpg", "price": "₱289" },
        { "name": "Garlic Shrimp", "image": "picture/maindish/garlicshrimp.jpg", "price": "₱349" },
        { "name": "Pork Sinigang", "image": "picture/maindish/porksinigang.jpg", "price": "₱249" },
        { "name": "Shrimp Sinigang", "image": "picture/maindish/shrimpsinigang.jpg", "price": "₱279" },
        { "name": "Sizzling Gambas", "image": "picture/maindish/sizzlinggambas.jpg", "price": "₱279" },
        { "name": "Fried Boneless Bangus", "image": "picture/maindish/friedbangus.jpg", "price": "₱149" },
        { "name": "Tempura", "image": "picture/maindish/tempura.jpg", "price": "₱349" },
        { "name": "Garlic Rice", "image": "picture/maindish/garlicrice.jpg", "price": "₱29" },
        { "name": "Platter Garlic rice", "image": "picture/maindish/plattergarlic.jpg", "price": "₱149" },
        { "name": "Plain Rice", "image": "picture/maindish/plainrice.jpg", "price": "₱19" },
        { "name": "Platter Plain Rice", "image": "picture/maindish/platterrice.jpg", "price": "₱99" },
    ],
    "short": [
        { "name": "Batchoy", "image": "picture/shortorder/batchoy.jpg", "price": "₱59" },    
        { "name": "Bihon Guisado", "image": "picture/shortorder/bihon.jpg", "price": "₱219" },
        { "name": "Canton Guisado", "image": "picture/shortorder/canton.jpg", "price": "₱219" },
        { "name": "Sotanghon Guisado", "image": "picture/shortorder/sotanghon.jpg", "price": "₱249" },
        { "name": "Pancit Bam-i", "image": "picture/shortorder/bami.jpg", "price": "₱299" },
        { "name": "Lomi", "image": "picture/shortorder/lomi.jpg", "price": "₱199" },
    ],
    "pica": [            
        { "name": "Nachos Overload", "image": "picture/pica/nachos.jpg", "price": "₱199" },            
        { "name": "Lumpiang Shanghai", "image": "picture/pica/lumpia.jpg", "price": "₱29" },      
        { "name": "French Fries", "image": "picture/pica/fries.jpg", "price": "₱99" },
        { "name": "Baked Talaba", "image": "picture/pica/bakedtalaba.jpg", "price": "₱189" }, 
        { "name": "Steam Talaba", "image": "picture/pica/talaba.jpg", "price": "₱99" },
        { "name": "Pork BBQ", "image": "picture/pica/porkbbq.jpg", "price": "₱29" },
        { "name": "Cheesesticks", "image": "picture/pica/cheesesticks.jpg", "price": "₱79" },                 
        { "name": "French Fries Overload", "image": "picture/pica/friesoverload.jpg", "price": "₱199" },
    ],
    "silog": [         
        { "name": "Tapsilog", "image": "picture/silog/tapa.jpeg", "price": "₱99" }, 
        { "name": "Bangsilog", "image": "picture/silog/bangsilogs.jpg", "price": "₱99" }, 
        { "name": "BBQsilog", "image": "picture/silog/bbqsilog.jpg", "price": "₱89" }, 
        { "name": "Chicksilog", "image": "picture/silog/chicksilogs.jpg", "price": "₱99" }, 
        { "name": "Chosilog", "image": "picture/silog/chosilog.jpg", "price": "₱79" }, 
        { "name": "Cornsilog", "image": "picture/silog/cornsilog.jpg", "price": "₱79" }, 
        { "name": "Longsilog", "image": "picture/silog/longsilog.jpg", "price": "₱79" }, 
        { "name": "Spamsilog", "image": "picture/silog/spamsilog.jpg", "price": "₱89" }, 
        { "name": "Tocilog", "image": "picture/silog/tosilog.jpg", "price": "₱89" }, 
    ],
    "pizza": [
        { "name": "Ham & Cheese", "image": "picture/pizza/ham.jpg", "price": "₱219" },
        { "name": "Hawaiian", "image": "picture/pizza/hawaiian.jpg", "price": "₱229" },    
        { "name": "Italian Pizza", "image": "picture/pizza/italian.jpg", "price": "₱219" },   
        { "name": "Meat Delight", "image": "picture/pizza/meat.jpg", "price": "₱229" },   
        { "name": "Pepperoni and Mushroom", "image": "picture/pizza/pepperoni.jpg", "price": "₱229" },   
        { "name": "Special Loaded Pizza", "image": "picture/pizza/special.jpg", "price": "₱259" },   
    ],
    "desserts": [
        { "name": "Buko Shake", "image": "picture/dessert/bukoshake.jpg", "price": "₱99" },
        { "name": "Buko Special Halo-Halo", "image": "picture/dessert/halo-halo.jpg", "price": "₱119" },    
        { "name": "Mango Shake", "image": "picture/dessert/mangoshake.jpg", "price": "₱99" },
        { "name": "Coffee Shake", "image": "picture/dessert/coffeeshake.jpg", "price": "₱99" },
        { "name": "Cucumber Shake", "image": "picture/dessert/cucumbershake.jpg", "price": "₱99" },
        { "name": "Avocado Shake", "image": "picture/dessert/avocado.jpg", "price": "₱99" },
        { "name": "Banana Shake", "image": "picture/dessert/banana.jpg", "price": "₱99" },
        { "name": "Choco Shake", "image": "picture/dessert/chocoshake.jpg", "price": "₱99" },
        { "name": "Choco-Banana Shake", "image": "picture/dessert/chocobanana.jpg", "price": "₱99" },
    ],   
    "drinks": [  
        { "name": "Sprite", "image": "picture/drinks/sprite.png", "price": "₱29" },   
        { "name": "Water 500ml", "image": "picture/drinks/water.jpg", "price": "₱29" }, 
        { "name": "Coke 355ml", "image": "picture/drinks/coke355.jpg", "price": "₱29" }, 
        { "name": "Coke 290ml", "image": "picture/drinks/coke290.png", "price": "₱25" },
        { "name": "Coke 1.5", "image": "picture/drinks/coke1.5.jpg", "price": "₱99" },
        { "name": "Coke 1.25", "image": "picture/drinks/coke-1.25.jpg", "price": "₱79" }, 
        { "name": "Fresh Buko", "image": "picture/drinks/freshbuko.jpg", "price": "₱49" }, 
        { "name": "Calamansi Juice", "image": "picture/drinks/calamansi.jpg", "price": "₱29" }, 
      
    ],


    // Add other categories similarly...
};
// Full image modal elements
const fullImageModal = document.createElement('div');
fullImageModal.classList.add('full-image-modal');
fullImageModal.innerHTML = `
    <div class="modal-content">
        <button class="close-btn">&times; Close</button>
        <img src="" alt="Full Size Image" />
        <div class="image-info">
            <h3 class="image-name"></h3>
            <p class="image-price"></p>
        </div>
    </div>
`;
document.body.appendChild(fullImageModal);

const closeModalBtn = fullImageModal.querySelector('.close-btn');
const fullImage = fullImageModal.querySelector('img');
const imageName = fullImageModal.querySelector('.image-name');
const imagePrice = fullImageModal.querySelector('.image-price');

// Function to show the full-size image modal
function showFullSizeImage(imageSrc, name, price) {
    fullImage.src = imageSrc;
    imageName.textContent = name || ''; // If no name, leave empty
    imagePrice.textContent = price || ''; // If no price, leave empty
    fullImageModal.style.display = 'flex';  // Show the modal
}

// Function to hide the full-size image modal
closeModalBtn.addEventListener('click', () => {
    fullImageModal.style.display = 'none';  // Hide the modal
});

// Function to display images
function displayImages(images) {
    imageList.innerHTML = '';  // Clear current images
    images.forEach(imageData => {
        const imageItem = document.createElement('div');
        imageItem.classList.add('image-item');
        imageItem.setAttribute('data-category', imageData.category);  // Set category

        const img = document.createElement('img');
        img.src = imageData.image;
        img.alt = imageData.name;

        const imageText = document.createElement('div');
        imageText.classList.add('image-text');

        // Show the name and price if the category is not 'menu'
        const showDetails = imageData.category !== 'menu';

        if (showDetails) {
            const h3 = document.createElement('h3');
            h3.textContent = imageData.name;
            const p = document.createElement('p');
            p.textContent = imageData.price;
            imageText.appendChild(h3);
            imageText.appendChild(p);
        }

        // Add "View Full Image" button
        const viewFullSizeButton = document.createElement('button');
        viewFullSizeButton.textContent = 'View Full Image';
        viewFullSizeButton.classList.add('view-full-size-btn');
        viewFullSizeButton.addEventListener('click', () => {
            showFullSizeImage(
                imageData.image, 
                showDetails ? imageData.name : '', // Pass name if available
                showDetails ? imageData.price : '' // Pass price if available
            );  // Show full-size image with name and price
        });
        imageText.appendChild(viewFullSizeButton);

        imageItem.appendChild(img);
        imageItem.appendChild(imageText);

        imageList.appendChild(imageItem);
    });
}

// Function to filter items by category
function filterByCategory(category) {
    const images = data[category] || [];
    displayImages(images.map(item => ({ ...item, category })));  // Pass category info
}

// Event listener for category buttons (same as before)
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterByCategory(category);
    });
});

// Event listener for category select dropdown
categorySelect.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    filterByCategory(selectedCategory);
});

// Event listener for search bar (same as before)
searchBar.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    let filteredImages = [];
    
    // If the search bar is empty, show no images
    if (query === '') {
        imageList.innerHTML = '';  // Clear images when search bar is empty
        return;  // Exit the function
    }

    // Search through all categories
    for (let category in data) {
        filteredImages = filteredImages.concat(
            data[category].filter(item => item.name.toLowerCase().includes(query))
        );
    }
    
    // Display filtered images based on search
    displayImages(filteredImages);
});

// Initial load of Menu List (default category)
filterByCategory('menu');










//For the Img gallery modal
// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal image element
var modalImg = document.getElementById("modalImg");

// Get all images in the feature grid
var images = document.querySelectorAll(".feature-item img");

// Get the "X" (close) button
var span = document.getElementsByClassName("close")[0];

// Get the overlay element
var overlay = document.getElementById("modalOverlay"); // Overlay div to cover content

// Loop through each image and add a click event
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "flex"; // Show the modal
        overlay.style.display = "block"; // Show the overlay (behind the modal content)
        modalImg.src = this.src; // Set the modal image to the clicked image
    }
});

// When the user clicks on the "X" button, close the modal
span.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none"; // Hide the overlay
}

// Close the modal if the user clicks on the overlay (background)
overlay.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none"; // Hide the overlay
}







emailjs.init("DzH-rv47YKO8LddIj");

function SendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('service_540y1o5', 'template_tac6xto', {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    })
    .then(function(response) {
        console.log('Success:', response);
        alert('Message sent successfully!');
    }, function(error) {
        console.error('Error:', error);
        alert('Failed to send message, please try again. Error details: ' + error.text); // Enhanced error logging
    });

    // Optional: Reset the form after submission
    document.getElementById('contact-form').reset();
}



 