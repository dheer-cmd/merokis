/* ==========================================
   ABOUT PAGE INTERACTIONS & ANIMATIONS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // HERO SECTION ENTRANCE ANIMATIONS
    // ==========================================
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
    }, '-=0.6')
    .to('.map-grid-animation', {
        opacity: 0.8,
        duration: 1.5
    }, '-=1');

    // ==========================================
    // HERITAGE SECTION SCROLL REVEALS
    // ==========================================
    gsap.to('.reveal-left', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.story-section',
            start: 'top 75%'
        }
    });

    gsap.to('.reveal-right', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.story-section',
            start: 'top 75%'
        }
    });

    // Count-Up Statistics Animation
    const statNums = document.querySelectorAll('.stat-num');
    
    statNums.forEach(stat => {
        const targetVal = parseInt(stat.getAttribute('data-target'), 10);
        
        gsap.to(stat, {
            textContent: targetVal,
            duration: 2.5,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: '.stats-grid',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            onUpdate: function() {
                const currentVal = Math.ceil(stat.textContent);
                if (targetVal === 98) {
                    stat.innerHTML = `${currentVal}%`;
                } else {
                    stat.innerHTML = `${currentVal}+`;
                }
            }
        });
    });

    // ==========================================
    // CORE STRATEGY CARD STAGGERED REVEAL
    // ==========================================
    gsap.fromTo('.strategy-card', 
        { opacity: 0, y: 60 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.strategy-grid',
                start: 'top 80%'
            }
        }
    );

    // ==========================================
    // WHY PARTNER WITH US CARD STAGGERED REVEAL
    // ==========================================
    gsap.fromTo('.partner-card', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.partner-grid',
                start: 'top 80%'
            }
        }
    );

    // ==========================================
    // GLOBAL MAP CONNECTION PULSING & PATHS
    // ==========================================
    gsap.fromTo('.global-section .reveal-text', 
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.global-section',
                start: 'top 80%'
            }
        }
    );

    gsap.fromTo('.global-section .reveal-subtext', 
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.global-section',
                start: 'top 78%'
            }
        }
    );

    // Draw route paths on scroll
    gsap.fromTo('.export-route', 
        { strokeDashoffset: 500 },
        {
            strokeDashoffset: 0,
            duration: 4,
            stagger: 0.4,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.interactive-map-container',
                start: 'top 75%'
            }
        }
    );

    // Map markers staggered fade-in
    gsap.fromTo('.map-marker', 
        { scale: 0, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.interactive-map-container',
                start: 'top 70%'
            }
        }
    );

    // ==========================================
    // TESTIMONIALS STAGGERED REVEAL
    // ==========================================
    gsap.fromTo('.testimonial-card', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.25,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.testimonials-grid',
                start: 'top 80%'
            }
        }
    );

    // ==========================================
    // CTA BLOCK MOTION REVEAL
    // ==========================================
    gsap.fromTo('.cta-box', 
        { scale: 0.95, opacity: 0, y: 40 },
        {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.cta-section',
                start: 'top 85%'
            }
        }
    );
});
