// config.js for header

const headerHTML = `
<div class="top-bar">
    <div class="top-bar-content">
        <div class="top-links">
            <a href="#">Eduworks Login</a>
            <a href="#">Microsoft 365 Login</a>
            <a href="#">View Time Table</a>
        </div>
        <div class="top-icons">
            <a href="https://facebook.com" target="_blank">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.497 4.375-4.497 1.244 0 2.315.092 2.627.134v3.044h-1.799c-1.412 0-1.687.672-1.687 1.657v2.173h3.369l-.439 3.403h-2.93v8.741h6.1c.731 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
            </a>
            <a href="https://linkedin.com" target="_blank">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </a>
        </div>
    </div>
</div>

<header class="main-header">
    <div class="header-content">
        <div class="logo">
    <a href="index.html" class="logo-link">
        <img src="https://i.ibb.co/bgZGsLJy/Avi-Cenna-Logo.png" alt="Avi-Cenna Logo">
        <div class="logo-text">
            <span class="brand-name">Avi-Cenna</span>
            <span class="brand-sub">International School</span>
        </div>
    </a>
</div>

        <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>

        <nav class="main-nav">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="admissions.html">Admissions</a>
            <a href="student-life.html">Student Life</a>
            <a href="facilities.html">Facilities</a>
        </nav>
    </div>
</header>
`;






// config.js for footer

const footerHTML = `
<footer class="main-footer">
    <div class="footer-content">
        <div class="footer-col">
            <h4>Contact Us</h4>
            <p>6 Harold Shodipo Crescent GRA, Ikeja Lagos, Nigeria</p>
            <p>Phone: +234 1-4545271, 081 3444 3444</p>
            <p>Email: info@avi-cenna.com</p>
            <div class="social-icons">
                <a href="https://facebook.com" target="_blank">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.497 4.375-4.497 1.244 0 2.315.092 2.627.134v3.044h-1.799c-1.412 0-1.687.672-1.687 1.657v2.173h3.369l-.439 3.403h-2.93v8.741h6.1c.731 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
            </a>
            <a href="https://linkedin.com" target="_blank">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </a>
            </div>
        </div>
        <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#">Frequently Asked Questions</a></li>
                <li><a href="#">PTA</a></li>
                <li><a href="#">School Anthem</a></li>
                <li><a href="#">Excursions</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Awards</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Get Directions</h4>
            <div class="map-container-wrapper">
    <div class="embed-map-responsive">
        <div class="embed-map-container">
            <iframe 
                class="embed-map-frame" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                src="https://maps.google.com/maps?q=Avi-Cenna%20International%20School%20Ikeja&t=&z=15&ie=UTF8&iwloc=&output=embed">
            </iframe>
        </div>
    </div>
</div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© 2002 - 2026 Avi-Cenna International School | All rights reserved</p>
    </div>
</footer>
`;





const whatsappButtonHTML = `
<a href="https://wa.me/2349066115252" class="whatsapp-float" target="_blank" rel="noopener noreferrer">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M12.031 6.172c-2.32 0-4.208 1.888-4.208 4.208 0 .744.194 1.472.563 2.112l-.599 2.191 2.241-.588c.618.337 1.312.515 2.012.515 2.32 0 4.208-1.888 4.208-4.208s-1.888-4.208-4.208-4.208zm3.087 5.989c-.127.35-.639.674-.88.723-.241.049-.536.071-.853-.032-.211-.069-.479-.166-.781-.297-1.282-.556-2.112-1.864-2.176-1.95-.064-.085-.515-.685-.515-1.305 0-.621.325-.926.441-1.05.116-.124.254-.155.339-.155h.215c.069 0 .147-.026.223.155.085.204.291.706.317.757.026.051.042.11.009.176-.033.066-.049.106-.098.163-.049.057-.103.127-.147.171-.049.049-.1.103-.042.203.057.1.254.419.546.678.376.334.693.438.79.486.097.048.154.04.211-.025.057-.065.241-.281.306-.376.065-.095.129-.079.215-.046.085.033.541.255.634.301.093.046.155.069.178.107.023.038.023.22-.104.57zM12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.18 1.89 5.83L2.05 22l4.24-1.11C7.82 21.6 9.83 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.97 0-3.81-.6-5.33-1.61l-.38-.25-2.5.65.67-2.45-.28-.44C3.13 14.76 2.5 13.17 2.5 11.5c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5z"/>
    </svg>
    <span class="tooltip">Chat with us</span>
</a>
`;
