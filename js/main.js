/**
 * Main JavaScript-Datei für Super Reinigung Service
 * Diese Datei steuert alle interaktiven Elemente der Website
 */

// Warten, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menü Toggle
    initMobileMenu();
    
    // FAQ-Akkordeon
    initFaqAccordion();
    
    // Smooth Scroll für Anker-Links
    initSmoothScroll();
    
    // Kontaktformular-Validierung
    initContactForm();
});

/**
 * Initialisiert das mobile Menü
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle aktive Klasse für das Menü
            mainNav.classList.toggle('active');
            
            // Ändere das Aussehen des Toggle-Buttons
            this.classList.toggle('active');
            
            // Ändere die Zugänglichkeit
            const expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
        });
        
        // Schließe das Menü, wenn ein Menüpunkt geklickt wird
        const menuLinks = mainNav.querySelectorAll('a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Füge ARIA-Attribute für Zugänglichkeit hinzu
        mobileMenuToggle.setAttribute('aria-controls', 'main-nav');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Menü öffnen');
    }
}

/**
 * Initialisiert das FAQ-Akkordeon
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(function(item) {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                question.addEventListener('click', function() {
                    // Schließe alle anderen FAQ-Items
                    faqItems.forEach(function(otherItem) {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle aktive Klasse für das geklickte Item
                    item.classList.toggle('active');
                    
                    // Ändere das Icon
                    const icon = question.querySelector('i');
                    if (icon) {
                        if (item.classList.contains('active')) {
                            icon.classList.remove('fa-plus');
                            icon.classList.add('fa-minus');
                        } else {
                            icon.classList.remove('fa-minus');
                            icon.classList.add('fa-plus');
                        }
                    }
                });
            }
        });
    }
}

/**
 * Initialisiert Smooth Scroll für Anker-Links
 */
function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Berechne die Position des Ziel-Elements
                const headerHeight = document.getElementById('main-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Scrolle zur Zielposition
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialisiert die Kontaktformular-Validierung
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Einfache Validierung
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const privacy = document.getElementById('privacy');
            
            let isValid = true;
            
            // Prüfe Name
            if (!name.value.trim()) {
                highlightError(name, 'Bitte geben Sie Ihren Namen ein.');
                isValid = false;
            } else {
                removeError(name);
            }
            
            // Prüfe E-Mail
            if (!isValidEmail(email.value)) {
                highlightError(email, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
                isValid = false;
            } else {
                removeError(email);
            }
            
            // Prüfe Nachricht
            if (!message.value.trim()) {
                highlightError(message, 'Bitte geben Sie Ihre Nachricht ein.');
                isValid = false;
            } else {
                removeError(message);
            }
            
            // Prüfe Datenschutzerklärung
            if (!privacy.checked) {
                highlightError(privacy, 'Bitte stimmen Sie der Datenschutzerklärung zu.');
                isValid = false;
            } else {
                removeError(privacy);
            }
            
            // Wenn das Formular gültig ist, simuliere das Absenden
            if (isValid) {
                // Hier würde normalerweise der AJAX-Request oder die Formularübermittlung erfolgen
                showThankYouMessage();
            }
        });
    }
}

/**
 * Zeigt eine Fehlermeldung für ein Formularfeld an
 */
function highlightError(inputElement, errorMessage) {
    inputElement.classList.add('error');
    
    // Füge Fehlermeldung hinzu, wenn sie noch nicht existiert
    const parentElement = inputElement.parentElement;
    let errorElement = parentElement.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        parentElement.appendChild(errorElement);
    }
    
    errorElement.textContent = errorMessage;
}

/**
 * Entfernt die Fehlermeldung von einem Formularfeld
 */
function removeError(inputElement) {
    inputElement.classList.remove('error');
    
    // Entferne Fehlermeldung
    const parentElement = inputElement.parentElement;
    const errorElement = parentElement.querySelector('.error-message');
    
    if (errorElement) {
        parentElement.removeChild(errorElement);
    }
}

/**
 * Überprüft, ob eine E-Mail-Adresse gültig ist
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Zeigt eine Erfolgsmeldung nach dem Absenden des Formulars an
 */
function showThankYouMessage() {
    const contactForm = document.getElementById('contact-form');
    const formContainer = contactForm.parentElement;
    
    // Verstecke das Formular
    contactForm.style.display = 'none';
    
    // Erstelle und zeige die Erfolgsmeldung
    const thankYouMessage = document.createElement('div');
    thankYouMessage.className = 'thank-you-message';
    thankYouMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Vielen Dank für Ihre Nachricht!</h3>
        <p>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
        <button class="btn btn-primary" id="reset-form">Neues Formular</button>
    `;
    
    formContainer.appendChild(thankYouMessage);
    
    // Event-Listener für den Reset-Button
    document.getElementById('reset-form').addEventListener('click', function() {
        contactForm.reset();
        contactForm.style.display = 'block';
        formContainer.removeChild(thankYouMessage);
    });
} 