// Animations.js
// Enthält alle Animationsfunktionalitäten für die Super Reinigung Service Website

document.addEventListener('DOMContentLoaded', function() {
    // AOS Bibliothek initialisieren
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Sanfte Scroll-Animation für alle internen Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animiere Header bei Scroll
    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // Animiere Logo bei Hover
    const logo = document.querySelector('.logo-image');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.classList.add('logo-hover');
        });
        logo.addEventListener('mouseleave', function() {
            this.classList.remove('logo-hover');
        });
    }
}); 