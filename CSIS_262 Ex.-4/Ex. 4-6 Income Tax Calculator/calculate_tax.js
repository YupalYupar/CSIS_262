"use strict";
var $ = function (id) {
    return document.getElementById(id);
};
var taxAmouny;

var calculateTax = function(income) {
    if (income >= 0 && income <= 9700) {
        taxAmouny = parseFloat(income * 0.1);
        taxAmouny = taxAmouny.toFixed(2);
    }
    else if (income > 9700 && income <= 39475) {
        taxAmouny = parseFloat(970 + (income - 9700) * 0.12);
        taxAmouny = taxAmouny.toFixed(2);
    }
    else if (income > 39475 && income <= 84200) {
        taxAmouny = parseFloat(4543 + (income - 39475) * 0.22);
        taxAmouny = taxAmouny.toFixed(2);
    }
    else if (income > 84200 && income <= 160725) {
        taxAmouny = parseFloat(14382.5 + (income - 84200) * 0.24);
        taxAmouny = taxAmouny.toFixed(2);
    }
    else if (income > 160725 && income <= 204100) {
        taxAmouny = parseFloat(32748.5 + (income - 160725) * 0.32);
        taxAmouny = taxAmouny.toFixed(2);
    }
    else if (income > 204100 && income <= 510300) {
        taxAmouny = parseFloat(46628.5 + (income - 204100) * 0.35);
        taxAmouny = taxAmouny.toFixed(2);
    }
    else if (income > 510300) {
        taxAmouny = parseFloat(153798.5 + (income - 510300) * 0.37);
        taxAmouny = taxAmouny.toFixed(2);
    }
    return taxAmouny;
};

var processEntry = function() {
    var income = $("income").value;
    income = parseInt(income);

    if ( isNaN(income) || income < 0 ) {
        alert("Income tax must be number and greater than 0");
        $("income").focus();
    }
    else {
        calculateTax(income);
        $("income").focus();
        $("tax").value = taxAmouny;
    }
};

window.onload = function () {
    $("calculate").addEventListener("click", processEntry);
    $("income").focus();
};

/*     Unmarried Individuals (other than surviving spouses and heads of households)
 

                     Taxable Income     2019 Tax

Not over $9,700                              10% of the taxable income

Over $9,700 but not over $39,475             $970 plus 12% of excess over $9,700

Over $39,475 but not over $84,200            $4,543 plus 22% of the excess over $39,475

Over $84,200 but not over $160,725           $14,382.50 plus 24% of the excess over $84,200

Over $160,725 but not over $204,100          $32,748.50 plus 32% of the excess over $160,725

Over $204,100 not over $510,300              $46,628.50 plus 35% of the excess over $204,100

Over $510,300                                $153,798.50 plus 37% of the excess over $510,300 */