$(document).ready(function(){

    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    
    $('#manu').click(function(){
        $('.navbar').toggleClass('nav-toggle');
        $(this).toggleClass('fa-times');
    });


    $(window).on('load scroll',function(){
        $('#manu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    
    if($(window).scrollTop() >0){

        $('header').addClass('sticky');
    }
    else{
        $('header').removeClass('sticky');
    }

    if($(window).scrollTop() >0){
        $('scroll-top').show();
    }
    else{
        $('scroll-top').hide();
    }





    });

});