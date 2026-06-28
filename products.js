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




});
