// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const profileImage = document.getElementById('profile-image');

    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        if (profileImage) {
            profileImage.src = 'media/sab-picrew.png';
        }
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        if (profileImage) {
            profileImage.src = 'media/sab-picrew-light.png';
        }
        localStorage.setItem('theme', 'light');
    }
}

// Apply saved theme on page load
function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        const profileImage = document.getElementById('profile-image');
        if (profileImage) {
            profileImage.src = 'media/sab-picrew-light.png';
        }
    }
}

// Apply theme when the page loads
document.addEventListener('DOMContentLoaded', applyTheme);

const typewriterText = document.getElementById('typewriter');
const texts = [
    "Specialized in Web & Backend Development",
    "Passionate about Machine Learning"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000;

function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typewriterText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = erasingDelay;
    } else {
        typewriterText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingDelay = 500;
    }

    setTimeout(type, typingDelay);
}

// Start the typewriter effect when the page loads
document.addEventListener('DOMContentLoaded', type); 