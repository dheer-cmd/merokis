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
        'anti-viral-drugs': {
            title: 'Anti-Viral Portfolio',
            tag: 'Anti-Viral',
            desc: 'Advanced antiviral formulations targeting viral replication pathways and supporting immune defence.',
            icon: '🛡️',
            coverClass: 'grad-teal',
            count: '28 Items',
            downloadMsg: 'Anti-Viral Drugs Specification Booklet',
            samples: [
                { name: 'Tenofovir Alafenamide', strength: '25mg', dosage: 'Tablet' },
                { name: 'Sofosbuvir Tablets', strength: '400mg', dosage: 'Tablet' },
                { name: 'Remdesivir Injection', strength: '100mg', dosage: 'Vial (IV)' },
                { name: 'Entecavir Tablets USP', strength: '0.5mg', dosage: 'Tablet' }
            ]
        },
        'anti-tb-drugs': {
            title: 'Anti-TB Regimen Guide',
            tag: 'Anti-TB',
            desc: 'First-line and second-line anti-tuberculosis regimens for comprehensive mycobacterial treatment.',
            icon: '🫁',
            coverClass: 'grad-orange',
            count: '18 Items',
            downloadMsg: 'Anti-TB Drugs Specification Booklet',
            samples: [
                { name: 'Rifampicin Capsules USP', strength: '300mg', dosage: 'Capsule' },
                { name: 'Isoniazid Tablets', strength: '100mg', dosage: 'Tablet' },
                { name: 'Pyrazinamide Tablets', strength: '500mg', dosage: 'Tablet' },
                { name: 'Ethambutol Hydrochloride', strength: '400mg', dosage: 'Tablet' }
            ]
        },
        'oncology-drugs': {
            title: 'Oncology Therapeutics',
            tag: 'Oncology',
            desc: 'High-potency cytotoxic therapies, targeted monoclonal antibodies, and supportive care oncology drugs.',
            icon: '🎗️',
            coverClass: 'grad-purple',
            count: '32 Items',
            downloadMsg: 'Oncology Drugs Specification Booklet',
            samples: [
                { name: 'Doxorubicin Injection', strength: '50mg', dosage: 'Vial (IV)' },
                { name: 'Paclitaxel Infusion', strength: '100mg', dosage: 'Vial (IV)' },
                { name: 'Imatinib Mesylate Tablets', strength: '400mg', dosage: 'Tablet' },
                { name: 'Gemcitabine Injection', strength: '1g', dosage: 'Vial (IV)' }
            ]
        },
        'antibiotics': {
            title: 'Antibiotic Catalogue',
            tag: 'Antibiotics',
            desc: 'Broad-spectrum and narrow-spectrum antibacterial formulations for systemic infection control.',
            icon: '🧪',
            coverClass: 'grad-blue',
            count: '55 Items',
            downloadMsg: 'Antibiotics Specification Booklet',
            samples: [
                { name: 'Amoxicillin & Clavulanate', strength: '1.2g', dosage: 'Vial (IV)' },
                { name: 'Azithromycin Tablets USP', strength: '500mg', dosage: 'Tablet' },
                { name: 'Ceftriaxone Injection USP', strength: '1g', dosage: 'Vial (IV)' },
                { name: 'Ciprofloxacin Tablets', strength: '500mg', dosage: 'Tablet' }
            ]
        },
        'cardiovascular-drugs': {
            title: 'Cardiovascular Care',
            tag: 'Cardiovascular',
            desc: 'Antihypertensives, lipid-lowering agents, and anti-arrhythmics managing cardiac health.',
            icon: '❤️',
            coverClass: 'grad-blue-dark',
            count: '45 Items',
            downloadMsg: 'Cardiovascular Drugs Specification Booklet',
            samples: [
                { name: 'Atorvastatin Tablets USP', strength: '20mg', dosage: 'Tablet' },
                { name: 'Amlodipine Tablets', strength: '5mg', dosage: 'Tablet' },
                { name: 'Clopidogrel Bisulfate', strength: '75mg', dosage: 'Tablet' },
                { name: 'Losartan Potassium', strength: '50mg', dosage: 'Tablet' }
            ]
        },
        'anti-diabetic-drugs': {
            title: 'Anti-Diabetic Portfolio',
            tag: 'Anti-Diabetic',
            desc: 'Oral hypoglycemics, insulin sensitizers, and advanced glycemic control therapies.',
            icon: '🩸',
            coverClass: 'grad-green',
            count: '40 Items',
            downloadMsg: 'Anti-Diabetic Drugs Specification Booklet',
            samples: [
                { name: 'Metformin Hydrochloride ER', strength: '500mg', dosage: 'Tablet' },
                { name: 'Glimepiride Tablets', strength: '2mg', dosage: 'Tablet' },
                { name: 'Sitagliptin Phosphate', strength: '100mg', dosage: 'Tablet' },
                { name: 'Pioglitazone Tablets', strength: '15mg', dosage: 'Tablet' }
            ]
        },
        'analgesics-antipyretics': {
            title: 'Analgesics & Antipyretics',
            tag: 'Analgesics',
            desc: 'Non-steroidal anti-inflammatory drugs (NSAIDs) and antipyretics for effective pain and fever management.',
            icon: '⚡',
            coverClass: 'grad-teal',
            count: '25 Items',
            downloadMsg: 'Analgesics & Antipyretics Specification Booklet',
            samples: [
                { name: 'Paracetamol Tablets IP', strength: '650mg', dosage: 'Tablet' },
                { name: 'Ibuprofen Tablets USP', strength: '400mg', dosage: 'Tablet' },
                { name: 'Diclofenac Sodium SR', strength: '100mg', dosage: 'Tablet' },
                { name: 'Tramadol Hydrochloride', strength: '50mg', dosage: 'Capsule' }
            ]
        },
        'erectile-dysfunction-drugs': {
            title: 'Erectile Dysfunction Care',
            tag: 'Erectile Dysfunction',
            desc: 'Selective phosphodiesterase type 5 (PDE5) inhibitors for the treatment of erectile dysfunction.',
            icon: '💪',
            coverClass: 'grad-gold',
            count: '12 Items',
            downloadMsg: 'Erectile Dysfunction Drugs Specification Booklet',
            samples: [
                { name: 'Sildenafil Citrate Tablets', strength: '100mg', dosage: 'Tablet' },
                { name: 'Tadalafil Tablets USP', strength: '20mg', dosage: 'Tablet' },
                { name: 'Vardenafil Tablets', strength: '20mg', dosage: 'Tablet' },
                { name: 'Avanafil Tablets', strength: '100mg', dosage: 'Tablet' }
            ]
        },
        'gastrointestinal-drugs': {
            title: 'Gastrointestinal Care',
            tag: 'Gastrointestinal',
            desc: 'Proton pump inhibitors, antacids, and anti-emetics for comprehensive gastrointestinal care.',
            icon: '🍽️',
            coverClass: 'grad-orange',
            count: '30 Items',
            downloadMsg: 'Gastrointestinal Drugs Specification Booklet',
            samples: [
                { name: 'Omeprazole Capsules', strength: '20mg', dosage: 'Capsule' },
                { name: 'Pantoprazole Sodium', strength: '40mg', dosage: 'Tablet' },
                { name: 'Domperidone Tablets', strength: '10mg', dosage: 'Tablet' },
                { name: 'Ondansetron Injection', strength: '2mg/ml', dosage: 'Ampoule' }
            ]
        },
        'anti-asthma-respiratory-drugs': {
            title: 'Respiratory Solutions',
            tag: 'Respiratory',
            desc: 'Bronchodilators, inhaled corticosteroids, and anti-asthmatic agents supporting respiratory function.',
            icon: '💨',
            coverClass: 'grad-blue',
            count: '22 Items',
            downloadMsg: 'Anti-Asthma & Respiratory Drugs Specification Booklet',
            samples: [
                { name: 'Salbutamol Inhaler', strength: '100mcg', dosage: 'Inhaler' },
                { name: 'Montelukast Sodium', strength: '10mg', dosage: 'Tablet' },
                { name: 'Fluticasone Propionate', strength: '250mcg', dosage: 'Rotacaps' },
                { name: 'Budesonide Respules', strength: '0.5mg/2ml', dosage: 'Ampoule' }
            ]
        },
        'dermatology-drugs': {
            title: 'Dermatology Catalogue',
            tag: 'Dermatology',
            desc: 'Topical corticosteroids, antifungal creams, and specialized formulations for advanced skin care.',
            icon: '🧴',
            coverClass: 'grad-purple',
            count: '35 Items',
            downloadMsg: 'Dermatology Drugs Specification Booklet',
            samples: [
                { name: 'Clobetasol Propionate Cream', strength: '0.05% w/w', dosage: 'Tube' },
                { name: 'Mupirocin Ointment USP', strength: '2% w/w', dosage: 'Tube' },
                { name: 'Adapalene Gel', strength: '0.1% w/w', dosage: 'Tube' },
                { name: 'Hydrocortisone Cream', strength: '1% w/w', dosage: 'Tube' }
            ]
        },
        'anti-fungal-drugs': {
            title: 'Anti-Fungal Portfolio',
            tag: 'Anti-Fungal',
            desc: 'Oral and topical antimycotics designed for effective treatment of fungal and yeast infections.',
            icon: '🍄',
            coverClass: 'grad-green-dark',
            count: '20 Items',
            downloadMsg: 'Anti-Fungal Drugs Specification Booklet',
            samples: [
                { name: 'Fluconazole Capsules', strength: '150mg', dosage: 'Capsule' },
                { name: 'Itraconazole Capsules', strength: '100mg', dosage: 'Capsule' },
                { name: 'Terbinafine Tablets', strength: '250mg', dosage: 'Tablet' },
                { name: 'Ketoconazole Cream USP', strength: '2% w/w', dosage: 'Tube' }
            ]
        },
        'herbal-ayurvedic': {
            title: 'Herbal & Ayurvedic',
            tag: 'Herbal & Ayurvedic',
            desc: 'Standardized herbal extracts and traditional Ayurvedic formulations for holistic wellness.',
            icon: '🌿',
            coverClass: 'grad-green',
            count: '60 Items',
            downloadMsg: 'Herbal & Ayurvedic Specification Booklet',
            samples: [
                { name: 'Ashwagandha Extract Caps', strength: '500mg', dosage: 'Capsule' },
                { name: 'Curcumin Tablets', strength: '95%', dosage: 'Tablet' },
                { name: 'Triphala Capsules', strength: '500mg', dosage: 'Capsule' },
                { name: 'Herbal Cough Syrup', strength: 'Standard', dosage: 'Bottle' }
            ]
        },
        'general-medicines': {
            title: 'General Medicine Spec',
            tag: 'General Medicine',
            desc: 'Common therapeutic agents, multi-vitamins, and essential formulations for daily medical needs.',
            icon: '💊',
            coverClass: 'grad-blue-dark',
            count: '120 Items',
            downloadMsg: 'General Medicines Specification Booklet',
            samples: [
                { name: 'Multivitamin Capsules', strength: 'Premium', dosage: 'Capsule' },
                { name: 'Vitamin D3 Chewable', strength: '60000 IU', dosage: 'Tablet' },
                { name: 'Calcium & Vit D3 Tablets', strength: '500mg', dosage: 'Tablet' },
                { name: 'Cough & Cold Syrups', strength: 'Various', dosage: 'Bottle' }
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

    // Click Bindings for category cards (for premium interactivity)
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const href = card.getAttribute('href');
            if (href) {
                const catKey = href.replace('/products/', '');
                openModal(catKey);
            }
        });
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
