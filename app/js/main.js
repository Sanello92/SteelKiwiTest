var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){   
     $('.top-header').removeClass('fixed');
   } else {
     $('.top-header').addClass('fixed');
   }
   lastScrollTop = st;
});