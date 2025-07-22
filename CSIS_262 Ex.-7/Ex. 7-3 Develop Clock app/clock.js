"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    var currenTime = new Date();
    var hours = currenTime.getHours();
    var minutes = currenTime.getMinutes();
    var seconds = currenTime.getSeconds();
    if (hours == 12) {
        $("hours").textContent = hours
        $("minutes").textContent = minutes;
        $("seconds").textContent = seconds;
        $("ampm").textContent = "PM";
    } else if (hours > 12) {
        $("hours").textContent = hours - 12;
        $("minutes").textContent = minutes;
        $("seconds").textContent = seconds;
        $("ampm").textContent = "PM";
    } else if (hours == 0) {
        $("hours").textContent = 12;
        $("minutes").textContent = minutes;
        $("seconds").textContent = seconds;
        $("ampm").textContent = "AM";
    } else {
        $("hours").textContent = hours;
        $("minutes").textContent = minutes;
        $("seconds").textContent = seconds;
        $("ampm").textContent = "AM";
    }

};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
    displayCurrentTime();
    setInterval( () => {displayCurrentTime()},1000);
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
};