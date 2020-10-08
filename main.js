function rollDice() {
    var randomDiceOne = Math.round(Math.random() * 5) + 1;
    var randomDiceTwo = Math.round(Math.random() * 5) + 1;
    var randomDiceThree = Math.round(Math.random() * 5) + 1;
    var randomDiceFour = Math.round(Math.random() * 5) + 1;
    var diceRollAlts = ['roll: 1', 'roll: 2', 'roll: 3', 'roll: 4', 'roll: 5', 'roll: 6']

    document.getElementById('myDiceOne').setAttribute('src', 'images/d' + randomDiceOne + ".PNG");
    document.getElementById('myDiceTwo').setAttribute('src', 'images/d' + randomDiceTwo + ".PNG");
    document.getElementById('theirDiceOne').setAttribute('src', 'images/e' + randomDiceThree + ".PNG");
    document.getElementById('theirDiceTwo').setAttribute('src', 'images/e' + randomDiceFour + ".PNG");

    document.getElementById('myDiceOne').setAttribute('alt', diceRollAlts[randomDiceOne - 1]);
    document.getElementById('myDiceTwo').setAttribute('alt', diceRollAlts[randomDiceOne - 1]);
    document.getElementById('theirDiceOne').setAttribute('alt', diceRollAlts[randomDiceOne - 1]);
    document.getElementById('theirDiceTwo').setAttribute('alt', diceRollAlts[randomDiceOne - 1]);

    diceRollHighest(randomDiceOne, randomDiceTwo, randomDiceThree, randomDiceFour);
}


function diceRollHighest(randomDiceOne, randomDiceTwo, randomDiceThree, randomDiceFour) {
    let playerPoints = randomDiceOne + randomDiceTwo;
    let opponentPoints = randomDiceThree + randomDiceFour;
    let gif = diceRollerWinner(playerPoints, opponentPoints)
    document.getElementById('gifMessage').setAttribute('src', 'images/' + gif);
}

function diceRollerWinner(diceRollPlayerOne, diceRollPlayerTwo) {
    if (diceRollPlayerOne > diceRollPlayerTwo) {
        return "diceWinner.gif"
    }
    if (diceRollPlayerTwo > diceRollPlayerOne) {
        return "diceloser.gif"
    }
    if (diceRollPlayerOne === diceRollPlayerTwo) {
        return "diceTie.gif"
    }
}