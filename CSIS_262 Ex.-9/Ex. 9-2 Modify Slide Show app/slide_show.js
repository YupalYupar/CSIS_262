$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
		
	// start slide show
    timer1 = setInterval(
        function () {   
        	$("#caption").slideUp(1000);
        	$("#slide").fadeOut(1100,
           		function () {
           	     	if (nextSlide.next().length == 0) {
						nextSlide = $("#slides img:first-child");
					}
					else {
						nextSlide = nextSlide.next();
					}
					nextSlideSource = nextSlide.attr("src");
					nextCaption = nextSlide.attr("alt");
					$("#slide").attr("src", nextSlideSource).fadeIn(1000);					
					$("#caption").text(nextCaption).slideDown(1000);
					//event.preventDefault();
				}
			);    // end callback
		}, 
		4000);
});    // end ready