const viewport = document.querySelector('.viewport');
const container = document.querySelector('.draggable-container');
const resetButton = document.querySelector('.reset-button');

let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;

viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    e.preventDefault();
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;

    container.style.transform = `translate(${currentX}px, ${currentY}px)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

resetButton.addEventListener('mouseup', () => {
    currentX = 0;
    currentY = 0;

    container.style.transform = `translate(${currentX}px, ${currentY}px)`;
})