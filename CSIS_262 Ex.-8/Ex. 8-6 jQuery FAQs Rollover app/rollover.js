$(document).ready(function() {
    $("#faq_rollovers h2").hover(function() {
        $(this).next().show();
    },
    function() {
        $(this).next().hide();
    })
}); // end ready