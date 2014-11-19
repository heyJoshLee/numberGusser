var playerChoice = 0;
var max = 100;
var min = 1;
var guess = 0;
var guessNum = 0;
var searchType = "Linear search";

var startGuessing = function () {
        playerChoice = $("#playerChoice").val();
        if (playerChoice > 100 || playerChoice < 1 || playerChoice % 1 !== 0) {
            alert("Please pick a whole number between 1 and 100.");
        } else {
            min = 1;
            max = 100;
            guess = 0;
            guessNum = 0;
            $('#answer').remove();

                //Binary Search
            if (searchType === "Binary search" && playerChoice !== guess) {
                while (guess != playerChoice) {
                    guessNum += 1;
                    guess = Math.floor((min + max) / 2);
                    console.log(guess);
                    if (guess > playerChoice) {
                        max = guess - 1;
                        console.log("new max: " + max);
                    }
                    if (guess < playerChoice) {
                        min = guess + 1;
                        console.log("new min: " + min);
                    }
                    //$("#guessBank").append(guess + "<br>").addClass('animated fadeInDown');;
                }
                console.log("Is your number " + guess);
                //Linear Search
            } else if (searchType === "Linear search") {
                while (guess != playerChoice) {
                    guessNum += 1;
                    console.log(guess);
                    guess += 1;
                }
            }
            $("#guessShow").html("<p id='answer'>Your number is: " + guess + "<br> Number of guesses: " + guessNum + "</p>");
        }
    };

$("button").click(function () {
    startGuessing();
});

$("#dropDown").change(function () {
    searchType = document.getElementById("dropDown").value;
});