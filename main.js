$(document).ready(function(){
	
	
	

	
		$('#back-top').click(function (e) {
			e.preventDefault();
			$('body').animate({
				scrollTop: 0
			}, 800);
		});
	
	
	
		
	$('.svg-wrapper').click(function (e) {
          console.log('onclick'); console.log('AAA')
          e.preventDefault();
          $('body').animate({ scrollTop: "800px" });

      }, 400);
	
	
	
		
	$('#someinfo').click(function (e) {
          console.log('onclick'); console.log('AAA')
          e.preventDefault();
          $('body').animate({ scrollTop: "1555px" });

      }, 400);
	
	
		
	$(window).scroll(function() {
    if ($(this).scrollTop()>0)
     {
        $('.part6').fadeOut();
     }
    else
     {
      $('.part6').fadeIn();
     }
 });
	
	
	
	
});



