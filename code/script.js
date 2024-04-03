function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
    );
}

function animateOnScroll() {
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach((element) => {
    if (isElementVisible(element)) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
    });
}

window.addEventListener('scroll', animateOnScroll);

