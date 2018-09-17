$(document).ready(function() {

    // Variables ////

    var winCounter = 0;
    var lossCounter = 0;
    var score = 0;
    var lives = 5;

    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    var playerNumber = 0;
    var primaryNumber = 0;
    
    // Boolean Variables ////

    var gameStatus = false;
    var startReset = false;

    // Target IDs ////

    targetScore = $("#score");
    targetLives = $("#lives");
    targetPrimaryNumber = $("#primaryNumber");
    targetPlayerNumber = $("#playerNumber");
    targetNumOfWins = $("#numOfWins");
    targetNumOfLosses = $("#numOfLosses");
    targetStartReset = $("#startReset");

    // Function Declarations ////

    // Generate a random integer between two variables.
    function randomNum(lower, upper) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    } //completed

    // Generates a random integer between 19-120 and assigns it to the variable rand.
    function setPrimaryNumber() {
        // Function expression, randomNum(19,120);
        primaryNumber = randomNum(19, 120);
        $("#primaryNumber").html(primaryNumber);
        ////
        // console.log("The value of primaryNumber (within this function) is: " + primaryNumber);
        gameStatus = true;
    } //completed

    // Performs randomNum function for each crystal at start of each round/game.
    function setCrystals() {
        // Function expression, randomNum(1,12);
        crystal1 = randomNum(1,12);
        crystal2 = randomNum(1,12);
        crystal3 = randomNum(1,12);
        crystal4 = randomNum(1,12);
        ////
        console.log("crystal 1: " + crystal1);
        console.log("crystal 2: " + crystal2);
        console.log("crystal 3: " + crystal3);
        console.log("crystal 4: " + crystal4);
    } //completed
    
    // Grabs corresponding crystal value and adds it to playerNumber, to then display at #playerNumber.
    function crystalCalc() {
        $("#crystal1").on("click", function() {
            playerNumber = playerNumber + crystal1;
            targetPlayerNumber.html(playerNumber);
        });
        $("#crystal2").on("click", function() {
            playerNumber = playerNumber + crystal2;
            targetPlayerNumber.html(playerNumber);
        });
        $("#crystal3").on("click", function() {
            playerNumber = playerNumber + crystal3;
            targetPlayerNumber.html(playerNumber);
        });
        $("#crystal4").on("click", function() {
            playerNumber = playerNumber + crystal4;
            targetPlayerNumber.html(playerNumber);
        });        
    } //completed

    // Resets win/lose counters, score, lives, and clears primary/player numbers.
    function resetGame() {
        if (startReset == true && gameStatus == true) {
            ////
            console.log("The resetGame(); function was called.");
            // gameStatus = false;
            winCounter = 0;
            lossCounter = 0;
            targetNumOfWins.text("__");
            targetNumOfLosses.text("__");
            score = 0;
            lives = 5;
            primaryNumber = 0;
            playerNumber = 0;
            livesSwitchState();
            // startReset = false;
        }
    }

    function resetRound() {
        playerNumber = 0;
        primaryNumber = 0;
        playerNumber = 0;
        setPrimaryNumber();
        targetPlayerNumber.html("");
        setCrystals();
        ////
        console.log("resetRound(); has been called.");
    } //completed

    // Checks if the playerNumber is equal to (or larger than) the primaryNumber.
    function winLoseCheck() {
        $(document).on("click", function() {
            if (playerNumber == primaryNumber) {
                winCounter++;
                targetNumOfWins.text(winCounter);
                score = score + playerNumber;
                targetScore.text(score);
                resetRound();
                ////
                console.log("function winLoseCheck(); has been called. (WIN)")
                console.log("You Won!");
            } else if (playerNumber > primaryNumber) {
                lossCounter++;
                targetNumOfLosses.text(lossCounter);
                lives--;
                livesSwitchState();                
                score = score - playerNumber;
                targetScore.text(score);
                resetRound();
                ////
                console.log("function winLoseCheck(); has been called. (LOSS)")
                console.log("You Lost!");
            }
        })
    } //completed

    function livesSwitchState() {
        switch(lives) {
            case 5:
                targetLives.html("X X X X X");
                break;

            case 4:
                targetLives.html("X X X X");
                break;

            case 3:
                targetLives.html("X X X");
                break;

            case 2:
                targetLives.html("X X");
                break;

            case 1:
                targetLives.html("X");
                break;

            case 0:
                targetLives.html("<h4>" + "GAME OVER!" + "</h4>");
                console.log("You Lost the GAME, hit START to Play again!")
        }
    } //completed

    function gameStartReset() {
        $("#startReset").on("click", function() {
            if (startReset == false) {
                targetStartReset.html("<h4>" + "[ RESET ]" + "</h4>");
                targetLives.html("X X X X X");
                $("img").css("cursor", "pointer");
                gameStatus = true;
                startReset = true;
                ////
                console.log("startReset switched to: " + startReset);
                console.log("gameStatus switched to: " + gameStatus);

                setPrimaryNumber();
                ////
                console.log("primaryNumber: " + primaryNumber);
            
                setCrystals();
                crystalCalc();
                winLoseCheck();

            } else if (startReset == true) {
                // targetStartReset.html("<h4>" + "[ START ]" + "</h4>");
                // $("img").css("cursor", "auto");
                resetGame();
                ////
                console.log("You clicked the RESET button!");
            }
        });
    }

    //------------------------------------------------------------------------//
    //Diagnostic-tools                                                        //
    function consoleClickCheck() {                                            //
        $(document).on("click", function() {
            console.log("playerNumber: " + playerNumber);
            console.log("primaryNumber: " + primaryNumber)
        })
    } //function to console.log on each click.                                //
    // consoleClickCheck(); // Comment-in this line to use the above function.//
    //------------------------------------------------------------------------//

    // Begin Main Game Code ////   
    if (gameStatus == false) {
        console.log("Hit start to proceed");
        targetLives.html("Click here to play! -->");
        gameStartReset();        
    }
});