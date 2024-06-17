document.addEventListener("DOMContentLoaded", function () {
    const reviewsCards = document.querySelectorAll('.reviews__card');
    let currentIndex = 0;

    function showSlide(index) {
        reviewsCards.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % reviewsCards.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + reviewsCards.length) % reviewsCards.length;
        showSlide(currentIndex);
    }

    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    // Отобразить первый слайд при загрузке страницы
    showSlide(currentIndex);
});

// mobile
const btnMobileMenu = document.querySelector(".mobile_open-btn");
const btnMobileMenuActive = document.querySelectorAll(".mobile_open");
const mobileMenu = document.querySelector(".header__menu-burger");

btnMobileMenu.addEventListener("click", () => {
    btnMobileMenuActive.forEach(active => active.classList.toggle("active"))
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
})