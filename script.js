// Get elements
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

// Toggle sidebar
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');  // Toggle open class for sidebar
    menuBtn.classList.toggle('open');  // Toggle open class for menu button
});


// Close sidebar when clicking on any link inside the sidebar
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (sidebarOpen) {
            sidebar.style.transform = 'translateX(-100%)';
            sidebarOpen = false;
        }
    });
});

// Optional: Add smooth scroll to the page for anchors
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust based on header height
            behavior: 'smooth',
        });
    });
});

// Scroll to top functionality (optional)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Show/Hide Scroll to Top Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const collapsibleHeaders = document.querySelectorAll(".collapsible h2");

    collapsibleHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.classList.toggle("active");
        });
    });
});
