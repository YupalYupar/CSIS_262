"use strict";
$(document).ready(function() {
    $("#jdom a").click(function() {

        var divTag = $(this).prev();
        
        divTag.toggleClass("hide");
        if(divTag.hasClass("")) {
            $(this).text("Show less");
        } else if (divTag.hasClass("hide")) {
                $(this).text("Show more");
        }
    })
})