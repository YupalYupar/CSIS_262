$(document).ready(function() {
	
	var slider = $("#image_list");                     // slider = ul element
	var leftProperty, newLeftProperty;
		
	// the click event handler for the right button						
	$("#right_button").click(function() { 
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		// determine new value of left property
		if (leftProperty - 300 <= -900) {
			newLeftProperty = 0; }
		else {
			newLeftProperty = leftProperty - 300; }
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click
	
	// the click event handler for the left button
	$("#left_button").click(function() {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty >= 0) {
			newLeftProperty = -600;
		}
		else {
			newLeftProperty = leftProperty + 300; }
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);				
	});  // end click	

	$("#image_list a").each(function() {
		var newImage = new Image();
		newImage.src = $(this).attr("href");
	});

	$("#image_list a").click(function(evt) {
		$("#image").stop(true).animate({ opacity: "0", marginLeft: "-205"}, 1000, function(){
			var imageURL = $(evt.currentTarget).attr("href");
			$("#image").attr("src", imageURL).animate({ opacity : "1", marginLeft : "105"}, 1000);
		}); evt.preventDefault();
	});
}); // end ready