/* ==========================================
   MÉROKIS DYNAMIC PRODUCTS FILTERING LOGIC
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Parse Category from URL pathname
    const path = window.location.pathname;
    const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
    const catKey = cleanPath.substring(cleanPath.lastIndexOf('/') + 1);

    const catData = catalogueDB[catKey];
    if (!catData) {
        // Fallback / Redirect if category is invalid
        console.error(`Category "${catKey}" not found in database. Redirecting...`);
        window.location.href = '/products.html';
        return;
    }

    // 2. Initialize Page Content with Category Data
    document.title = `${catData.tag} Portfolio | Mérokis Pharmaceutical Distribution`;
    document.getElementById('category-badge').textContent = catData.icon;
    document.getElementById('category-title').textContent = catData.title;
    document.getElementById('category-desc').textContent = catData.desc;

    // 3. Define Data-driven Filter Options (Configurable/Extensible)
    const formsList = ['Tablets', 'Capsules', 'Injectables', 'Syrups', 'Topicals/Creams'];
    const packagingsList = ['10×10 Strips', '10×15 Strips', 'Bottles', 'IV Bags'];

    // 4. Generate Filter DOM Elements (Desktop & Mobile)
    const renderFilterCheckboxes = () => {
        const formDesktop = document.getElementById('desktop-filter-form');
        const formMobile = document.getElementById('mobile-filter-form');
        const pkgDesktop = document.getElementById('desktop-filter-packaging');
        const mobilePkg = document.getElementById('mobile-filter-packaging');

        // Render Forms
        formsList.forEach(form => {
            const idVal = form.toLowerCase().replace('/', '-');
            
            // Desktop Checkbox
            const desktopLabel = document.createElement('label');
            desktopLabel.className = 'filter-item';
            desktopLabel.innerHTML = `
                <input type="checkbox" name="form" value="${form.toLowerCase()}" id="desk-form-${idVal}">
                <span>${form}</span>
            `;
            formDesktop.appendChild(desktopLabel);

            // Mobile Checkbox
            const mobileLabel = document.createElement('label');
            mobileLabel.className = 'filter-item';
            mobileLabel.innerHTML = `
                <input type="checkbox" name="form" value="${form.toLowerCase()}" id="mob-form-${idVal}">
                <span>${form}</span>
            `;
            formMobile.appendChild(mobileLabel);
        });

        // Render Packagings
        packagingsList.forEach(pkg => {
            const idVal = pkg.toLowerCase().replace('×', '-').replace(' ', '-');

            // Desktop Checkbox
            const desktopLabel = document.createElement('label');
            desktopLabel.className = 'filter-item';
            desktopLabel.innerHTML = `
                <input type="checkbox" name="packaging" value="${pkg.toLowerCase()}" id="desk-pkg-${idVal}">
                <span>${pkg}</span>
            `;
            pkgDesktop.appendChild(desktopLabel);

            // Mobile Checkbox
            const mobileLabel = document.createElement('label');
            mobileLabel.className = 'filter-item';
            mobileLabel.innerHTML = `
                <input type="checkbox" name="packaging" value="${pkg.toLowerCase()}" id="mob-pkg-${idVal}">
                <span>${pkg}</span>
            `;
            mobilePkg.appendChild(mobileLabel);
        });
    };

    renderFilterCheckboxes();

    // 5. Query Selectors
    const productsGrid = document.getElementById('products-grid');
    const skeletonGrid = document.getElementById('skeleton-grid');
    const emptyState = document.getElementById('empty-state');
    const productCountText = document.getElementById('product-count');
    const chipsContainer = document.getElementById('active-chips-container');
    const clearAllBtn = document.getElementById('clear-all-btn');

    // Mobile specific selectors
    const mobileDrawer = document.getElementById('mobile-filter-drawer');
    const mobileOpenBtn = document.getElementById('mobile-filter-open-btn');
    const mobileCloseBtn = document.getElementById('mobile-filter-close-btn');
    const mobileApplyBtn = document.getElementById('mobile-filter-apply-btn');
    const mobileActiveBadge = document.getElementById('mobile-active-count');

    // 6. State Management
    let selectedFilters = {
        forms: [],
        packagings: []
    };

    // Synchronize Desktop and Mobile checkboxes
    const syncCheckboxStates = (name, value, isChecked) => {
        const selector = `input[name="${name}"][value="${value}"]`;
        document.querySelectorAll(selector).forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    };

    // Parse URL params on load / history change
    const syncStateFromURL = () => {
        const params = new URLSearchParams(window.location.search);
        
        const formParam = params.get('form');
        const pkgParam = params.get('packaging');

        selectedFilters.forms = formParam ? formParam.split(',') : [];
        selectedFilters.packagings = pkgParam ? pkgParam.split(',') : [];

        // Uncheck all first
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

        // Check active ones
        selectedFilters.forms.forEach(val => syncCheckboxStates('form', val, true));
        selectedFilters.packagings.forEach(val => syncCheckboxStates('packaging', val, true));
    };

    // Update URL Params based on current state
    const updateURLParams = () => {
        const params = new URLSearchParams();
        
        if (selectedFilters.forms.length > 0) {
            params.set('form', selectedFilters.forms.join(','));
        }
        if (selectedFilters.packagings.length > 0) {
            params.set('packaging', selectedFilters.packagings.join(','));
        }

        const newSearch = params.toString() ? '?' + params.toString() : '';
        const newURL = window.location.pathname + newSearch;
        
        // Push state to browser history
        if (window.location.search !== newSearch) {
            history.pushState(null, '', newURL);
        }
    };

    // Render active filter chips
    const renderActiveChips = () => {
        chipsContainer.innerHTML = '';
        const totalFiltersCount = selectedFilters.forms.length + selectedFilters.packagings.length;

        // Render chips for Forms
        selectedFilters.forms.forEach(val => {
            // Find readable label
            const readable = formsList.find(f => f.toLowerCase() === val) || val;
            const chip = document.createElement('div');
            chip.className = 'filter-chip';
            chip.innerHTML = `${readable} <span>&times;</span>`;
            chip.addEventListener('click', () => removeFilter('form', val));
            chipsContainer.appendChild(chip);
        });

        // Render chips for Packaging
        selectedFilters.packagings.forEach(val => {
            const readable = packagingsList.find(p => p.toLowerCase() === val) || val;
            const chip = document.createElement('div');
            chip.className = 'filter-chip';
            chip.innerHTML = `${readable} <span>&times;</span>`;
            chip.addEventListener('click', () => removeFilter('packaging', val));
            chipsContainer.appendChild(chip);
        });

        // Toggle clear all button
        if (totalFiltersCount > 0) {
            clearAllBtn.style.display = 'inline-block';
            mobileActiveBadge.textContent = totalFiltersCount;
            mobileActiveBadge.style.display = 'grid';
        } else {
            clearAllBtn.style.display = 'none';
            mobileActiveBadge.style.display = 'none';
        }
    };

    // Remove single filter chip
    const removeFilter = (name, value) => {
        if (name === 'form') {
            selectedFilters.forms = selectedFilters.forms.filter(val => val !== value);
        } else {
            selectedFilters.packagings = selectedFilters.packagings.filter(val => val !== value);
        }
        syncCheckboxStates(name, value, false);
        applyFilters();
    };

    // Global Clear All function (wired to window so it can be called in inline onclicks)
    window.clearAllFilters = () => {
        selectedFilters.forms = [];
        selectedFilters.packagings = [];
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        applyFilters();
    };

    // 7. Core Filtering & Render Execution
    const applyFilters = (shouldUpdateURL = true) => {
        if (shouldUpdateURL) {
            updateURLParams();
        }
        renderActiveChips();

        // Show Skeleton Loader (visual premium transition)
        productsGrid.style.display = 'none';
        emptyState.style.display = 'none';
        skeletonGrid.style.display = 'grid';

        // Filter operations against database
        const filteredProducts = catData.samples.filter(product => {
            const matchesForm = selectedFilters.forms.length === 0 || 
                               selectedFilters.forms.includes(product.form.toLowerCase());
            
            const matchesPkg = selectedFilters.packagings.length === 0 || 
                              selectedFilters.packagings.includes(product.packaging.toLowerCase());

            return matchesForm && matchesPkg;
        });

        // Simulate short loading delay (300ms) for visual feedback
        setTimeout(() => {
            skeletonGrid.style.display = 'none';
            productCountText.textContent = `Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? 'Product' : 'Products'}`;

            if (filteredProducts.length === 0) {
                productsGrid.innerHTML = '';
                emptyState.style.display = 'block';
            } else {
                emptyState.style.display = 'none';
                productsGrid.innerHTML = '';
                
                filteredProducts.forEach(product => {
                    const card = document.createElement('div');
                    card.className = 'product-card';
                    card.innerHTML = `
                        <div>
                            <div class="product-badges">
                                <span class="product-badge badge-form">${product.form}</span>
                                <span class="product-badge badge-packaging">${product.packaging}</span>
                            </div>
                            <h3>${product.name}</h3>
                            <span class="product-strength">${product.strength}</span>
                            <p>${product.desc}</p>
                        </div>
                        <div>
                            <a href="/contact.html?enquiry=Product Inquiry: ${product.name} (${product.strength})" class="btn-card-enquire">Enquire Now</a>
                        </div>
                    `;
                    productsGrid.appendChild(card);
                });

                productsGrid.style.display = 'grid';

                // GSAP Stagger Entrance Animations
                gsap.fromTo('.product-card', 
                    { opacity: 0, y: 30 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.6, 
                        stagger: 0.05, 
                        ease: 'power3.out' 
                    }
                );
            }
        }, 300);
    };

    // 8. Event Bindings
    // Handle checkbox change events
    const bindCheckboxes = () => {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const name = e.target.name;
                const value = e.target.value;
                const isChecked = e.target.checked;

                // Sync desktop/mobile counterpart
                syncCheckboxStates(name, value, isChecked);

                // Update internal states
                if (name === 'form') {
                    if (isChecked) {
                        if (!selectedFilters.forms.includes(value)) selectedFilters.forms.push(value);
                    } else {
                        selectedFilters.forms = selectedFilters.forms.filter(v => v !== value);
                    }
                } else {
                    if (isChecked) {
                        if (!selectedFilters.packagings.includes(value)) selectedFilters.packagings.push(value);
                    } else {
                        selectedFilters.packagings = selectedFilters.packagings.filter(v => v !== value);
                    }
                }

                // If not on mobile, apply filters instantly
                if (window.innerWidth > 1024) {
                    applyFilters();
                }
            });
        });
    };

    bindCheckboxes();

    // 9. Mobile Drawer Actions
    const openMobileDrawer = () => {
        mobileDrawer.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    };

    const closeMobileDrawer = () => {
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
    };

    mobileOpenBtn.addEventListener('click', openMobileDrawer);
    mobileCloseBtn.addEventListener('click', closeMobileDrawer);
    
    // Clicking backdrop closes drawer
    mobileDrawer.addEventListener('click', (e) => {
        if (e.target === mobileDrawer) {
            closeMobileDrawer();
        }
    });

    mobileApplyBtn.addEventListener('click', () => {
        applyFilters();
        closeMobileDrawer();
    });

    // 10. Listen to Back / Forward browser navigation
    window.addEventListener('popstate', () => {
        syncStateFromURL();
        applyFilters(false); // Don't pushState again
    });

    // 11. Initial Run
    syncStateFromURL();
    applyFilters(false);
});
