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

    // Category-level WhatsApp Link Setup
    const categoryMessage = `Hello Mérokis,

I am interested in requesting product information for the following category:

Category: ${catData.title}

Please share the full product list, availability, export options, and MOQ details.

Thank you.`;

    const encodedCategoryMessage = encodeURIComponent(categoryMessage);
    const categoryWhatsappUrl = `https://wa.me/919892133098?text=${encodedCategoryMessage}`;
    
    document.getElementById('whatsapp-sidebar-link').href = categoryWhatsappUrl;
    document.getElementById('mobile-whatsapp-sticky-link').href = categoryWhatsappUrl;

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

                    // Product-level WhatsApp Link Setup
                    const productMessage = `Hello Mérokis,

I am interested in the following product:

Product: ${product.name}
Category: ${catData.title}
Form: ${product.form}
Packaging: ${product.packaging}

Please share product details, availability, export options, MOQ, and pricing.

Thank you.`;

                    const encodedProductMessage = encodeURIComponent(productMessage);
                    const productWhatsappUrl = `https://wa.me/919892133098?text=${encodedProductMessage}`;

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
                        <div class="product-card-actions" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: auto;">
                            <a href="/contact.html?enquiry=Product Inquiry: ${product.name} (${product.strength})" class="btn-card-enquire" style="font-size: 0.85rem; padding: 10px 4px;">Send Inquiry</a>
                            <a href="${productWhatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-whatsapp" style="font-size: 0.85rem; padding: 10px 4px; display: inline-flex; align-items: center; gap: 4px; justify-content: center;">
                                <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.006-5.04-2.834-6.87-1.827-1.828-4.26-2.833-6.853-2.834-5.437 0-9.861 4.372-9.864 9.73-.001 1.773.477 3.5 1.382 5.022L1.892 21.05l5.245-1.378-.49-.292zM17.391 14.2c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.15-.669.15-.198.298-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                </svg>
                                WhatsApp Now
                            </a>
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
