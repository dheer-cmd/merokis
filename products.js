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
    // SMART SEARCH BAR FOR CATEGORIES
    // ==========================================
    const searchInput = document.getElementById('category-search-input');
    const categoriesGrid = document.querySelector('.categories-grid');
    const categoryCards = document.querySelectorAll('.category-card');

    if (searchInput && categoriesGrid) {
        // Create and insert empty state element
        const noResultsDiv = document.createElement('div');
        noResultsDiv.className = 'no-results-container';
        noResultsDiv.style.display = 'none';
        noResultsDiv.innerHTML = `
            <div class="no-results-icon">🔍</div>
            <h3>No product categories found</h3>
            <p>Try checking your spelling or search for another division.</p>
        `;
        categoriesGrid.parentNode.insertBefore(noResultsDiv, categoriesGrid.nextSibling);

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            let matchCount = 0;

            categoryCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();

                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = '';
                    card.style.opacity = '1';
                    matchCount++;
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });

            if (matchCount === 0) {
                categoriesGrid.style.display = 'none';
                noResultsDiv.style.display = 'flex';
            } else {
                categoriesGrid.style.display = 'grid';
                noResultsDiv.style.display = 'none';
            }
        });
    }
});
