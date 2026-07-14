/* ===================================================
   Claude AI Bench Sales Presentation — Script
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 1;
    let isTransitioning = false;

    const progressBar = document.getElementById('progressBar');
    const slideCounter = document.getElementById('slideCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('slideDots');
    const keyHint = document.getElementById('keyHint');
    const themeToggle = document.getElementById('themeToggle');

    // ---- Theme Toggle ----
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Recreate particles to match theme if on start/end slides
        const p1 = document.getElementById('particles1');
        const p2 = document.getElementById('particles2');
        if(p1) { p1.innerHTML = ''; createParticles('particles1'); }
        if(p2) { p2.innerHTML = ''; createParticles('particles2'); }
    });

    // ---- Build dots ----
    for (let i = 1; i <= totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slide-dot');
        if (i === 1) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('.slide-dot');

    // ---- Create particles ----
    function createParticles(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const colors = ['#8b5cf6', '#6366f1', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b'];
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            const size = Math.random() * 6 + 2;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.left = Math.random() * 100 + '%';
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.animationDuration = Math.random() * 15 + 10 + 's';
            p.style.animationDelay = Math.random() * 10 + 's';
            container.appendChild(p);
        }
    }
    createParticles('particles1');
    createParticles('particles2');

    // ---- Navigation ----
    function updateUI() {
        progressBar.style.width = ((currentSlide / totalSlides) * 100) + '%';
        slideCounter.textContent = `${currentSlide} / ${totalSlides}`;
        prevBtn.disabled = currentSlide === 1;
        nextBtn.disabled = currentSlide === totalSlides;
        dots.forEach((d, i) => d.classList.toggle('active', i + 1 === currentSlide));
    }

    function goToSlide(n) {
        if (n < 1 || n > totalSlides || n === currentSlide || isTransitioning) return;
        isTransitioning = true;

        const direction = n > currentSlide ? 'left' : 'right';
        const currentEl = slides[currentSlide - 1];
        const nextEl = slides[n - 1];

        // Exit current
        currentEl.classList.remove('slide-active');
        if (direction === 'left') {
            currentEl.classList.add('slide-exit-left');
        } else {
            currentEl.classList.add('slide-exit-right');
        }

        // Enter new
        if (direction === 'left') {
            nextEl.style.transform = 'translateX(40px)';
        } else {
            nextEl.style.transform = 'translateX(-40px)';
        }
        
        // Force reflow so the starting position is applied before transition
        void nextEl.offsetWidth;
        
        nextEl.classList.add('slide-active');
        nextEl.style.transform = ''; // Clear inline transform so CSS takes over

        currentSlide = n;
        updateUI();
        animateNumbers();

        // Hide keyboard hint after first navigation
        keyHint.classList.add('hidden');

        setTimeout(() => {
            currentEl.classList.remove('slide-exit-left');
            currentEl.classList.remove('slide-exit-right');
            isTransitioning = false;
        }, 600);
    }

    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }

    // ---- Keyboard ----
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
        if (e.key === 'Home') { e.preventDefault(); goToSlide(1); }
        if (e.key === 'End') { e.preventDefault(); goToSlide(totalSlides); }
    });

    // ---- Button clicks ----
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // ---- Touch / Swipe ----
    let touchStartX = 0;
    document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    document.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 60) {
            diff > 0 ? nextSlide() : prevSlide();
        }
    }, { passive: true });

    // ---- Animated counting numbers ----
    function animateNumbers() {
        const activeSlide = slides[currentSlide - 1];
        const nums = activeSlide.querySelectorAll('[data-count]');
        nums.forEach(el => {
            const target = parseInt(el.dataset.count);
            const suffix = el.dataset.suffix || '';
            const duration = 1200;
            const start = performance.now();
            el.textContent = '0' + suffix;

            function tick(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const ease = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(target * ease);
                el.textContent = current + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });

        // Also animate report numbers
        const reportNums = activeSlide.querySelectorAll('.report-number[data-count]');
        reportNums.forEach(el => {
            const target = parseInt(el.dataset.count);
            const duration = 1200;
            const start = performance.now();
            el.textContent = '0';

            function tick(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(target * ease);
                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }

    // ---- Interview Tabs ----
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            const parent = btn.closest('.interview-tabs');

            // Update buttons
            parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update content
            parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            parent.querySelector(`#tab-${tabName}`).classList.add('active');
        });
    });

    // ---- Mouse wheel ----
    let wheelTimeout = null;
    document.addEventListener('wheel', e => {
        if (wheelTimeout) return;
        wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 800);
        if (e.deltaY > 30) nextSlide();
        else if (e.deltaY < -30) prevSlide();
    }, { passive: true });

    // ---- Initialize ----
    updateUI();
    animateNumbers();
});
