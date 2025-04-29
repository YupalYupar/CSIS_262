"use strict";
var $ = function(id) { return document.getElementById(id); };

var convertTemp = function() {
    var userDegree = $("degrees_entered").value;
    if (isNaN(userDegree) || userDegree == "") {
        alert("You must enter a valid number");
        $("degrees_entered").focus();
        clearTextBoxes();
    } 
    else if ($("to_celsius").checked == true) {
        userDegree = (userDegree - 32) * 5/9;
        userDegree = parseInt(userDegree);
        $("degrees_computed").value = userDegree;
    }
    else if ($("to_fahrenheit").checked == true) {
        userDegree = (userDegree * 9/5) + 32;
        userDegree = parseInt(userDegree);
        $("degrees_computed").value = userDegree;
    }
};

var toCelsius = function() {
    $("degree_label_1").textContent = "Enter F degrees:";
    $("degree_label_2").textContent = "Degrees Celsius:";
    clearTextBoxes();
    $("degrees_entered").focus();
};

var toFahrenheit = function() {
    $("degree_label_1").textContent = "Enter C degrees:";
    $("degree_label_2").textContent = "Degrees Fahrenheit:";
    $("degrees_entered").focus()
    clearTextBoxes();
};


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};