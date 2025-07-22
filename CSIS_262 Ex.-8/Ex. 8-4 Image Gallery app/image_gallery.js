"use strict";
$(document).ready(function() {
    $("#image_list a").each(function() {
        var curentURL = $(this).attr("href");
        var currentCaption = $(this).attr("title");

        var image = new Image();
        image.src = curentURL;

        $(this).click(function(evt) {
            
            $("#gallery img").attr("src", curentURL);
            $("#caption").text(currentCaption);
            
            evt.preventDefault();
        });$("li:first-child a").focus();
    })
})