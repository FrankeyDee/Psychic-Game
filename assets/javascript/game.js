

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    

    let computerChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let wins = 0;
    let loss = 0;
    let guessLeft = 9;
    let letter = [];

    updatePage();

    function computersTurn() {
        return computerChoice[Math.floor(Math.random()*25)];
    };
    
    function updatePage() {
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        document.querySelector("#loss").innerHTML = "Losses: " + loss;
        document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letter;
        document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessLeft;
    }

    let computerGuess = computersTurn()
        console.log(computerGuess);

    document.onkeyup = function (myGuess) {
        console.log(myGuess.key);
        if(myGuess.key === computerGuess) {
            wins++;
            computerGuess = computersTurn();
            console.log(computerGuess);
            updatePage();
        }
        else {
            loss++;
            console.log(loss);
            guessLeft--;
            letter.push(myGuess.key);
            updatePage();
        }
        if(guessLeft < 0) {
            alert("Game Over!");
            location.reload();
        }
                   
        };    

});

