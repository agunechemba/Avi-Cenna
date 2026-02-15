// --- Counter Animation Logic ---
const statsSection = document.getElementById('stats-section');
const counters = document.querySelectorAll('.stat-number');
let started = false; 

function startCount(el) {
    let target = parseInt(el.dataset.target);
    let count = 0;
    let speed = target / 100; 

    let timer = setInterval(() => {
        count += speed;
        if (count >= target) {
            el.innerText = target + "+"; 
            clearInterval(timer);
        } else {
            el.innerText = Math.floor(count);
        }
    }, 20);
}

// Only run the scroll listener if the stats section exists on the current page
if (statsSection) {
    window.addEventListener('scroll', () => {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !started) {
            counters.forEach(counter => startCount(counter));
            started = true;
        }
    });
}