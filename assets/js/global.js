document.addEventListener("DOMContentLoaded", function(){
    navigationChangeOnScroll();
    upBtnShowOnScroll();
    openingsurenUpdate();
    togglePriceBtn();
    // slideshow();
})
function navigationChangeOnScroll(){
    let nav = document.getElementsByTagName("nav")[1];
    let infoNav = document.getElementById("infoNav");
    let btns = document.getElementsByClassName("navigationBtn");
    document.addEventListener("scroll", function(){
        if(scrollY >= 55){
            nav.style = "opacity: .9; top: 0;";
            for(let i = 0; i < btns.length; i++){
                btns[i].style = "color: #f6f5f3;";
            }
            infoNav.style = "top: -6rem";
        }else{
            nav.style = "opacity: 1;";
            for(let i = 0; i < btns.length; i++){
                btns[i].style = "color: #f6f5f3;";
            }
            infoNav.style = "top: 0;";
        }
    });
};

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

function togglePriceBtn(){
    $('.checkBtn').click(function () { 
        $('button.checkBtn').toggleClass('activeCheckbox');
    });
}

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