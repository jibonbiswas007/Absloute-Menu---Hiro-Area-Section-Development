jQuery(document).ready(function(){
    
    $('.homepage-slides').owlCarousel({
    loop:true,
    nav:true,
    navText:["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
});