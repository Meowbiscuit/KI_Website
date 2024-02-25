// JavaScript für den Slider
let slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;
let intervalId;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Geschwindigkeit des Sliders
    slider.scrollLeft = scrollLeft - walk;
});

// JavaScript für die Pfeile
function prevSlide() {
    slider.scrollLeft -= slider.offsetWidth;
}

function nextSlide() {
    slider.scrollLeft += slider.offsetWidth;
}

// JavaScript für die automatische Bildwechsel
function startAutoSlide() {
    intervalId = setInterval(() => {
        if (slider.scrollLeft + window.innerWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
        } else {
            slider.scrollLeft += slider.offsetWidth;
        }
    }, 5000); // Wechsel alle 5 Sekunden
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

startAutoSlide();