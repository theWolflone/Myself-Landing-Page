$(function (){
    "use strict"
    $(window).on('scroll',function(event){
        var scroll = $(window).scrollTop();
        if(scroll<20){
            $(".nav-area").removeClass("sticky");
        } else {
            $(".nav-area").addClass("sticky")
        }
    });

    //wow js
    new WOW().init();
})