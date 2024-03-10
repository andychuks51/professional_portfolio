document.querySelectorAll('.carouselWrapper').forEach(carouselWrapper => {
    const items = carouselWrapper.querySelectorAll('.carouselItem');
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carouselBtn"></span>`;
    });
    
    const buttons = carouselWrapper.querySelectorAll('.carouselBtn');

    buttons.forEach((button, i) => {
        button.addEventListener ('click', () => {
            items.forEach(items => items.classList.remove("carouselItemActive"));
            buttons.forEach(button => button.classList.remove("carouselBtnActive"));
            
            items[i].classList.add('carouselItemActive');
            buttons[i].classList.add('carouselBtnActive');
        });
    });
});
