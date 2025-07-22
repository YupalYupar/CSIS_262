$(document).ready(function() {
	var val = $( "#progressbar" ).progressbar({
			value: 0,
			});
    $("#start_timer").click(
    	function () {
			var totalTime = $("#time").val();
			var interval = $("#interval").val();
			var isValid = true;
			// validate the time
			if (totalTime == "") { 
				$("#time_error").text("This field is required.");
				isValid = false;
			} else if (isNaN(totalTime)) {
				$("#time_error").text("Time must be a number.");
				isValid = false;
			} else {
				$("#time_error").text("");
			} 
			
			// validate the interval
			if (interval == "") { 
				$("#interval_error").text("This field is required.");
				isValid = false;
			} else if (isNaN(interval)) {
				$("#interval_error").text("Interval must be a number.");
				isValid = false;
			} else {
				$("#interval_error").text("");
			}

			if (isValid) {
				totalTime = totalTime * 1000;
				interval = interval * 1000;
				var elapsedTime = 0;
				var val = $("#progressbar").progressbar("value");
				
				var timer = setInterval(
					function () {
						
						elapsedTime += interval;
						if (elapsedTime < totalTime) {
							val += 100/(totalTime/interval);
							$("#progressbar").progressbar("value", val );
							}
					    else if (elapsedTime > totalTime/1000) {
							$("#progressbar").progressbar("value", 100 );
							clearInterval(timer);
							$("#complete span").text("Time is up!");
							}
						}, interval );	
				}
			
			/*if (isValid) {
				totalTime = totalTime * 1000;
				interval = interval * 1000;
				var elapsedTime = 0;
				var displayMinutes = 0;
				var displaySeconds = 0;
				var timer = setInterval(
					function () {
						elapsedTime += interval;
						displaySeconds = elapsedTime / 1000;
						if (displaySeconds < 60) {
							$("#elapsed").val(displaySeconds + " seconds");
						} else {								
							displayMinutes = parseInt(displaySeconds / 60);
							displaySeconds = displaySeconds % 60;
							if (displaySeconds == 0) {
								$("#elapsed").val(displayMinutes + " minutes");									
							} else {
								$("#elapsed").val(displayMinutes + " minutes " + displaySeconds + " seconds");									
							}
						}
						if (elapsedTime >= totalTime) {
							clearInterval(timer);
							$("#complete span").text("Time is up!");
						}
					},
					interval );
    		}*/
	
	$("#totalTime").focus();
})
});