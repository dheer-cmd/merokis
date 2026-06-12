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
    // CATALOGUE DETAILED LIBRARY DATABASE
    // ==========================================
    const catalogueDB = {
        'critical-care': {
            title: 'Critical Care Catalogue',
            tag: 'Critical Care',
            desc: 'Advanced critical care pharmaceutical solutions including ICU injectables, cardiovascular agents, and emergency therapeutics.',
            icon: '🧪',
            coverClass: 'grad-blue',
            count: '42 Items',
            downloadMsg: 'Critical Care Specification Booklet',
            samples: [
                { name: 'Meropenem Injection USP', strength: '1g', dosage: 'Vial (IV)' },
                { name: 'Piperacillin & Tazobactam', strength: '4.5g', dosage: 'Vial (IV)' },
                { name: 'Artesunate Injection', strength: '60mg', dosage: 'Vial (IV/IM)' },
                { name: 'Adrenaline Bitartrate', strength: '1mg/ml', dosage: 'Ampoule (IV)' }
            ]
        },
        'anti-viral': {
            title: 'Anti Viral Portfolio',
            tag: 'Anti-Viral',
            desc: 'Comprehensive antiviral treatment booklets with formulation metrics, advanced nucleoside analogues, and drug interaction parameters.',
            icon: '🛡️',
            coverClass: 'grad-teal',
            count: '28 Items',
            downloadMsg: 'Anti Viral Portfolio Spec Booklet',
            samples: [
                { name: 'Sofosbuvir Tablets', strength: '400mg', dosage: 'Tablet' },
                { name: 'Tenofovir Alafenamide', strength: '25mg', dosage: 'Tablet' },
                { name: 'Remdesivir Injection', strength: '100mg', dosage: 'Vial (IV)' },
                { name: 'Entecavir Tablets USP', strength: '0.5mg', dosage: 'Tablet' }
            ]
        },
        'dermatology': {
            title: 'Dermatology Range',
            tag: 'Dermatology',
            desc: 'Premium skincare, dermatological formulations, topical corticosteroids, and antifungal treatment catalogues.',
            icon: '🧴',
            coverClass: 'grad-purple',
            count: '35 Items',
            downloadMsg: 'Dermatology Specification Booklet',
            samples: [
                { name: 'Clobetasol Propionate Cream', strength: '0.05% w/w', dosage: 'Tube (Topical)' },
                { name: 'Ketoconazole Cream USP', strength: '2% w/w', dosage: 'Tube (Topical)' },
                { name: 'Mupirocin Ointment USP', strength: '2% w/w', dosage: 'Tube (Topical)' },
                { name: 'Adapalene Gel', strength: '0.1% w/w', dosage: 'Tube (Topical)' }
            ]
        },
        'veterinary': {
            title: 'Veterinary Solutions',
            tag: 'Veterinary',
            desc: 'Animal healthcare therapeutics, nutritional feed supplements, livestock antibiotics, and poultry wellness formulations.',
            icon: '🐾',
            coverClass: 'grad-orange',
            count: '50 Items',
            downloadMsg: 'Veterinary Solutions Booklet',
            samples: [
                { name: 'Ivermectin Oral Solution', strength: '0.8% w/v', dosage: 'Oral Liquid' },
                { name: 'Oxy-Tetracycline Injection', strength: '100mg/ml', dosage: 'Vial (IM)' },
                { name: 'Albendazole Oral Suspension', strength: '2.5% w/v', dosage: 'Suspension' },
                { name: 'Calcium & Vit D3 Feed Premix', strength: 'Premium Blend', dosage: 'Powder Feed' }
            ]
        },
        'general-med': {
            title: 'General Medicine Spec',
            tag: 'General Medicine',
            desc: 'Complete therapeutic pharmaceutical guide containing daily formulations, anti-diabetics, analgesics, and syrups.',
            icon: '💊',
            coverClass: 'grad-blue-dark',
            count: '120 Items',
            downloadMsg: 'General Medicine Catalog Booklet',
            samples: [
                { name: 'Paracetamol Tablets IP', strength: '650mg', dosage: 'Tablet' },
                { name: 'Amoxicillin Trihydrate Caps', strength: '500mg', dosage: 'Capsule' },
                { name: 'Metformin Hydrochloride ER', strength: '500mg', dosage: 'Tablet' },
                { name: 'Multivitamin & Mineral Syrups', strength: 'Standard', dosage: 'Liquid Bottle' }
            ]
        },
        'nutra': {
            title: 'Nutraceutical Portfolio',
            tag: 'Nutraceuticals',
            desc: 'Preventive wellness supplements, specialized vitamin blends, bone-joint wellness tables, and antioxidants.',
            icon: '🥗',
            coverClass: 'grad-green',
            count: '45 Items',
            downloadMsg: 'Nutraceuticals Specification Booklet',
            samples: [
                { name: 'Omega-3 Fish Oil Capsules', strength: '1000mg', dosage: 'Softgel Capsule' },
                { name: 'Glucosamine & Chondroitin', strength: '750/600mg', dosage: 'Tablet' },
                { name: 'Vitamin D3 Chewable Tabs', strength: '60000 IU', dosage: 'Chewable Tablet' },
                { name: 'Coenzyme Q10 Softgels', strength: '100mg', dosage: 'Softgel' }
            ]
        },
        'herbal': {
            title: 'Herbal & Ayurvedic',
            tag: 'Herbal & Ayurvedic',
            desc: 'Traditional natural therapeutic formulations, herbal extract capsules, cough remedies, and organic wellness syrups.',
            icon: '🌿',
            coverClass: 'grad-green-dark',
            count: '60 Items',
            downloadMsg: 'Herbal & Ayurvedic Specification Booklet',
            samples: [
                { name: 'Ashwagandha Extract Caps', strength: '500mg', dosage: 'Capsule' },
                { name: 'Herbal Non-Drowsy Cough Syrup', strength: 'Standard', dosage: 'Liquid Bottle' },
                { name: 'Turmeric Curcumin Tablets', strength: '95% Curcumin', dosage: 'Tablet' },
                { name: 'Pure Tulsi Extracts Drops', strength: 'Concentrated', dosage: 'Liquid Drops' }
            ]
        },
        'export-range': {
            title: 'Export Product Range',
            tag: 'Export Range',
            desc: 'Complete global directory detailing country-specific availability, regulatory filings, CTD dossiers, and drug classifications.',
            icon: '🌐',
            coverClass: 'grad-gold',
            count: '85 Items',
            downloadMsg: 'Export Product Range Spec Booklet',
            samples: [
                { name: 'CTD Dossier Formulations', strength: 'Various', dosage: 'Technical Files' },
                { name: 'Cefotaxime Sodium Injection', strength: '1g', dosage: 'Vial (IV/IM)' },
                { name: 'Atorvastatin Calcium Tabs', strength: '20mg', dosage: 'Tablet' },
                { name: 'Esomeprazole Sodium Inj', strength: '40mg', dosage: 'Vial (IV)' }
            ]
        }
    };

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
        data.samples.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${row.name}</strong></td>
                <td>${row.strength}</td>
                <td>${row.dosage}</td>
            `;
            mTableRows.appendChild(tr);
        });

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
