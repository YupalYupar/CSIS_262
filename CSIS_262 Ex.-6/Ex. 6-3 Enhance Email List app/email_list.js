"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1");
    var emailAddress2 = $("email_address2");
    var firstName = $("first_name");

    
    let isValid = true;
    if (emailAddress1.value == "") {
        emailAddress1.nextElementSibling.textContent = "Required field";
        isValid = false;
    } else {
        emailAddress1.nextElementSibling.textContent = "";
    }
    if (emailAddress2.value == "") {
        emailAddress2.nextElementSibling.textContent = "Required field";
        isValid = false;
    } else {
        emailAddress2.nextElementSibling.textContent = "";
    }
    if (firstName.value == "") {
        firstName.nextElementSibling.textContent = "First name is required";
        isValid = false;
    } else {
        firstName.nextElementSibling.textContent = "";
    }
    if (emailAddress1.value != emailAddress2.value) {
        emailAddress2.nextElementSibling.textContent = "Email addresses must match";
        isValid = false;
    } else {
        emailAddress2.nextElementSibling.textContent = "";
    }

    if (isValid == true) {
        $("email_form").submit();
    }

    // validate the entries
    /*if (emailAddress1 == "") {
    	errorMessage = "First email address entry required";
    } else if (emailAddress2 == "") {
    	errorMessage = "Second email address entry required";
    } else if (emailAddress2 != emailAddress1) {
    	errorMessage = "Email address entries must match";
    } else if (firstName == "") {
    	errorMessage = "First name entry required";
    }

    // submit the form if all entries are valid
    // otherwise, display an error message
    if (errorMessage == "") {
        $("email_form").submit(); 
    } else {
    	alert(errorMessage);
    }*/
};

var clearForm = function() {
    $("email_address1").value = "";
    $("email_address2").value = "";
    $("first_name").value = "";
    $("email_address1").focus();
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("clear_form").onclick = clearForm;
    $("email_address1").focus();
};
