// const swiper = new Swiper('.swiper', {
//     slidesPerView: 3,
//     direction: getDirection(),
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     on: {
//         resize: function () {
//             swiper.changeDirection(getDirection());
//         },
//     },
// });




///////////////////////////////////////////////
const swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 200,
        modifier: 1,
        slideShadows : false,
    }
});



// let mainImg = document.querySelector('.product-img img')
// let images = document.querySelectorAll('.images-thumb img')
//
// images.forEach( img => {
//     img.addEventListener('click',(e) =>{
//         mainImg.src = e.target.src
//         removeActive()
//         img.classList.toggle('active')
//     })
// })
//
// function  removeActive(){
//     images.forEach(img =>{
//         img.classList.remove('active')
//     })
// }

// mainImg.addEventListener('mousemove',e =>{
//     mainImg.style.transform = `translate(${e.offsetX/30}px, ${e.offsetY/30}px)`
//     console.log(e.offsetX, e.offsetY)
// })