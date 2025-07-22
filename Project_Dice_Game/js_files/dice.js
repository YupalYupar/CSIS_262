$(document).ready(function() {

    $("#player1_name").focus();

    var colorChange1 = function() {
        var player1_color=$("#player1_color").val();

        if (player1_color === "red") {
            $(".user_color1").css("backgroundColor", "red");
        } else if (player1_color === "green") {
            $(".user_color1").css("backgroundColor", "green");
        } else if (player1_color === "purple") {
            $(".user_color1").css("backgroundColor", "purple");
        }
    };
    
    $("#player1_color").on("change", function() {
        colorChange1();
    });

    var colorChange2 = function() {
        var player2_color=$("#player2_color").val();

        if (player2_color === "aqua") {
            $(".user_color2").css("backgroundColor", "aqua");
        } else if (player2_color === "pink") {
            $(".user_color2").css("backgroundColor", "pink");
        } else if (player2_color === "orange") {
            $(".user_color2").css("backgroundColor", "orange");
        }
    };
    
    $("#player2_color").on("change", function() {
        colorChange2();
    });

    $("#players_setup").submit(function(event) {
        $("#player1_name").focus();
		var isValid = true;

        var name1 = $("#player1_name").val().trim();
		if (name1 == "") {
			$("#player1_name").next().next().text("Required field");
			isValid = false;
        } else if (name1.length > 6) {
            $("#player1_name").next().next().text("6 or less letters");
            isValid = false;
		} else {
			$("#player1_name").next().next().text("");
		}
		$("#player1_name").val(name1);
        

        var name2 = $("#player2_name").val().trim();
		if (name2 == "") {
			$("#player2_name").next().next().text("Required field");
			isValid = false;
        } else if (name2.length > 6) {
            $("#player2_name").next().next().text("6 or less letters");
            isValid = false;
		} else {
			$("#player2_name").next().next().text("");
		}
		$("#player2_name").val(name2);

        if (isValid == true) {
            localStorage.setItem('ply1_name', $("#player1_name").val());
            localStorage.setItem('ply1_color', $("#player1_color option:selected").val());
            localStorage.setItem('ply2_name', $("#player2_name").val());
            localStorage.setItem('ply2_color', $("#player2_color option:selected").val());
            window.location.href = 'game.html';
        }

        if (isValid == false) {
			event.preventDefault();
		};
    });
});