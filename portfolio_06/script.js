// ===== GLOBAL VARIABLES =====
let currentSection = 'home';
let isMobile = window.innerWidth < 768;
let isAnimating = false;

// ===== LOAD COMPONENTS =====
async function loadComponents() {
    try {
        // Load components
        const components = [
            { id: 'navbar-container', file: 'components/navbar.html' },
            { id: 'header-container', file: 'components/header.html' },
            { id: 'footer-container', file: 'components/footer.html' },
            { id: 'hero-container', file: 'sections/hero.html' },
            { id: 'about-container', file: 'sections/about.html' },
            { id: 'education-container', file: 'sections/education.html' },
            { id: 'skills-container', file: 'sections/skills.html' },
            { id: 'experience-container', file: 'sections/experience.html' },
            { id: 'projects-container', file: 'sections/projects.html' },
            { id: 'achievements-container', file: 'sections/achievements.html' },
            { id: 'certifications-container', file: 'sections/certifications.html' },
            { id: 'contact-container', file: 'sections/contact.html' }
        ];

        for (const component of components) {
            const response = await fetch(component.file);
            const html = await response.text();
            document.getElementById(component.id).innerHTML = html;
        }

        // Initialize after loading
        initializePortfolio();
        
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// ===== INITIALIZE PORTFOLIO =====
function initializePortfolio() {
    // Initialize animations
    initAnimations();
    
    // Initialize interactive elements
    initInteractiveElements();
    
    // Initialize charts
    initCharts();
    
    // Initialize counters
    initCounters();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initial animations
    animateOnLoad();
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Add animation classes to elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('hidden');
    });
}

function animateOnLoad() {
    // Animate hero section on load
    setTimeout(() => {
        document.querySelector('#hero .hero-title')?.classList.add('animate');
        document.querySelector('#hero .hero-subtitle')?.classList.add('animate');
        document.querySelector('#hero .hero-description')?.classList.add('animate');
    }, 300);
}

// ===== INTERACTIVE ELEMENTS =====
function initInteractiveElements() {
    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0%';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 300);
                }
            });
        });
        
        observer.observe(bar);
    });

    // Interactive cards
    document.querySelectorAll('.interactive-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Progress tracking
    const progressItems = document.querySelectorAll('.progress-item');
    progressItems.forEach(item => {
        const progress = item.querySelector('.progress-fill');
        const width = progress.getAttribute('data-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        progress.style.width = width + '%';
                    }, 500);
                }
            });
        });
        
        observer.observe(item);
    });
}

// ===== CHARTS =====
function initCharts() {
    // Initialize any charts if present
    const chartElements = document.querySelectorAll('canvas');
    if (chartElements.length > 0) {
        // Initialize Chart.js charts
        chartElements.forEach(canvas => {
            if (canvas.id === 'skillsChart') {
                initSkillsChart(canvas);
            } else if (canvas.id === 'businessChart') {
                initBusinessChart(canvas);
            }
        });
    }
}

function initSkillsChart(canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Leadership', 'Finance', 'Marketing', 'Strategy', 'Analytics', 'Communication'],
            datasets: [{
                label: 'BBA Skill Set',
                data: [85, 78, 90, 82, 88, 92],
                backgroundColor: 'rgba(79, 195, 247, 0.2)',
                borderColor: 'rgba(79, 195, 247, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(79, 195, 247, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(79, 195, 247, 1)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                    pointLabels: {
                        color: '#b8c1ec',
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        display: false,
                        max: 100
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function initBusinessChart(canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Strategy', 'Finance', 'Marketing', 'Operations', 'HR', 'Analytics'],
            datasets: [{
                label: 'Business Competencies',
                data: [88, 85, 92, 80, 78, 90],
                backgroundColor: [
                    'rgba(15, 76, 117, 0.8)',
                    'rgba(50, 130, 184, 0.8)',
                    'rgba(79, 195, 247, 0.8)',
                    'rgba(187, 225, 250, 0.8)',
                    'rgba(0, 180, 216, 0.8)',
                    'rgba(76, 201, 240, 0.8)'
                ],
                borderColor: [
                    'rgba(15, 76, 117, 1)',
                    'rgba(50, 130, 184, 1)',
                    'rgba(79, 195, 247, 1)',
                    'rgba(187, 225, 250, 1)',
                    'rgba(0, 180, 216, 1)',
                    'rgba(76, 201, 240, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#b8c1ec'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#b8c1ec'
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// ===== COUNTERS =====
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + (counter.getAttribute('data-suffix') || '');
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Scroll progress
    window.addEventListener('scroll', updateScrollProgress);
    
    // Scroll animations
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Nav link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Window resize
    window.addEventListener('resize', handleResize);
    
    // Parallax effect
    window.addEventListener('scroll', handleParallax);
}

function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";
    }
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.remove('hidden');
            element.classList.add('visible');
            
            // Add specific animation class based on data attribute
            const animation = element.getAttribute('data-animation') || 'fadeInUp';
            element.classList.add(animation);
        }
    });
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.querySelector('.mobile-toggle');
    
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden';
    } else {
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
    }
}

function handleNavClick(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        const mobileToggle = document.querySelector('.mobile-toggle');
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = 'auto';
        }
        
        // Smooth scroll to target
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Update current section
        currentSection = targetId.substring(1);
        updateActiveNav();
    }
}

function updateActiveNav() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.disabled = true;
    
    // Reset form
    e.target.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 3000);
}

function handleResize() {
    isMobile = window.innerWidth < 768;
    
    // Adjust any mobile-specific settings
    if (!isMobile) {
        const navLinks = document.querySelector('.nav-links');
        const mobileToggle = document.querySelector('.mobile-toggle');
        
        navLinks.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
    }
}

function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Create background elements
    createBackgroundElements();
    
    // Load all components
    loadComponents();
});

function createBackgroundElements() {
    const bgPattern = document.createElement('div');
    bgPattern.className = 'bg-pattern';
    document.body.appendChild(bgPattern);
    
    const floatingElements = document.createElement('div');
    floatingElements.className = 'floating-elements';
    
    for (let i = 0; i < 3; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        floatingElements.appendChild(element);
    }
    
    document.body.appendChild(floatingElements);
    
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
}

// ===== UTILITY FUNCTIONS =====
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initPortfolio: initializePortfolio,
        loadComponents,
        initCharts,
        initCounters
    };
}