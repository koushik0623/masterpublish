document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Always make everything visible immediately — no content should ever be hidden
    const revealElements = document.querySelectorAll('.reveal-up, .stat-bubble, .card-glass, .process-dark-card, .section-header-centered, .section-header-split, .text-block, .hero-content, .footer-grid, .footer-bottom');

    if (prefersReducedMotion) {
        // Just ensure everything is shown
        revealElements.forEach(el => el.classList.add('is-revealed'));
        return;
    }

    // Wait for page to fully paint before enabling animations
    // This prevents the "invisible on load" bug
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            // NOW add animate-ready to body — CSS will apply opacity:0 only now
            document.body.classList.add('animate-ready');

            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.05
            };

            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        obs.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            revealElements.forEach(el => {
                // Check if element is already in viewport
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    // In viewport → show immediately without animation
                    el.classList.add('is-revealed');
                } else {
                    // Not in viewport → observe for scroll reveal
                    observer.observe(el);
                }
            });

            // Absolute safety net: force all visible after 1 second
            setTimeout(() => {
                revealElements.forEach(el => el.classList.add('is-revealed'));
            }, 1000);
        });
    });
});
