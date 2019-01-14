// Assignment: unit-4-game
// File: game.js
// Programmer: Sohail Zafar

// Global variables
var wins = 0;
var losses = 0;
var computerRandomNumberPick = 0;
var CrystalValue_1 = 0;
var CrystalValue_2 = 0;
var CrystalValue_3 = 0;
var CrystalValue_4 = 0;
var playerTotalScore = 0;


// Generates random number for game from: 19 to 120. Place computer generated number to UI and set play's score to 0.
function computerRandomNumberAndInializeUI() {
 computerRandomNumberPick = Math.floor((Math.random() * 120) + 19);
 $("#randomNumber").text(computerRandomNumberPick);
 $("#playerScoreTextNumber").text(playerTotalScore);
}


// Crystal's value random number generator function. Generates number from 1 to 12.
function crystalValueRandomNumber() {
    CrystalValue_1 = Math.floor((Math.random() * 12) + 1);
    CrystalValue_2 = Math.floor((Math.random() * 12) + 1);
    CrystalValue_3 = Math.floor((Math.random() * 12) + 1);
    CrystalValue_4 = Math.floor((Math.random() * 12) + 1);
   
}

// Main game function. Respond to user selections, update player score and call testForWinOrLost function to test
// for a win or lost.
function mainGameFunction(){
   
    $("._1CrystalImage").on("click",function() {
        playerTotalScore = playerTotalScore + CrystalValue_1;
        $("#playerScoreTextNumber").text(playerTotalScore);
        testForWinOrLost();        
    });

    $("._2CrystalImage").on("click",function() {
        playerTotalScore = playerTotalScore + CrystalValue_2;
        $("#playerScoreTextNumber").text(playerTotalScore);
        testForWinOrLost();
    });

    $("._3CrystalImage").on("click",function() {
        playerTotalScore = playerTotalScore + CrystalValue_3;
       $("#playerScoreTextNumber").text(playerTotalScore);
        testForWinOrLost();
    });

    $("._4CrystalImage").on("click",function() {
        playerTotalScore = playerTotalScore + CrystalValue_4;
        $("#playerScoreTextNumber").text(playerTotalScore);
        testForWinOrLost();
    });
} 

// Game test for loss and win function. If win or lose update UI and start game over
function testForWinOrLost() {
    if (playerTotalScore > computerRandomNumberPick) {
        losses += 1;
        playerTotalScore = 0;
        $("#lossesNumber").text(losses);
        // Start game over
        computerRandomNumberAndInializeUI();
        crystalValueRandomNumber();
        mainGameFunction();

    }
    if (playerTotalScore === computerRandomNumberPick) {
        wins += 1;
        playerTotalScore = 0;
        $("#winsNumber").text(wins);
        // Start game over
        computerRandomNumberAndInializeUI();
        crystalValueRandomNumber();
        mainGameFunction();

    }
}

// Call functions to begin game.
computerRandomNumberAndInializeUI();
crystalValueRandomNumber();
mainGameFunction();
