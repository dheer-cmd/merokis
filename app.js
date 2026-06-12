/* ==========================================
   SCROLL MOTION MAIN LOGIC
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const frameCount = 180;
    const canvas = document.getElementById('animation-canvas');
    const ctx = canvas.getContext('2d');
    
    // UI Elements
    const loader = document.getElementById('loader');
    const percentageText = document.getElementById('loader-percentage');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const appContainer = document.getElementById('app');
    const scrollProgressLine = document.getElementById('scroll-progress-line');
    const scrollHint = document.getElementById('scroll-hint');
    const indicatorDots = document.querySelectorAll('.indicator-dot');
    const sections = document.querySelectorAll('.scroll-section');
    const cards = document.querySelectorAll('.content-card');
    const navItems = document.querySelectorAll('.nav-item');

    // State Variables
    const images = [];
    let loadedCount = 0;
    let targetScrollPercent = 0;
    let currentScrollPercent = 0;
    const lerpFactor = 0.08; // Buttery smooth scroll easing
    let isAppReady = false;

    // Helper: Map index to frame filename
    const getFrameUrl = (index) => {
        const paddedIndex = index.toString().padStart(3, '0');
        return `./ezgif-frame-${paddedIndex}.jpg`;
    };

    // Preload all 180 images
    const preloadImages = () => {
        return new Promise((resolve) => {
            const handleImageLoad = () => {
                loadedCount++;
                const progress = Math.round((loadedCount / frameCount) * 100);
                
                // Update loader progress bar and text
                percentageText.textContent = `${progress}%`;
                progressBarFill.style.width = `${progress}%`;

                if (loadedCount === frameCount) {
                    resolve();
                }
            };

            const handleImageError = (e) => {
                console.warn(`Failed to load frame: ${e.target.src}`);
                // Proceed anyway so application doesn't hang
                handleImageLoad();
            };

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                img.onload = handleImageLoad;
                img.onerror = handleImageError;
                img.src = getFrameUrl(i);
                images.push(img);
            }
        });
    };

    // Responsive Canvas Resizing (Maintaining Cover Aspect Ratio)
    const resizeCanvas = () => {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
        
        // Redraw current frame immediately on resize
        const currentFrameIndex = Math.min(
            frameCount - 1,
            Math.max(0, Math.floor(currentScrollPercent * (frameCount - 1)))
        );
        drawFrame(currentFrameIndex);
    };

    // Draw frame on canvas with object-fit: cover logic
    const drawFrame = (index) => {
        const img = images[index];
        if (!img || img.naturalWidth === 0) return;

        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;
        
        const imgWidth = img.naturalWidth;
        const imgHeight = img.naturalHeight;
        
        const canvasRatio = canvasWidth / canvasHeight;
        const imgRatio = imgWidth / imgHeight;

        let drawWidth, drawHeight, drawX, drawY;

        if (canvasRatio > imgRatio) {
            // Screen is wider than the frame (landscape)
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
            drawX = 0;
            drawY = (canvasHeight - drawHeight) / 2;
        } else {
            // Screen is taller than the frame (portrait/mobile)
            drawWidth = canvasHeight * imgRatio;
            drawHeight = canvasHeight;
            drawX = (canvasWidth - drawWidth) / 2;
            drawY = 0;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    // Calculate scroll progress percentage
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        targetScrollPercent = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
    };

    // Update UI elements based on scroll fraction
    const updateUIElements = (percent) => {
        // Update top horizontal progress bar
        scrollProgressLine.style.width = `${percent * 100}%`;

        // Fade out/in scroll mouse hint
        if (percent > 0.02) {
            scrollHint.classList.add('fade-out');
        } else {
            scrollHint.classList.remove('fade-out');
        }

        // Check which section is currently centered in viewport
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;

            // If section is in focus (center is within 40% of viewport height)
            if (Math.abs(sectionCenter - viewportCenter) < window.innerHeight * 0.4) {
                cards[index].classList.add('in-view');
                indicatorDots[index].classList.add('active');
                
                // Highlight corresponding navigation link
                navItems.forEach((item, itemIdx) => {
                    if (itemIdx === index) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            } else {
                cards[index].classList.remove('in-view');
                indicatorDots[index].classList.remove('active');
            }
        });
    };

    // Main Animation loop (Lerping frames and updating elements)
    const updateAnimation = () => {
        if (!isAppReady) return;

        // Apply smooth lerping to scroll position
        currentScrollPercent += (targetScrollPercent - currentScrollPercent) * lerpFactor;

        // Determine frame index to render
        const frameIndex = Math.min(
            frameCount - 1,
            Math.max(0, Math.floor(currentScrollPercent * (frameCount - 1)))
        );

        // Draw the frame
        drawFrame(frameIndex);

        // Update indicators/text cards
        updateUIElements(currentScrollPercent);

        requestAnimationFrame(updateAnimation);
    };

    // Setup interactive side indicator dots and header navigation links
    const setupDotNavigation = () => {
        // Dot clicks
        indicatorDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const targetSection = sections[index];
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Header Nav Item clicks (matching section indexes, only for local anchor links)
        navItems.forEach((item, index) => {
            const href = item.getAttribute('href');
            if (href && href.startsWith('#')) {
                if (index < sections.length) {
                    item.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetSection = sections[index];
                        if (targetSection) {
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                }
            }
        });
    };

    // Initialize the Experience
    const init = async () => {
        // 1. Preload frames
        await preloadImages();
        
        // 2. Hide loader and display main content
        loader.classList.add('fade-out');
        appContainer.classList.remove('app-hidden');
        appContainer.classList.add('app-visible');
        
        // 3. Setup size listeners & interactive indicators
        isAppReady = true;
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('scroll', handleScroll);
        
        setupDotNavigation();
        resizeCanvas();
        
        // Initial drawing of the first frame
        drawFrame(0);
        
        // Start animation/scrolling rendering loop
        requestAnimationFrame(updateAnimation);
    };

    // Start loading
    init();
});
