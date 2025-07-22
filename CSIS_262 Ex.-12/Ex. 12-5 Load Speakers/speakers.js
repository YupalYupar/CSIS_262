 $(document).ready(function() {
    $("#nav_list a").click(function() {
        var title = this.getAttribute("title");
        $("main").html("");
        $.getJSON("json_files/" + title +".json", function(data) {
            $.each(data, function() { 
                $.each(this, function(key, value) {
                    $("main").append(
                        "<h1>" + value.title + "</h1>" +
                        "<img src='" + value.image + "'>" +
                        "<h2>" + value.month + "<br>" + value.speaker + "</h2>" +
                        "<p>" + value.text + "</p>"
                    );
                });
            });

        });
    });
});// end ready