$(document).ready(function(){
	
	
	

	
		$('#back-top a').click(function (e) {
			e.preventDefault();
			$('body').animate({
				scrollTop: 0
			}, 800);
		});
	
	
	
		
	$('.svg-wrapper').click(function (e) {
          console.log('onclick'); console.log('AAA')
          e.preventDefault();
          $('body').animate({ scrollTop: "400px" });

      }, 400);
		
});
