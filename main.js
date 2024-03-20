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


let coll = document.querySelectorAll(".collapsibleBtn");
let i;


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.firstElementChild;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "10px";
    }
  });
}

const hamburga = document.querySelector('.hamburgerMenu');
const navItem = document.querySelector('.navItem');

hamburga.addEventListener('click', () => {
  hamburga.classList.toggle('change');
  navItem.classList.toggle('change');
});