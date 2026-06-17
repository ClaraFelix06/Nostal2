document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    if (!track || !prevButton || !nextButton) return;

    const items = Array.from(track.querySelectorAll('.carousel-item'));
    let currentIndex = 0;

    const updateCarousel = () => {
        const itemWidth = items[currentIndex].getBoundingClientRect().width;
        track.scrollTo({ left: itemWidth * currentIndex, behavior: 'smooth' });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, items.length - 1);
        updateCarousel();
    });
});