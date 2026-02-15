// loader.js

// 1. Inject the strings from config.js into the placeholders
if (document.getElementById('header-placeholder')) {
    document.getElementById('header-placeholder').innerHTML = headerHTML;
}

if (document.getElementById('footer-placeholder')) {
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

// 2. Highlight the active page in the navigation
const currentPath = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll('.main-nav a').forEach(link => {
    // Check if the link's href matches the current filename
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});




// Mobile Menu Logic
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.main-nav');

// We use event delegation because the header is injected dynamically
document.addEventListener('click', function(e) {
    const target = e.target.closest('#mobile-menu');
    if (target) {
        target.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
});



// Add this at the bottom of loader.js for whatsapp button
document.body.insertAdjacentHTML('beforeend', whatsappButtonHTML);