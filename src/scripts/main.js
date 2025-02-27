document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    const button = document.getElementById('explore-button');

    // Display a welcome message
    welcomeMessage.textContent = 'Welcome to Our Immersive Website!';

    // Add event listener for button click
    button.addEventListener('click', () => {
        alert('Thank you for exploring our website!');
    });

    // Smooth scroll to sections
    const scrollLinks = document.querySelectorAll('a.scroll-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});