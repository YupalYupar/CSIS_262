"use strict";
$(document).ready(function() {
    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
    });
    /*$("#accordion h3").click(function(evt) {
        $(this).toggleClass("minus");
        if ($(this).attr("class") !== "minus") {
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }
        evt.preventDefault();
    }); // end click
    $("#accordion").find("a:first").focus();*/
}); // end ready