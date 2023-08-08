const iconContainers = document.querySelectorAll('.icon-container');

iconContainers.forEach(container => {
const icon = container.querySelector('i');
const img = container.querySelector('img');

container.addEventListener('mouseenter', () => {
    icon.style.display = 'block';
});

container.addEventListener('mouseleave', () => {
    icon.style.display = 'none';
});

icon.addEventListener('click', (event) => {
    event.preventDefault();
    if (img.requestFullscreen) {
    img.requestFullscreen();
    } else if (img.mozRequestFullScreen) {
    img.mozRequestFullScreen();
    } else if (img.webkitRequestFullscreen) {
    img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
    img.msRequestFullscreen();
    }
});

const buttons = container.querySelectorAll('.botao');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
    event.preventDefault();
    });
});
});

