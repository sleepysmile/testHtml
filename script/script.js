document.addEventListener("DOMContentLoaded", function () {
    lazyLoadImageObs();
})

document.querySelector('.menu-btn').addEventListener('click', function () {
    this.parentNode.querySelector('.nav-content').classList.toggle('active');
})

document.querySelector('.btn-close').addEventListener('click', function () {
    this.parentNode.classList.toggle('active')
})

function lazyLoadImageObs() {
    var docImage = document.querySelectorAll('img[data-src]');
    var imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                let image = entry.target;
                image.src = image.dataset.src;
                if (image.getAttribute('src') !== '') {
                    imageObserver.unobserve(image)
                }
            }   
        })
    });

    docImage.forEach(element => {
        imageObserver.observe(element);
    });
}