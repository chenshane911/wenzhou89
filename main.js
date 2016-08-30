$(document).ready(function(){
	
	
	

	
		$('#back-top a').click(function (e) {
			e.preventDefault();
			$('body').animate({
				scrollTop: 0
			}, 800);
		});
	
	
	
		
	$('#scroll a').click(function (e) {
          console.log('onclick'); console.log('AAA')
          e.preventDefault();
          $('body').animate({ scrollTop: "300px" });

      }, 400);
		
});
