document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Motion (Parallax & Progress) ---
    const header = document.querySelector('.premium-nav');
    const heroVisual = document.querySelector('.hero-visual');
    const timeline = document.querySelector('.timeline');
    const timelineMarker = document.querySelectorAll('.timeline-marker');
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                
                // Sticky Header
                if (scrollY > 50) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
                
                // Hero Parallax (Desktop Only)
                if (heroVisual && window.innerWidth > 768 && scrollY < window.innerHeight) {
                    heroVisual.style.transform = `translateY(${scrollY * 0.3}px)`;
                } else if (heroVisual && window.innerWidth <= 768) {
                    heroVisual.style.transform = 'none';
                }

                // Timeline Scroll Motion
                if (timeline) {
                    const rect = timeline.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const progress = 1 - (rect.bottom / (window.innerHeight + rect.height));
                        timelineMarker.forEach((marker, index) => {
                            const delay = index * 0.1;
                            if (progress > delay) {
                                marker.style.transform = `scale(${1 + (progress - delay) * 0.2})`;
                                marker.style.boxShadow = `0 0 15px rgba(197, 160, 89, ${progress})`;
                            }
                        });
                    }
                }
                
                // Marquee Parallax
                const marqueeBg = document.querySelector('.marquee-bg-elements');
                if (marqueeBg) {
                    marqueeBg.style.transform = `translateY(${scrollY * 0.05}px)`;
                }

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-menu');
    const navLinks = document.querySelectorAll('.main-menu a');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    function closeMenu() {
        nav.classList.remove('active');
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            if (menuOverlay) menuOverlay.classList.toggle('active');
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- Active Navigation Indicator via IntersectionObserver ---
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + currentId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.getAttribute('id')) {
            observer.observe(section);
        }
    });
});

// --- Mobile Research Domains Accordion ---
// Will be called by research-domains.js after rendering
function setupMobileDomains() {
    const domainInterface = document.querySelector('.domain-interface');
    if (!domainInterface) return;
    
    if (window.innerWidth <= 1024 && !domainInterface.classList.contains('accordion-initialized')) {
        domainInterface.classList.add('accordion-initialized');
        
        const tags = document.querySelectorAll('.domain-tags .tag');
        
        // Hide the glass panel completely on mobile
        const glassPanel = document.getElementById('domain-details-container');
        if (glassPanel) glassPanel.style.display = 'none';
        
        // Re-inject content directly under tags for accordion
        tags.forEach(tag => {
            const onclick = tag.getAttribute('onclick');
            if (onclick) {
                const match = onclick.match(/'([^']+)'/);
                if (match) {
                    const domainKey = match[1];
                    const detailBox = document.getElementById('domain-' + domainKey);
                    
                    if (detailBox) {
                        detailBox.classList.remove('active');
                        detailBox.classList.add('mobile-accordion-content');
                        detailBox.style.maxHeight = '0px';
                        detailBox.style.overflow = 'hidden';
                        detailBox.style.transition = 'max-height 0.4s ease, padding 0.4s ease';
                        detailBox.style.background = 'rgba(0,0,0,0.2)';
                        
                        // Move after tag
                        tag.parentNode.insertBefore(detailBox, tag.nextSibling);
                        
                        tag.addEventListener('click', () => {
                            const isOpen = detailBox.style.maxHeight !== '0px' && detailBox.style.maxHeight !== '';
                            
                            // Close all
                            document.querySelectorAll('.mobile-accordion-content').forEach(c => {
                                if (c.style.maxHeight !== '0px') {
                                    c.style.maxHeight = c.scrollHeight + 'px'; 
                                    void c.offsetWidth;
                                    c.style.maxHeight = '0px';
                                    c.style.padding = '0 20px';
                                }
                            });
                            document.querySelectorAll('.domain-tags .tag').forEach(t => {
                                t.classList.remove('active');
                            });
                            
                            if (!isOpen) {
                                tag.classList.add('active');
                                detailBox.style.maxHeight = detailBox.scrollHeight + 500 + 'px'; 
                                detailBox.style.padding = '20px';
                                
                                setTimeout(() => {
                                    tag.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    detailBox.style.maxHeight = 'none';
                                }, 400);
                            }
                        });
                    }
                }
            }
        });
    }
}
