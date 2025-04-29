"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

function myClick() {
    var totalInvest = parseInt($('investment').value);
    var rate = parseFloat($('rate').value);
    rate = rate.toFixed(1);
    var years = parseInt($('years').value);
    var future_value = parseFloat($('future_value').value);
    var total;

    if (isNaN(totalInvest) || totalInvest < 0) {
        alert('Investment must be greater than zero')
    }
    else if (isNaN(rate) || rate <= 0 || rate >= 16) {
        alert('Rate must be greater zero and less 15%')
    }
    else if (isNaN(years) || years <= 0) {
        alert('Years must be greater than zero')
    }
    else {
        for (var i = 1; i <= years; i++ )
            totalInvest += totalInvest * rate / 100;
        $('future_value').value = totalInvest.toFixed(2);
    }


};

window.onload = function() {
    $('calculate').addEventListener('click', myClick)
};