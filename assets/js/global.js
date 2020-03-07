document.addEventListener("DOMContentLoaded", function(){
    upBtnShowOnScroll();
    openingsurenUpdate();
    // slideshow();
})

function upBtnShowOnScroll(){
    let upBtn = document.getElementsByClassName("upBtn");
    document.addEventListener("scroll", function(){
        if(scrollY >= 10){
            upBtn.style = "opacity: 1;";
        }else{
            upBtn.style = "opacity: 0;";
        }
    });
}

// auto change openingsuren each day
function openingsurenUpdate(){
    $('.updateOpeningsuren > p').hide();
    let d = new Date().getDay();
    switch(d){
        case 0:
            $("#zondag").show();
            break;
        case 1:
            $("#maandag").show();
            break;
        case 2:
            $("#dinsdag").show();
            break;
        case 3:
            $("#woensdag").show();
            break;
        case 4:
            $("#donderdag").show();
            break;
        case 5:
            $("#vrijdag").show();
            break;
        case 6:
            $("#zaterdag").show();
            break;
    }
}

// slideshow
function slideshow(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: -400,
        centeredSlides: true,
        loop: true,
        slidesPerView: 2,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },     
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
    });
};