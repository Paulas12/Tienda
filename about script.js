document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let index = 0;
    const totalImages = carousel.children.length;

    function updateCarousel() {
        let offset = -index * 100; // Mueve 100% hacia la izquierda
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function moveNext() {
        index = (index + 1) % totalImages; // Avanza
        updateCarousel();
    }

    function movePrev() {
        index = (index - 1 + totalImages) % totalImages; // Retrocede
        updateCarousel();
    }

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);

    // Movimiento automático cada 5 segundos
    setInterval(moveNext, 5000);
});
