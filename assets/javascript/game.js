$(document).ready(function() {

    // Variables ////

    var winCounter = 0;
    var lossCounter = 0;
    var score = 0;
    var lives = 5;
    var primaryNumber = 0;
    var playerNumber = 0;
    var rand;

    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;

    // Boolean Variables ////

    var gameStatus = false;
    var resetGame = false;

    // Target IDs ////

    targetScore = $("#score")
    targetLives = $("#lives")
    targetPrimaryNumber = $("#primaryNumber")
    targetPlayerNumber = $("#playerNumber")
    targetWinPanel = $("#winPanel")
    targetLossPanel = $("#lossPanel")

    // Function Declaration ////

    // Generate a random integer between two variables.
    function randomNum(lower, upper) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }

    // Generates a random integer between 19-120 and assigns it to the variable rand.
    function setPrimaryNumber() {
        // Function expression, randomNum(19,120);
        rand = randomNum(19, 120);
        ////
        console.log("The value of rand is: " + rand);
    }

    // Performs randomNum function for each crystal at start of each round/game.
    function setCrystals() {
            crystal1 = function() {
                randomNum(1,12);
                // console.log("crystal1: " + crystal1);
            }
            crystal2 = function() {
                randomNum(1,12);
                // console.log("crystal2: " + crystal2);
            }
            crystal3 = function() {
                randomNum(1,12);
                // console.log("crystal3: " + crystal3);
            }
            crystal4 = function() {
                randomNum(1,12);
                // console.log("crystal4: " + crystal4);
            }
    } // Stopped here for the night, I think I am having an issue with scope.
   
    

    // Resets win/lose counters, score, lives, and clears primary/player numbers.
    function resetGame() {
        // If-Then statement, IF resetGame==true, THEN execute the following code.
            // Assign "false" to gameStatus;
            // Assign 0 to winCounter.
            // Assign 0 to LossCounter.
            // Assign 0 to score.
            // Assign 5 to lives.
            // Assign "" to primaryNumber.
            // Assign "" to playerNumber.
            // Assign "false" to resetGame.
    }
    
    // Registers each mouse-click and adds an integer to playerNumber.
    function crystalAdd(crystal) {
        // for-loop iterates 4 times to create the 4 on-click events needed to add the integers into playerNumber.
            // Targets crystal, then on-click adds a value into the given variable.
            // function expression written to iterate in for-loop for each crystal.
    }

    // Checks if the playerNumber is equal to (or larger than) the primaryNumber.
    function winLoseCheck(primary, player) {
        // If-Then statement, IF playerNumber==primaryNumber THEN player wins.
            // increment winCounter.
            // Take playerNumber and += to score.
            // Assign 0 to playerNumber.
            // Callback function, randomNum() for primaryNumber.

        // ELSE IF, playerNumber > primaryNumber THEN player losses.
            // increment loseCounter.
            // Take playerNumber and += to score.
            // Assign 0 to playerNumber.
            // Callback function, randomNum() for primaryNumber.
    }

    // Begin Main Game Code ////
    setPrimaryNumber();
    setCrystals();

    console.log("the value of rand is: " + rand);
    console.log(crystal1,crystal2,crystal3,crystal4);

        

        



// $("button").click(function() {
//     $("p").slideToggle();
// });

// $("#gen").on("click", function(lower, upper) {
//     var min = $("#lower").val();
//     var max = $("#upper").val();
//     var rand =  Math.floor(Math.random() * (max - min + 1)) + min;
//     var total = rand + parseInt(min);
// $("#random").prepend("<p>" + total + "</p>");
// });

});