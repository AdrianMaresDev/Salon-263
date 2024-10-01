document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.close');
    const navigation = document.querySelector('.header-nav');

    hamburger.addEventListener('click', function() {
        navigation.classList.toggle('nav-active');
        hamburger.style.display = 'none';
        close.style.display = 'block';
    });

    close.addEventListener('click', function() {
        navigation.classList.toggle('nav-active');
        close.style.display = 'none';
        hamburger.style.display = 'block';
    });
});