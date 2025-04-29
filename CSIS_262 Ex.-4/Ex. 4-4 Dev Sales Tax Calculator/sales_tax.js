"use strict";

var $ = function (id) {
    return document.getElementById(id); 
};

var salesTaxCount = function(subtotal,taxRate) {
    var salesTax = (subtotal * taxRate / 100);
    salesTax = salesTax.toFixed(2);
    return salesTax;
};

var totalCount = function(subtotal, taxRate) {
    var total = subtotal + (subtotal * taxRate / 100);
    total = total.toFixed(2);
    return total;
};

var processEntries = function() {
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("tax_rate").value);

    if (isNaN(subtotal) || subtotal<= 0 || subtotal > 10000) {
        alert("Subtotal must be > 0 and < 10000");
    }
    else if (isNaN(taxRate) || taxRate <= 0 || taxRate > 12) {
        alert(" Tax Rate must be > 0 and < 12")
    }
    else {
        $("sales_tax").value = salesTaxCount(subtotal, taxRate);
        $("total").value = totalCount(subtotal, taxRate);
        $("subtotal").focus();
    };
};
var clearEntries = function() {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
};
var clearSubtotal = function(){
    $("subtotal").value = "";
};
var clearTaxRate = function(){
    $("tax_rate").value = "";
};

window.onload = function() {
    $("calculate").addEventListener("click", processEntries);
    $("subtotal").focus();
    $("clear").onclick = clearEntries;
    $("subtotal").addEventListener("click", clearSubtotal);
    $("tax_rate").addEventListener("click", clearTaxRate);
};
