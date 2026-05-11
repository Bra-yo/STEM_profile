// Global variables for navbar functionality
let navLinks;
let hamburger;
let navMenu;
let navbar;

// Enhanced JavaScript for Futuristic Shallom Sila Website
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    // Modal functionality (only if modal exists)
    const modal = document.getElementById('eventModal');
    const closeModal = document.querySelector('.close-modal');
    
    // Initialize navbar elements
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.nav-menu');
    navLinks = document.querySelectorAll('.nav-link');
    navbar = document.querySelector('.navbar');
    
    // Defensive checks for navbar elements
    if (!hamburger || !navMenu || !navLinks || !navbar) {
        console.warn('Some navbar elements are missing');
        return;
    }
    
    if (modal && closeModal) {
        // Check if user just subscribed to newsletter
        const justSubscribed = sessionStorage.getItem('justSubscribed');
        
        if (!justSubscribed) {
            // Show modal on page load after a delay
            setTimeout(() => {
                modal.style.display = 'block';
            }, 2000);
        } else {
            // Clear the flag so popup shows normally on future visits
            sessionStorage.removeItem('justSubscribed');
        }
        
        // Close modal when clicking on X
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Mobile Navigation Toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar Scroll Effect
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check

    // Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // Scroll Reveal Animations
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    
    // Enhanced Form Interactions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Add focus effects
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });

            // Add floating label effect
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
    });

    // Parallax Effect for Hero Section
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.hero-content');
            if (parallax) {
                const speed = 0.5;
                parallax.style.transform = `translateY(${scrolled * speed}px)`;
            }
        }
    }

    window.addEventListener('scroll', parallaxEffect);

    // Tech-themed Floating Elements
    function createFloatingElements() {
        const techSymbols = ['</>', '{ }', '[]', '()', '<>', '/>', 'AI', 'ML', 'IoT'];
        const container = document.querySelector('.hero');
        
        if (!container) return;
        
        techSymbols.forEach((symbol, index) => {
            const element = document.createElement('div');
            element.className = 'floating-tech-symbol';
            element.textContent = symbol;
            element.style.cssText = `
                position: absolute;
                font-family: 'Courier New', monospace;
                color: rgba(0, 217, 255, 0.3);
                font-size: ${Math.random() * 20 + 10}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 3 + 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
                z-index: 1;
            `;
            container.appendChild(element);
        });
    }

    createFloatingElements();

    // Enhanced Button Effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Performance optimization for mobile
    if (window.innerWidth <= 768) {
        // Reduce animations on mobile
        document.body.style.setProperty('--transition-smooth', '0.2s ease');
        
        // Disable parallax on mobile
        window.removeEventListener('scroll', parallaxEffect);
    }

    // Initialize scroll animations
    handleScrollAnimations();
    
    // Initialize animated counters
    animateCounters();
    
    // Add fade-in class to elements that should animate
    const animatedElements = document.querySelectorAll('.program-card, .event-card, .stat-card');
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        // Make elements visible immediately
        setTimeout(() => {
            element.classList.add('visible');
        }, 100);
    });
    
    // Handle contact form if it exists
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const successAlert = document.getElementById('successAlert');
        const errorAlert = document.getElementById('errorAlert');
        handleFormSubmission(contactForm, successAlert, errorAlert);
    }

    // Handle newsletter form if it exists
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('#newsletterEmail').value;
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            // Show loading state
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;
            
            try {
                console.log('📧 Sending newsletter subscription request...');
                const response = await fetch('https://stem-profile.onrender.com/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email })
                });
                
                console.log('📧 Response received:', response.status);
                const result = await response.json();
                console.log('📧 Response data:', result);
                
                if (result.success) {
                    console.log('✅ Newsletter subscription successful');
                    alert('Thank you for subscribing! You\'ll receive updates soon.');
                    newsletterForm.reset();
                    
                    // Set flag to prevent popup from showing immediately after redirect
                    sessionStorage.setItem('justSubscribed', 'true');
                    
                    // Close modal and redirect to home page
                    setTimeout(() => {
                        const modal = document.getElementById('eventModal');
                        if (modal) {
                            modal.style.display = 'none';
                        }
                        window.location.href = 'index.html';
                    }, 1500);
                } else {
                    console.error('❌ Newsletter subscription failed:', result);
                    alert('Subscription failed. Please try again.');
                }
            } catch (error) {
                console.error('❌ Newsletter subscription error:', error);
                alert('Subscription failed. Please try again.');
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }
    
    // Initialize event listeners
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
        handleScrollAnimations();
        handleNavbarScroll();
    });
    
    // Apply debouncing to scroll handlers
    const debouncedScrollHandler = debounce(() => {
        updateActiveNavLink();
        handleScrollAnimations();
        handleNavbarScroll();
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Add hover effect to cards
    document.querySelectorAll('.program-card, .event-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Initialize section styles
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial check
    
    // Partner logo animation
    const partnerLogos = document.querySelectorAll('.partner-logo');
    partnerLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Performance optimization: Lazy load images when they come into viewport
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && hamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Navigation Link based on scroll position
function updateActiveNavLink() {
    if (!navLinks || navLinks.length === 0) return;
    
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

// Scroll Animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Make elements visible immediately when they enter viewport
        if (elementTop < window.innerHeight * 0.9 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Animated Counter for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = Number(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';

        if (Number.isNaN(target)) {
            console.warn('Invalid counter target:', counter);
            return;
        }

        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let current = 0;
                    const duration = 2000;
                    const stepTime = 20;
                    const increment = target / (duration / stepTime);

                    const updateCounter = () => {
                        current += increment;

                        if (current < target) {
                            counter.textContent = Math.floor(current).toLocaleString() + suffix;
                            setTimeout(updateCounter, stepTime);
                        } else {
                            counter.textContent = target.toLocaleString() + suffix;
                        }
                    };

                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
}

// Form submission handler (for contact form)
function handleFormSubmission(form, successMessage, errorMessage) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            const response = await fetch('https://stem-profile.onrender.com/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Show success message
                if (successMessage) {
                    successMessage.style.display = 'block';
                    successMessage.classList.add('show');
                    console.log('✅ SUCCESS: Message sent successfully');
                    
                    // Auto-hide after 5 seconds
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                        successMessage.classList.remove('show');
                    }, 5000);
                }
                form.reset();
            } else {
                // Show error message
                if (errorMessage) {
                    errorMessage.style.display = 'block';
                    errorMessage.classList.add('show');
                    console.error('❌ ERROR: Failed to send message -', result.message);
                    
                    // Auto-hide after 5 seconds
                    setTimeout(() => {
                        errorMessage.style.display = 'none';
                        errorMessage.classList.remove('show');
                    }, 5000);
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
            if (errorMessage) {
                errorMessage.style.display = 'block';
                errorMessage.classList.add('show');
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                    errorMessage.classList.remove('show');
                }, 5000);
            }
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Smooth reveal animation for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Page load animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
