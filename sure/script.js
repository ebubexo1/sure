document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const mapLink = document.querySelector('#mapLink');
    const mapContainer = document.querySelector('#mapContainer');

    if (hamburger && navLinks) {
        const toggleMenu = (e) => {
            e.preventDefault(); // Prevent default touch behavior
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            console.log('Hamburger clicked, menu toggled:', navLinks.classList.contains('active'));
        };

        hamburger.addEventListener('click', toggleMenu);
        hamburger.addEventListener('touchstart', toggleMenu);
    } else {
        console.error('Hamburger or nav-links not found in DOM');
    }

    if (mapLink && mapContainer) {
        mapLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (mapContainer.classList.contains('hidden')) {
                mapContainer.classList.remove('hidden');
                mapLink.textContent = 'Hide Map';
            } else {
                mapContainer.classList.add('hidden');
                mapLink.textContent = 'View Our Location on Map';
            }
            console.log('Map toggled:', !mapContainer.classList.contains('hidden'));
        });
    }
});