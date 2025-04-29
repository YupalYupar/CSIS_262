"use strict";
var $ = function(id) {
    return document.getElementById(id);
};
function calculateMpg(miles, gallons) {
	var mpg = (miles / gallons);
	mpg = mpg.toFixed(1);
	return mpg;
};
var processEntries = function() {
    var miles = $("miles").value;
    var gallons = $("gallons").value;
    var isValid = true;

    if (isNaN(miles) || miles <= 0) {
        $("miles").nextElementSibling.textContent = "Miles must be numeric and greater than zero";
        isValid = false;
    } else {
        $("miles").nextElementSibling.textContent = "";
    }
    if (isNaN(gallons) || gallons <= 0) {
        $("gallons").nextElementSibling.textContent = "Gallons must be numeric and greater than zero";
       	isValid = false;
    } else {
        $("gallons").nextElementSibling.textContent = "";
    }
    if (isValid) {
        $("mpg").value = calculateMpg(miles, gallons);
    }
};
var clearEntries = function() {
	$("miles").value = "";
	$("gallons").value = "";
	$("mpg").value = "";
    $("miles").nextElementSibling.textContent = "*";
    $("gallons").nextElementSibling.textContent = "*";
    $("miles").focus();
};
window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
	$("miles").ondblclick = clearEntries;
    $("miles").focus();
};