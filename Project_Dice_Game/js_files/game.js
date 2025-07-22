$(document).ready(function(){
    $(".player1_col").text(localStorage.getItem('ply1_name'));
    $(".player1_col").css("backgroundColor",localStorage.getItem('ply1_color'));
    $(".player2_col").text(localStorage.getItem('ply2_name'));
    $(".player2_col").css("backgroundColor",localStorage.getItem('ply2_color'));

        var pics = ["url(images/dice_1.png)", "url(images/dice_2.png)", "url(images/dice_3.png)", 
                    "url(images/dice_4.png)", "url(images/dice_5.png)", "url(images/dice_6.png)",];


        let array1 = [];
        let array2 = [];
        let count = 0;
        let sum1 = 0;
        let sum2 = 0;
        $(".dice_button").on('click', function(){
            $(".dice_img").slideUp( 100,)  
		    .slideDown( 100,);
            const randomNumber = Math.floor(Math.random() * pics.length);
            var img = pics[randomNumber];
            
            $(".dice_img").css("backgroundImage", img);
            count++;
            if (count %2 !== 0) {
                array1.push(randomNumber + 1);
                $(".gamer1").append("<p>" + array1.at(-1) + "</p>");
            }  if (count % 2 == 0) {
                array2.push(randomNumber + 1);
                $(".gamer2").append("<p>" + array2.at(-1) + "</p>");
            }  if (array2.length == 5) {
                $(".dice_button").prop('disabled', true);
                $(".dice_button").val("GAME OVER");
                array1.forEach(number => {
                    sum1 += number;
                });
                array2.forEach(number => {
                    sum2 += number;
                });
                $(".gamer1").append("<p class='sum1'>" + sum1 + "</p>");
                $(".gamer2").append("<p class='sum2'>" + sum2 + "</p>");
                if ( sum1 > sum2 ) {
                    $(".gamer1").append("<p> WINNER </p>");
                } else if (sum1 == sum2) {
                    $(".gamer2").append("<p> DRAW </p>");
                    $(".gamer1").append("<p> DRAW </p>");
                } else if (sum1 < sum2) {
                    $(".gamer2").append("<p> WINNER </p>");
                };
                $(".again_button").prop('disabled', false);
            };
        });
        $(".again_button").on("click", function() {
            array1.length = 0;
            array2.length = 0;
            count = 0;
            sum1 = 0;
            sum2 = 0;
            $(".gamer1").text("");
            $(".gamer2").text("");
            $(".dice_img").css("backgroundImage", "url(images/dice.png)");
            $(".dice_button").val("Roll the Dice");
            $(".dice_button").prop('disabled', false);
            $(".again_button").prop('disabled', true);
        });
    });