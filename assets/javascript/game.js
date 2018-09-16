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
    var resetGame = false;

    // Target IDs ////

    targetScore = $("#score")
    targetLives = $("#lives")
    targetPrimaryNumber = $("#primaryNumber")
    targetPlayerNumber = $("#playerNumber")
    targetWinPanel = $("#winPanel")
    targetLossPanel = $("#lossPanel") 

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
        console.log("The value of primaryNumber (within this function) is: " + primaryNumber);
        gameStatus = true;
    } //completed

    // Performs randomNum function for each crystal at start of each round/game.
    function setCrystals() {
        // Function expression, randomNum(1,12);
        crystal1 = randomNum(1,12);
        crystal2 = randomNum(1,12);
        crystal3 = randomNum(1,12);
        crystal4 = randomNum(1,12);
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
        if (resetGame == true && gameStatus == true) {
            gameStatus = false;
            winCounter = 0;
            lossCounter = 0;
            score = 0;
            livse = 5;
            primaryNumber = "";
            playerNumber = "";
            resetGame = false;
        }
    } //stopped here

    // Checks if the playerNumber is equal to (or larger than) the primaryNumber.
    function winLoseCheck() {
        $(document).on("click", function() {
            if (playerNumber == primaryNumber) {
                winCounter++;
                score = score + playerNumber;
                playerNumber = 0;
                ////
                console.log("You Won!");
            } else if (playerNumber > primaryNumber) {
                lossCounter++;
                score = score - playernumber;
                playerNumber = 0;
                ////
                console.log("You Lost!");
            }
        })
    } //completed

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
    setPrimaryNumber();
    ////
    console.log("primaryNumber: " + primaryNumber);

    setCrystals();
    ////
    console.log("crystal1: " + crystal1);
    console.log("crystal2: " + crystal2);
    console.log("crystal3: " + crystal3);
    console.log("crystal4: " + crystal4);

    crystalCalc();
    winLoseCheck();

    


    


});