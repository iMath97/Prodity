document.addEventListener("DOMContentLoaded", function(){
    upBtnShowOnScroll();
    openingsurenUpdate();
    togglePriceBtn();
    desktopOrMobile();
    navigationChangeOnScroll();
    // showroomRealisaties();
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

// price checkbox
function togglePriceBtn(){
    $('.maandelijks').hide();
    $('.checkBtn').click(function () {
        $('.checkBtn').toggleClass('activeCheckbox');
        let jaarlijks = $('.btnJaarlijks');
        if(jaarlijks.hasClass('activeCheckbox')){
            $('.maandelijks').hide();
            $('.jaarlijks').show();
        }else{
            $('.jaarlijks').hide();
            $('.maandelijks').show();
        }
    });
}

function desktopOrMobile(){
    let screenWidth = window.matchMedia("(max-width: 850px)");
    if (screenWidth.matches){
        $('.menu').hide();
        $('.backgroundRed').hide();
        $('.mobileBtn').show();
        mobileNav();
    }else{
        $('.mobileBtn').hide();
        $('.backgroundRed').show();
        $('.menu').show();
        $('.mobileMenu').hide();
    }
}

// mobile navigation
function mobileNav(){
    $('.mobileMenu').hide();
    $('.mobileBtn').click(function () {
        $('.mobileBtn').hide();
        $('.mobileMenu').show();
    });
    $('.activeMobileBtn').click(function () {
        $('.mobileBtn').show();
        $('.mobileMenu').hide();
    });
}

// navigation fixed on scroll
function navigationChangeOnScroll(){
    let nav = document.getElementById("siteNav");
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

// let windowWidth = 700;
// $("#siteNav").hide();
// if($(window).outerWidth() > windowWidth){
//     $("#btns").fadeIn();
// }
// $(".burger").click(function (e) { 
//     e.preventDefault();
//     this.classList.toggle("change");
//     if($(".btn2").css("display") == "none"){
//         $("#btns").fadeIn();
//     }else{
//         $("#btns").fadeOut();
//     }
// });
// $(window).resize(function () {
//     if($(window).outerWidth() > windowWidth){
//         $("#btns").fadeIn();
//     }else{
//         $("#btns").fadeOut(1);
//     }
// });

function showroomRealisaties(){
    $('.realisatieTop').click(function () {
        $('.realisatieShowroom').append('.realisatieCard');
    });
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