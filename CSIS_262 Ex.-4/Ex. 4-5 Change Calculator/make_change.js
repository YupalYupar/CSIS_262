"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var makeChange = function(cents) {
    $("quarters").value = parseInt((cents / 25));
    cents = cents % 25;

    $("dimes").value = parseInt(cents / 10);
    cents = cents % 10;

    $("nickels").value = parseInt(cents / 5);
    cents = cents % 5;

    $("pennies").value = parseInt(cents / 1);
};

var processEntry = function() {
    var cents = parseInt($("cents").value);

    if (isNaN(cents) || cents < 0 || cents > 99) {
        alert("Cents must be number and between 0 and 99");
    }
    else {
        makeChange(cents);
        $("cents").focuse();
    }
};

window.onload = function() {
    $("calculate").addEventListener("click", processEntry);
    $("cents").focus();
};
