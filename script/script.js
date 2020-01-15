document.addEventListener("DOMContentLoaded", function () {
    lazyLoadImage()
})

document.querySelector('.menu-btn').addEventListener('click', function () {
    this.parentNode.querySelector('.nav-content').classList.toggle('active');
})

document.querySelector('.btn-close').addEventListener('click', function () {
    this.parentNode.classList.toggle('active')
})

function lazyLoadImage() {
    const docImage = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                let image = entry.target;
                image.src = image.dataset.src;
                imageObserver.unobserve(image)
            }   
        })
    });

    docImage.forEach(element => {
        imageObserver.observe(element);
    })
}