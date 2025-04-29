"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var baq = $("faqs");
    var h2List = baq.getElementsByTagName("h2");
    var divList = baq.getElementsByTagName("div");

    var h2 = this;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class


    for (var i = 0; i < h2List.length; i++) {
        h2List[i].addEventListener("click", function() {
            document.querySelector(".minus")?.classList.remove("minus");
            div.removeAttribute("class")
            this.classList.add("minus");
            this.nextElementSibling.setAttribute("class", "open");
        })
    }
}

window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();
};