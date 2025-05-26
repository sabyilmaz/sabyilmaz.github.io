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