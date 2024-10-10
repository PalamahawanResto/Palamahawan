function playMusic(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag
    const music = document.getElementById('music');
    
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function toggleMenu() {
    const links = document.querySelector('.navbar-links');
    links.classList.toggle('active'); // Toggle the 'active' class for links
}

function toggleDropdown(dropdownId) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        if (dropdown.id === dropdownId) {
            dropdown.classList.toggle('active'); // Toggle the 'active' class for the clicked dropdown
        } else {
            dropdown.classList.remove('active'); // Close other dropdowns
        }
    });
}