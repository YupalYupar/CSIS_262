"use strict";
var $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;
var Interval;

var displayCurrentTime = function() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    
    $("hours").firstChild.nodeValue = hours;
    $("minutes").firstChild.nodeValue = padSingleDigit(now.getMinutes());
    $("seconds").firstChild.nodeValue = padSingleDigit(now.getSeconds());
    $("ampm").firstChild.nodeValue = ampm;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

var tickStopwatch = function() {
     elapsedMilliseconds += 10;
     if (elapsedMilliseconds <= 90) {
        $("s_ms").textContent = "0" + elapsedMilliseconds;
     }
     if (elapsedMilliseconds > 90) {
        $("s_ms").innerHTML = elapsedMilliseconds;
     }
     if (elapsedMilliseconds > 999) {
        elapsedSeconds++;
        $("s_seconds").innerHTML = "0" + elapsedSeconds;
        elapsedMilliseconds = 0;
        $("s_ms").innerHTML = "00" + 0;
     }
     if (elapsedSeconds > 9) {
        $("s_seconds").innerHTML = elapsedSeconds;
     }
     if (elapsedSeconds > 59) {
        elapsedMinutes++;
        $("s_minutes").innerHTML = "0" + elapsedMinutes;
        elapsedSeconds = 0;
        $("s_seconds").innerHTML = "0" + 0;
        elapsedMilliseconds = 0;
        $("s_ms").innerHTML = "00" + 0;
     }
     if (elapsedMinutes > 9) {
        $("s_minutes").innerHTML = elapsedMinutes;
     }
    // increment milliseconds by 10 milliseconds
    
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    
    // if seconds total 60, increment minutes by one and reset seconds to zero
    
    //display new stopwatch time
    
};

// event handler functions
var startStopwatch = function(evt) {
    clearInterval(Interval);
    Interval = setInterval(tickStopwatch, 10);
    // prevent default action of link
        
    // do first tick of stop watch and then set interval timer to tick 
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.
    
};

var stopStopwatch = function(evt) {
        clearInterval(Interval);
    // prevent default action of link
        
    // stop timer
    
};

var resetStopwatch = function(evt) {
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;

    $("s_ms").innerHTML = "000";
    $("s_seconds").innerHTML = "00";
    $("s_minutes").innerHTML = "00"
    // prevent default action of link
        
    // stop timer
        
    // reset elapsed variables and clear stopwatch display
    
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    $("start").onclick = () => {
        startStopwatch();
    };
    $("stop").onclick = () => {
        stopStopwatch();
    };
    $("reset").onclick = () => {
        resetStopwatch();
    }
    
    // set up stopwatch event handlers

};