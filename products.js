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
    // CATALOGUE GRID CARDS STAGGER REVEAL
    // ==========================================
    gsap.fromTo('.catalogue-card', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.catalogue-grid',
                start: 'top 80%'
            }
        }
    );

    // ==========================================
    // CATALOGUE DATABASE (Loaded from products-data.js)
    // ==========================================

    // ==========================================
    // INTERACTIVE MODAL FUNCTIONALITY
    // ==========================================
    const modal = document.getElementById('catalogue-preview-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const backdrop = document.getElementById('modal-close-trigger');
    const modalWrapper = document.querySelector('.modal-wrapper');

    // Modal Dynamic Elements
    const mCover = document.getElementById('modal-cover');
    const mCoverIcon = document.getElementById('modal-cover-icon');
    const mCoverTitle = document.getElementById('modal-cover-title');
    const mTag = document.getElementById('modal-tag');
    const mTitle = document.getElementById('modal-title');
    const mDesc = document.getElementById('modal-desc');
    const mCount = document.getElementById('modal-product-count');
    const mTableRows = document.getElementById('sample-table-rows');
    const mDownloadBtn = document.getElementById('modal-download-btn');

    // Open Modal function
    const openModal = (catKey) => {
        const data = catalogueDB[catKey];
        if (!data) return;

        // Populate modal contents
        mCover.className = `modal-cover-preview ${data.coverClass}`;
        mCoverIcon.textContent = data.icon;
        mCoverTitle.textContent = data.tag;
        mTag.textContent = data.tag;
        mTitle.textContent = data.title;
        mDesc.textContent = data.desc;
        mCount.textContent = data.count;

        // Build sample product rows
        mTableRows.innerHTML = '';
        if (data.samples.length === 0) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td colspan="3" style="text-align: center; color: rgba(255,255,255,0.4); padding: 20px;">
                    Products will be added soon...
                </td>
            `;
            mTableRows.appendChild(tr);
        } else {
            data.samples.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${row.name}</strong></td>
                    <td>${row.strength}</td>
                    <td>${row.form}</td>
                `;
                mTableRows.appendChild(tr);
            });
        }

        // Setup download alert binding
        mDownloadBtn.onclick = (e) => {
            e.preventDefault();
            alert(`Downloading ${data.downloadMsg} spec sheet...`);
        };

        // Open modal with smooth GSAP scaling
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scrolling

        gsap.fromTo(modalWrapper, 
            { scale: 0.94, y: 30, opacity: 0 },
            { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
        );
    };

    // Close Modal function
    const closeModal = () => {
        gsap.to(modalWrapper, {
            scale: 0.94,
            y: 20,
            opacity: 0,
            duration: 0.4,
            ease: 'power3.in',
            onComplete: () => {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Release scroll lock
            }
        });
    };

    // Click Bindings for catalogue items
    document.querySelectorAll('.catalogue-card').forEach(card => {
        const catKey = card.getAttribute('data-catalogue');
        const viewBtn = card.querySelector('.btn-view');
        
        if (viewBtn && catKey) {
            viewBtn.addEventListener('click', () => openModal(catKey));
        }
    });

    // Category navigation is now handled naturally by hrefs to /products/<category-slug>

    // Close Bindings
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

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
