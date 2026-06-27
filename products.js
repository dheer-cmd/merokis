/* ==========================================
   PRODUCTS PAGE INTERACTIVITY & GSAP ANIMATIONS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // PARALLAX HERO BACKGROUND & ENTRANCE
    // ==========================================
    // Smooth Parallax scrolling effect
    gsap.to('.hero-parallax-bg', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
            trigger: '.products-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Fade-in reveals timeline
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl.to('.reveal-text', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.2
    })
    .to('.reveal-subtext', {
        opacity: 1,
        y: 0,
        duration: 1
    }, '-=0.8')
    .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 1
    }, '-=0.6');

    // ==========================================
    // PRODUCT CATEGORIES (DIVISIONS) STAGGER REVEAL
    // ==========================================
    gsap.fromTo('.category-card', 
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.categories-grid',
                start: 'top 82%'
            }
        }
    );



    // ==========================================
    // FEATURED SOLUTIONS SHOWCASE REVEAL
    // ==========================================
    gsap.fromTo('.showcase-item', 
        { opacity: 0, y: 60 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.25,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.featured-showcase',
                start: 'top 75%'
            }
        }
    );

    // ==========================================
    // DISTRIBUTION SECTION SCROLL STATISTICS COUNTERS
    // ==========================================
    const distStats = document.querySelectorAll('.dist-num');
    
    distStats.forEach(stat => {
        const targetVal = parseInt(stat.getAttribute('data-target'), 10);
        
        gsap.to(stat, {
            textContent: targetVal,
            duration: 2.5,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: '.distribution-stats',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            onUpdate: function() {
                const currentVal = Math.ceil(stat.textContent);
                if (stat.id === 'stat-accuracy') {
                    stat.innerHTML = `${currentVal}%`;
                } else {
                    stat.innerHTML = `${currentVal}+`;
                }
            }
        });
    });

    // Globe routes and marker entry animation
    gsap.fromTo('.globe-marker', 
        { scale: 0, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.distribution-globe-card',
                start: 'top 75%'
            }
        }
    );

    // ==========================================
    // WHY CHOOSE BENEFIT CARDS REVEAL
    // ==========================================
    gsap.fromTo('.benefit-card', 
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.benefits-grid',
                start: 'top 82%'
            }
        }
    );

    // ==========================================
    // CTA BANNER ANIMATION REVEAL
    // ==========================================
    gsap.fromTo('.cta-box', 
        { scale: 0.95, opacity: 0, y: 35 },
        {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.cta-section',
                start: 'top 85%'
            }
        }
    );
});
