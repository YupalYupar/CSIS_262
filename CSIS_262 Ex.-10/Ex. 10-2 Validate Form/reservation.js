$(document).ready(function() {

	$("#arrival_date").focus();

	$("#reservation_form").submit(function(event) {
		var isValid = true;

		var arrivalDate = $("#arrival_date").val().trim();
		var datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
		if (arrivalDate == "") {
			$("#arrival_date").next().text("Required field")
			isValid = false;
		} else if (!datePattern.test(arrivalDate)) {
			$("#arrival_date").next().text("Date must be MM/DD/YYYY");
			isValid = false;
		} else {
			$("#arrival_date").next().text("")
		}
		$("#arrival_date").val(arrivalDate);

		var nights = $("#nights").val().trim();
		if (nights == "") {
			$("#nights").next().text("Required field");
			isValid = false;
		} else if (isNaN(nights)) {
			$("#nights").next().text("Must be numeric");
			isValid = false;
		} else {
			$("#nights").next().text("");
		}
		$("#nights").val(nights);

		var name = $("#name").val().trim();
		if (name == "") {
			$("#name").next().text("Required field");
			isValid = false;
		} else {
			$("#name").next().text("");
		}
		$("#name").val(name);

		var email = $("#email").val().trim();
		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		if (email == "") {
			$("#email").next().text("Required field")
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("")
		}
		$("#email").val(email);

		var phone = $("#phone").val().trim();
		var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
		if (phone == "") {
			$("#phone").next().text("Required field")
			isValid = false;
		} else if (!phonePattern.test(phone)) {
			$("#phone").next().text("Must be a valid phone number.");
			isValid = false;
		} else {
			$("#phone").next().text("")
		}
		$("#phone").val(phone);


		if (isValid == false) {
			event.preventDefault();
		}
	})
	
		
}); // end ready