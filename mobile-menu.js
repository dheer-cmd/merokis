document.addEventListener('DOMContentLoaded', () => {
    // 1. Create and append the mobile drawer container to body
    const drawerDiv = document.createElement('div');
    drawerDiv.innerHTML = `
        <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
        <div class="mobile-drawer-content" id="mobile-drawer-content">
            <div class="mobile-drawer-header">
                <div class="logo">
                    <img src="/logo.png" alt="Mérokis Logo" class="logo-img">
                </div>
                <button class="mobile-drawer-close" id="mobile-drawer-close" aria-label="Close Menu">&times;</button>
            </div>
            <nav class="mobile-drawer-nav">
                <a href="/index.html" class="mobile-nav-item" data-page="home">Home</a>
                <a href="/about.html" class="mobile-nav-item" data-page="about">About Us</a>
                
                <!-- Expandable Products Group -->
                <div class="mobile-nav-dropdown" id="mobile-nav-dropdown">
                    <button class="mobile-nav-dropdown-toggle" id="mobile-nav-dropdown-toggle">
                        Products <span class="dropdown-chevron">▼</span>
                    </button>
                    <div class="mobile-nav-dropdown-menu" id="mobile-nav-dropdown-menu">
                        <a href="/products/anaesthesia" data-cat="anaesthesia">Anaesthesia</a>
                        <a href="/products/analgesic-antipyretic" data-cat="analgesic-antipyretic">Analgesic & Antipyretic</a>
                        <a href="/products/anti-malaria" data-cat="anti-malaria">Anti Malaria</a>
                        <a href="/products/antibiotics" data-cat="antibiotics">Antibiotics</a>
                        <a href="/products/antidiabetic" data-cat="antidiabetic">Antidiabetic</a>
                        <a href="/products/antifungal" data-cat="antifungal">Antifungal</a>
                        <a href="/products/antipsychotic" data-cat="antipsychotic">Antipsychotic</a>
                        <a href="/products/antiviral" data-cat="antiviral">Antiviral</a>
                        <a href="/products/cardiovascular-drugs" data-cat="cardiovascular-drugs">Cardiovascular Drugs</a>
                        <a href="/products/dermatology-drugs" data-cat="dermatology-drugs">Dermatology</a>
                        <a href="/products/gastro-intestinal" data-cat="gastro-intestinal">Gastrointestinal</a>
                        <a href="/products/general-medicine" data-cat="general-medicine">General Medicine</a>
                        <a href="/products/gynaec" data-cat="gynaec">Gynaec</a>
                        <a href="/products/health-supplement" data-cat="health-supplement">Health Supplement</a>
                        <a href="/products/herbal" data-cat="herbal">Herbal</a>
                        <a href="/products/men-health" data-cat="men-health">Men Health</a>
                        <a href="/products/neurology" data-cat="neurology">Neurology</a>
                        <a href="/products/oncology-drugs" data-cat="oncology-drugs">Oncology Drugs</a>
                        <a href="/products/orthopaedic-rehabilitation" data-cat="orthopaedic-rehabilitation">Orthopaedic Rehabilitation</a>
                        <a href="/products/respiratory-drugs" data-cat="respiratory-drugs">Respiratory Drugs</a>
                        <a href="/products/veterinary-products" data-cat="veterinary-products">Veterinary Products</a>
                    </div>
                </div>
                
                <a href="/index.html#section-4" class="mobile-nav-item" data-page="certifications">Certifications</a>
                <a href="/contact.html" class="mobile-nav-item" data-page="contact">Contact Us</a>
            </nav>
        </div>
    `;
    document.body.appendChild(drawerDiv);

    // 2. Add Mobile Toggle button to glass-header container
    const headerContainer = document.querySelector('.glass-header .header-container');
    if (headerContainer) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'mobile-nav-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle Menu');
        toggleBtn.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        headerContainer.appendChild(toggleBtn);

        // Click event to open drawer
        toggleBtn.addEventListener('click', () => {
            document.body.classList.add('drawer-open');
        });
    }

    // 3. Close Drawer interactions
    const closeBtn = document.getElementById('mobile-drawer-close');
    const overlay = document.getElementById('mobile-drawer-overlay');

    const closeDrawer = () => {
        document.body.classList.remove('drawer-open');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    // 4. Products Dropdown Toggle
    const dropdownToggle = document.getElementById('mobile-nav-dropdown-toggle');
    const dropdownMenu = document.getElementById('mobile-nav-dropdown-menu');
    const dropdownContainer = document.getElementById('mobile-nav-dropdown');

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isActive = dropdownContainer.classList.toggle('active');
            if (isActive) {
                dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
            } else {
                dropdownMenu.style.maxHeight = '0';
            }
        });
    }

    // 5. Active States Highlight Based on URL path
    const path = window.location.pathname.toLowerCase();
    
    // Highlight items
    const navItems = document.querySelectorAll('.mobile-nav-item');
    navItems.forEach(item => {
        const page = item.getAttribute('data-page');
        if (page === 'home' && (path === '/' || path === '/index.html' || path === '/index')) {
            item.classList.add('active');
        } else if (page === 'about' && path.includes('about.html')) {
            item.classList.add('active');
        } else if (page === 'contact' && path.includes('contact.html')) {
            item.classList.add('active');
        } else if (page === 'certifications' && window.location.hash === '#section-4') {
            item.classList.add('active');
        }
    });

    // If inside a product category page, highlight Products item and expand dropdown
    const catLinks = dropdownMenu.querySelectorAll('a');
    catLinks.forEach(link => {
        const cat = link.getAttribute('data-cat');
        if (path.includes(`/products/${cat}`)) {
            link.classList.add('active');
            dropdownContainer.classList.add('active');
            dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
            dropdownToggle.classList.add('active');
        }
    });

    // Also highlight Products menu item if inside products page
    if (path.includes('products.html')) {
        dropdownToggle.classList.add('active');
    }

    // Close menu when clicking links
    document.querySelectorAll('.mobile-drawer-nav a').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
});
