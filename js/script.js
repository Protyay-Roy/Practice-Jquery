$(function(){
    $('.your_class').slick({
        autoplay: false,
        infinite: true,
        autoplaySpeed: 2000,
        // arrows: true,
        dots: true,
        prevArrow: '<i class="fas fa-angle-left prev_arrow"></i>',
        nextArrow: '<i class="fas fa-angle-right next_arrow"></i>',
    });



    $('.venobox').venobox({
        spinner: 'wave',
        spinColor: 'red',
        arrowsColor:'blue',
    }); 
});
