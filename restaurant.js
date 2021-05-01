let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".navbar");
let bod = document.querySelector(".container");
     
hamburger.addEventListener("click", function () {
hamburger.classList.toggle("isactive");
menu.classList.toggle("active");
});



$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('header').addClass('black');
    }
    else{
        $('header').removeClass('black');
    }
})

