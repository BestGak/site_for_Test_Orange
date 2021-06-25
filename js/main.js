let btnRight = document.querySelector('#btn-right');
let btnLeft = document.querySelector('#btn-left');
let spanChanger = document.querySelector('#span_slider')
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let btnSend = document.querySelector('#sendForm')
let overlay = document.querySelector('#overlay')
let modal = document.querySelector('#thanks')
let body = document.querySelector('body')
let closeModal = document.querySelector('.modal__close')
let link = document.querySelectorAll('.header__right-links')

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  
})


$('.main__right-slider').slick({
  prevArrow: '<button type="button" class="slick-prev slider-btn"></button>',
  nextArrow: '<button type="button" class="slick-next slider-btn"></button>',
  infinite: false
});

btnRight.addEventListener('click',function(){
  document.querySelector('.slick-next').click()
  spanChanger.innerHTML = '02'
})
btnLeft.addEventListener('click',function(){
  document.querySelector('.slick-prev').click()
  spanChanger.innerHTML = '01'
})

btnSend.addEventListener('click', function(){
overlay.style.display = 'block';
modal.style.display = 'block';
body.style.overflow = 'hidden';
})

closeModal.addEventListener('click',function(){
  overlay.style.display = 'none';
  modal.style.display = 'none'; 
  body.style.overflow = 'visible';
})

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

link.forEach((elem) => {
  elem.addEventListener('click', () => {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
  })
})