document.querySelector('.menu-btn').addEventListener('click', function () {
    this.parentNode.querySelector('.nav-content').classList.toggle('active');
})

document.querySelector('.btn-close').addEventListener('click', function () {
    this.parentNode.classList.toggle('active')
})