/* ==========================================
   CONTACT US PAGE INTERACTIVITY & ANIMATIONS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // CANVASES & PARTICLES HERO BACKGROUND
    // ==========================================
    initParticles();

    // ==========================================
    // HERO SECTION ENTRANCE ANIMATIONS
    // ==========================================
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl.fromTo('.reveal-text', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2 }
    )
    .fromTo('.reveal-subtext', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0 }, 
        '-=0.8'
    )
    .fromTo('.hero-buttons', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0 },
        '-=0.6'
    );

    // ==========================================
    // MAIN CONTACT GRID SCROLL REVEALS
    // ==========================================
    gsap.fromTo('.contact-form-column.reveal-left', 
        { opacity: 0, x: -50 },
        {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-grid',
                start: 'top 80%'
            }
        }
    );

    gsap.fromTo('.contact-info-column.reveal-right', 
        { opacity: 0, x: 50 },
        {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-grid',
                start: 'top 80%'
            }
        }
    );

    // ==========================================
    // INTERACTIVE MAP REVEAL
    // ==========================================
    gsap.fromTo('.map-frame-wrapper.reveal-up', 
        { opacity: 0, y: 55 },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.map-section',
                start: 'top 80%'
            }
        }
    );

    // ==========================================
    // WHY CONTACT Mérokis CARD STAGGERED REVEAL
    // ==========================================
    gsap.fromTo('.why-card.reveal-up', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.why-grid',
                start: 'top 80%'
            }
        }
    );

    // ==========================================
    // GLOBAL REACH SECTION ANIMATIONS
    // ==========================================
    gsap.fromTo('.global-reach-section .reveal-left', 
        { opacity: 0, x: -50 },
        {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.global-reach-section',
                start: 'top 78%'
            }
        }
    );

    gsap.fromTo('.global-reach-section .reveal-right', 
        { opacity: 0, x: 50 },
        {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.global-reach-section',
                start: 'top 78%'
            }
        }
    );

    // Count-Up Statistics Animation
    const counterNums = document.querySelectorAll('.counter-num');
    
    counterNums.forEach(counter => {
        const targetVal = parseInt(counter.getAttribute('data-target'), 10);
        
        gsap.fromTo(counter, 
            { textContent: 0 },
            {
                textContent: targetVal,
                duration: 2.5,
                ease: 'power2.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: '.reach-counters',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                onUpdate: function() {
                    const currentVal = Math.ceil(counter.textContent);
                    if (targetVal === 98) {
                        counter.innerHTML = `${currentVal}%`;
                    } else {
                        counter.innerHTML = `${currentVal}+`;
                    }
                }
            }
        );
    });

    // Globe hubs stagger fade-in
    gsap.fromTo('.map-hub', 
        { scale: 0, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.25,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.animated-globe-card',
                start: 'top 80%'
            }
        }
    );

    // ==========================================
    // CALL TO ACTION BOX MOTION REVEAL
    // ==========================================
    gsap.fromTo('.cta-box.reveal-up', 
        { opacity: 0, y: 50, scale: 0.95 },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.cta-section',
                start: 'top 85%'
            }
        }
    );
});

// ==========================================
// HIGH-FIDELITY PARTICLE CANVAS BACKGROUND
// ==========================================
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = container.offsetWidth;
    let height = canvas.height = container.offsetHeight;

    // Handle resizing dynamically
    window.addEventListener('resize', () => {
        width = canvas.width = container.offsetWidth;
        height = canvas.height = container.offsetHeight;
    });

    const particles = [];
    const particleCount = 45;
    const maxDistance = 120; // connection radius

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 2 + 1; // size between 1px and 3px
            this.vx = (Math.random() - 0.5) * 0.45; // slight speed
            this.vy = (Math.random() - 0.5) * 0.45;
            this.colorType = Math.random() > 0.4 ? 'white' : 'green';
            this.opacity = Math.random() * 0.4 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            if (this.colorType === 'white') {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            } else {
                ctx.fillStyle = `rgba(46, 204, 113, ${this.opacity})`; // #2ECC71
            }
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.update();
            p.draw();

            // Connect nearby nodes
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    const lineOpacity = (1 - dist / maxDistance) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    if (p.colorType === 'green' || p2.colorType === 'green') {
                        ctx.strokeStyle = `rgba(46, 204, 113, ${lineOpacity})`;
                    } else {
                        ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
                    }
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}
