// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 3D Card Flip =====
    const card = document.getElementById('card');
    const cardContainer = document.getElementById('cardContainer');
    
    cardContainer.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
    
    // ===== Classical Music Player =====
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = document.getElementById('musicText');
    let isPlaying = false;
    
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicText.textContent = 'Play Music';
            isPlaying = false;
        } else {
            bgMusic.play();
            musicText.textContent = 'Pause Music';
            isPlaying = true;
        }
    });
    
    // ===== Parallax Scroll Effect =====
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    function parallaxScroll() {
        const scrolled = window.pageYOffset;
        
        parallaxSections.forEach(section => {
            const speed = section.dataset.speed || 0.5;
            const offset = section.offsetTop;
            const yPos = -(scrolled - offset) * speed;
            section.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    window.addEventListener('scroll', parallaxScroll);
    
    // ===== Carousel Video Control =====
    // Pause all videos when carousel changes
    const carouselButtons = document.querySelectorAll('[data-carousel-prev], [data-carousel-next]');
    carouselButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videos = document.querySelectorAll('#carousel video');
            videos.forEach(video => {
                video.pause();
            });
        });
    });
    
    // ===== Fade-in animations on scroll =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('h2, .gallery-item');
    fadeElements.forEach(el => observer.observe(el));
    
});

// ===== Lightbox Functions =====
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('show');
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
    document.body.style.overflow = 'auto';
}

// Close lightbox on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
