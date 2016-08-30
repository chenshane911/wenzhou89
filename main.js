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
	
	
		
});



