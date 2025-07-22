"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");           
    
    // preload images 
    var links = $("image_list").getElementsByTagName("a");
    var link, image;
    var imageArr = [];
    for (let link of links) {
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        imageArr[imageArr.length] = image;

    }
    

    // attach mouseover and mouseout events for each image
    image1.onmouseover = function() {
        image1.src = imageArr[0].src;
        image1.alt = imageArr[0].alt;
    };
    image1.onmouseout = function() {
        image1.src = imageArr[2].src;
        image1.alt = imageArr[2].alt;
    };
    
    image2.onmouseover = function() {
        image2.src = imageArr[1].src;
        image2.alt = imageArr[1].alt;
    };
    image2.onmouseout = function() {
        image2.src = imageArr[3].src;
        image2.alt = imageArr[3].alt;
    };
};
