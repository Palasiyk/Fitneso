
/**SLIDER*/
$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        adaptiveHeigdt: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 3000,
        infinite: true,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

 /**OWL CAROUSEL*/
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        center:true,
        item:3,
        margin:0,
        smartSpeed:450,
        autoplay: false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items: 1
            },
            800:{
                items: 2
            },
            1200:{
                items: 3
            }
        }
    });
});

/**MODAL*/
const modal = document.getElementById("MyModal"); //перемінна - доступом до модального вікна

let btn = document.getElementById("myBtn"); //перемінна - доступом до відкрити модалку

let span = document.getElementsByClassName("close")[0]; //перемінна - доступом до кнопки закрити модалку


btn.onclick = function (){            //натиснення на кнопку бтн запускає функцію
    modal.style.display = "block";    //слас модал змінить у цсс дісплей нон на блок
}

span.onclick = function (){          //натиснення на кнопку спан запускає функцію
    modal.style.display = "none";    //слас модал змінить у цсс дісплей блок на нон
}

window.onclick = function (event){  //натиснення на пустий екран запускає функцію подія
    if (event.target == modal) {               //якщо подія скассу модал була запущена
        modal.style.display = "none";          //то стиль дисплей змінюється на нон
    }
}