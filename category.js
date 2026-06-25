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

    // Dynamic Modal and Style Injection for Oncology Drugs
    if (catKey === 'oncology-drugs') {
        const styles = `
            .onc-specs {
                margin: 15px 0;
                display: flex;
                flex-direction: column;
                gap: 8px;
                border-top: 1px solid rgba(0, 58, 153, 0.15);
                border-bottom: 1px solid rgba(0, 58, 153, 0.15);
                padding: 10px 0;
            }
            .onc-spec-row {
                display: flex;
                justify-content: space-between;
                font-size: 0.88rem;
            }
            .onc-spec-label {
                font-weight: 500;
            }
            .onc-spec-value {
                font-weight: 600;
                text-align: right;
            }
            /* Card spec colors */
            .product-card .onc-spec-label {
                color: #4b5563;
            }
            .product-card .onc-spec-value {
                color: #0b132b;
            }
            /* Modal spec colors */
            .onc-details-modal .onc-spec-label {
                color: rgba(255,255,255,0.6);
            }
            .onc-details-modal .onc-spec-value {
                color: #ffffff;
            }
            .btn-card-details {
                border: 1px solid #C89B2B;
                background: transparent;
                color: #C89B2B;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 600;
            }
            .btn-card-details:hover {
                background-color: #C89B2B !important;
                color: #000000 !important;
            }

            /* Custom Details Modal */
            .onc-details-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1100;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.4s ease;
            }
            .onc-details-modal.active {
                opacity: 1;
                pointer-events: auto;
            }
            .onc-details-backdrop {
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.75);
                backdrop-filter: blur(8px);
            }
            .onc-details-wrapper {
                position: relative;
                width: 90%;
                max-width: 550px;
                background: #0a192f;
                border: 1px solid rgba(200, 155, 43, 0.3);
                border-radius: 12px;
                padding: 30px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
                z-index: 1102;
                transform: translateY(20px);
                transition: transform 0.4s ease;
            }
            .onc-details-modal.active .onc-details-wrapper {
                transform: translateY(0);
            }
            .onc-details-close {
                position: absolute;
                top: 20px;
                right: 20px;
                background: transparent;
                border: none;
                color: rgba(255, 255, 255, 0.6);
                font-size: 1.5rem;
                cursor: pointer;
                transition: color 0.3s;
            }
            .onc-details-close:hover {
                color: #C89B2B;
            }
            .onc-details-title {
                font-family: 'Outfit', sans-serif;
                color: #ffffff;
                font-size: 1.6rem;
                margin-top: 0;
                margin-bottom: 20px;
                border-bottom: 2px solid #C89B2B;
                padding-bottom: 10px;
            }
            .onc-details-info {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-bottom: 25px;
            }
        `;
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        const modalHtml = `
            <div class="onc-details-modal" id="onc-product-details-modal">
                <div class="onc-details-backdrop" onclick="closeProductDetailsModal()"></div>
                <div class="onc-details-wrapper">
                    <button class="onc-details-close" onclick="closeProductDetailsModal()">&times;</button>
                    <h3 class="onc-details-title" id="onc-modal-title">Product Details</h3>
                    
                    <div class="onc-details-info">
                        <div class="onc-spec-row" style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
                            <span class="onc-spec-label">Dosage Form</span>
                            <span class="onc-spec-value" id="onc-modal-form">-</span>
                        </div>
                        <div class="onc-spec-row" style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
                            <span class="onc-spec-label">Available Strengths</span>
                            <span class="onc-spec-value" id="onc-modal-strength">-</span>
                        </div>
                        <div class="onc-spec-row" style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
                            <span class="onc-spec-label">Available Pack Sizes</span>
                            <span class="onc-spec-value" id="onc-modal-pack">-</span>
                        </div>
                        <div style="margin-top: 10px;">
                            <span class="onc-spec-label" style="display: block; margin-bottom: 6px;">Description & Indications</span>
                            <p id="onc-modal-desc" style="font-size: 0.9rem; line-height: 1.5; color: rgba(255,255,255,0.8); margin: 0; text-align: left;"></p>
                        </div>
                    </div>
                    
                    <div class="product-card-actions" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <a href="#" id="onc-modal-enquire-btn" class="btn-card-enquire" style="font-size: 0.9rem; padding: 12px 6px; text-align: center;">Send Inquiry</a>
                        <a href="#" id="onc-modal-whatsapp-btn" target="_blank" rel="noopener noreferrer" class="btn-card-whatsapp" style="font-size: 0.9rem; padding: 12px 6px; display: inline-flex; align-items: center; gap: 6px; justify-content: center; text-decoration: none;">
                            <svg style="width: 16px; height: 16px; fill: currentColor;" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.006-5.04-2.834-6.87-1.827-1.828-4.26-2.833-6.853-2.834-5.437 0-9.861 4.372-9.864 9.73-.001 1.773.477 3.5 1.382 5.022L1.892 21.05l5.245-1.378-.49-.292zM17.391 14.2c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.15-.669.15-.198.298-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            </svg>
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </div>
        `;
        const div = document.createElement('div');
        div.innerHTML = modalHtml;
        document.body.appendChild(div.firstElementChild);

        window.openProductDetailsModal = (productName) => {
            const product = catData.samples.find(p => p.name === productName);
            if (!product) return;

            const productMessage = `Hello Mérokis,\n\nI am interested in the following product:\n\nProduct: ${product.name}\nCategory: ${catData.title}\nForm: ${product.form}\nPackaging: ${product.packaging}\n\nPlease share product details, availability, export options, MOQ, and pricing.\n\nThank you.`;
            const encodedProductMessage = encodeURIComponent(productMessage);
            const productWhatsappUrl = `https://wa.me/919892133098?text=${encodedProductMessage}`;

            document.getElementById('onc-modal-title').textContent = product.name;
            document.getElementById('onc-modal-form').textContent = product.form;
            document.getElementById('onc-modal-strength').textContent = product.strength;
            document.getElementById('onc-modal-pack').textContent = product.packaging;
            document.getElementById('onc-modal-desc').textContent = product.desc;
            
            document.getElementById('onc-modal-enquire-btn').href = `/contact.html?enquiry=Product Inquiry: ${product.name} (${product.strength})`;
            document.getElementById('onc-modal-whatsapp-btn').href = productWhatsappUrl;

            const oncModal = document.getElementById('onc-product-details-modal');
            oncModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        window.closeProductDetailsModal = () => {
            const oncModal = document.getElementById('onc-product-details-modal');
            if (oncModal) {
                oncModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        };
    }

    // 3. Define Data-driven Filter Options (Configurable/Extensible)
    let formsList = ['Tablets', 'Capsules', 'Injectables', 'Syrups', 'Topicals/Creams'];
    let packagingsList = ['10×10 Strips', '10×15 Strips', 'Bottles', 'IV Bags'];

    if (catKey === 'oncology-drugs') {
        formsList = ['Tablet', 'Capsule', 'Injection'];
        packagingsList = ['1×120', '1×60', '10×10', '3×10', '1×30', '25×1×2 ml', '20×1×40 mg', '25×1×125 mg', '16×1×500 mg', '10×1×1 g', '12×1×4 mg'];
    }

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
                              selectedFilters.packagings.some(filterPkg => {
                                  const normalizedFilter = filterPkg.toLowerCase().replace(/x/g, '×');
                                  const productPkgs = product.packaging.toLowerCase().replace(/x/g, '×').split(/[,/]/).map(p => p.trim());
                                  return productPkgs.includes(normalizedFilter);
                              });

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
                    const productMessage = `Hello Mérokis,\n\nI am interested in the following product:\n\nProduct: ${product.name}\nCategory: ${catData.title}\nForm: ${product.form}\nPackaging: ${product.packaging}\n\nPlease share product details, availability, export options, MOQ, and pricing.\n\nThank you.`;

                    const encodedProductMessage = encodeURIComponent(productMessage);
                    const productWhatsappUrl = `https://wa.me/919892133098?text=${encodedProductMessage}`;

                    if (catKey === 'oncology-drugs') {
                        card.innerHTML = `
                            <div class="product-details-container" style="display: flex; flex-direction: column; height: 100%;">
                                <div class="product-badges">
                                    <span class="product-badge badge-form">${product.form}</span>
                                </div>
                                <h3 style="margin-top: 10px;">${product.name}</h3>
                                
                                <div class="onc-specs">
                                    <div class="onc-spec-row">
                                        <span class="onc-spec-label">Dosage Form:</span>
                                        <span class="onc-spec-value">${product.form}</span>
                                    </div>
                                    <div class="onc-spec-row">
                                        <span class="onc-spec-label">Available Strengths:</span>
                                        <span class="onc-spec-value">${product.strength}</span>
                                    </div>
                                    <div class="onc-spec-row">
                                        <span class="onc-spec-label">Available Pack Sizes:</span>
                                        <span class="onc-spec-value">${product.packaging}</span>
                                    </div>
                                </div>
                                <p class="product-desc-short" style="font-size: 0.9rem; line-height: 1.5; color: #4b5563; margin-bottom: 20px;">${product.desc}</p>
                            </div>
                            <div class="product-card-actions" style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-top: auto;">
                                <button class="btn-card-details" onclick="openProductDetailsModal('${product.name.replace(/'/g, "\\'")}')" style="font-size: 0.85rem; padding: 10px 4px; border: 1px solid #C89B2B; background: transparent; color: #C89B2B; border-radius: 4px; cursor: pointer; transition: all 0.3s ease; font-weight: 600; height: 38px;">View Details</button>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <a href="/contact.html?enquiry=Product Inquiry: ${product.name} (${product.strength})" class="btn-card-enquire" style="font-size: 0.85rem; padding: 10px 4px; text-align: center; height: 38px; line-height: 18px;">Send Inquiry</a>
                                    <a href="${productWhatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-whatsapp" style="font-size: 0.85rem; padding: 10px 4px; display: inline-flex; align-items: center; gap: 4px; justify-content: center; text-decoration: none; height: 38px;">
                                        <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.006-5.04-2.834-6.87-1.827-1.828-4.26-2.833-6.853-2.834-5.437 0-9.861 4.372-9.864 9.73-.001 1.773.477 3.5 1.382 5.022L1.892 21.05l5.245-1.378-.49-.292zM17.391 14.2c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.15-.669.15-.198.298-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                        </svg>
                                        WhatsApp Now
                                    </a>
                                </div>
                            </div>
                        `;
                    } else {
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
                    }
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
