var globals = {
    min: 1,
    playerChoice: 0,
    max: 100,
    guess: 0,
    guessNum: 0,
    searchType: "Linear search"
}

var startGuessing = function () {
        globals.playerChoice = $("#playerChoice").val();
        if (globals.playerChoice > 100 || globals.playerChoice < 1 || globals.playerChoice % 1 !== 0) {
            alert("Please pick a whole number between 1 and 100.");
        } else {
            globals.min = 1;
            globals.max = 100;
            globals.guess = 0;
            globals.guessNum = 0;
            $('#answer').remove();

            //Binary Search
            if (globals.searchType === "Binary search") {
                while (globals.guess != globals.playerChoice) {
                    globals.guessNum  += 1;
                    globals.guess = Math.floor((globals.min  + globals.max) / 2);
                    console.log(globals.guess);
                    if (globals.guess > globals.playerChoice) {
                        globals.max = globals.guess - 1;
                        console.log("new max: " + globals.max);
                    } else if (globals.guess < globals.playerChoice) {
                        globals.min = globals.guess + 1;
                        console.log("new min: " + globals.min );
                    }

                }
                console.log("Is your number " + globals.guess);
                //Linear Search
            } else if (globals.searchType === "Linear search") {
                while (globals.guess != globals.playerChoice) {
                    globals.guessNum  += 1;
                    console.log(globals.guess);
                    globals.guess += 1;
                }
            }
            $("#guessShow").html("<p id='answer'>Your number is: " + globals.guess + "<br> Number of guesses: " + globals.guessNum  + "</p>");
        }
    };

$("button").click(function () {
    startGuessing();
});

$("#dropDown").change(function () {
    globals.searchType = document.getElementById("dropDown").value;
});