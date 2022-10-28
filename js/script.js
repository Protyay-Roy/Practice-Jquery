// $('#hide').click(
//     function(){
//         $('.div').fadeOut();
//     }
// );
// $('#show').click(
//     function(){
//         $('.div').toggle(3000);
//     }
// );

// var nav_ber = $('.manu').offset().top;

// $(window).scroll(function(){
//     var scrolling = $(this).scrollTop();
//     if(scrolling > nav_ber){
//         $('.manu').addClass('manu_fix');
//     }
//     else{
//         $('.manu').removeClass('manu_fix');
//     }
// });
// $('.icon').click(function(){
//     $('html,body').animate({
//        scrollTop: 0, 
//     },2000);
// });
// $(window).scroll(function(){
//    var icon_scroll = $(this).scrollTop();
//    if(icon_scroll>300){
//        $('.icon').fadeIn();
//    }
//    else {
//     $('.icon').fadeOut();
//    }
// });

$('#hide').click(function(){
    $('.text').fadeOut(3000);
});
$('#show').click(function(){
    $('.text').fadeIn(3000);
});
$('#both').click(function(){
    $('.div').toggle(2000);
});
var navbar = $('.menu').offset().top;

$(window).scroll(function(){
  
    var scrolling = $(this).scrollTop();
  
  if(scrolling>navbar){
      $('.menu').addClass('menu_fix');
  }
  else {
    $('.menu').removeClass('menu_fix');  
    }
});
$('.icon').click(function(){
    $('html,body').animate({
        scrollTop:0
    }, 2000);
});
$(window).scroll(function(){
  var win_scroll = $(this).scrollTop();

if(win_scroll > 100){
    $('.icon').fadeIn();
}
else{
    $('.icon').fadeOut();
}
});
    
    
