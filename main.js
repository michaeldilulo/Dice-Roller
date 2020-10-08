let playerOneDicePoints = 0;
let playerTwoDicePoints = 0;
let playerTieDicePoints = 0;

const rollDice = () => {
    let randomDiceOne = Math.round(Math.random() * 5) + 1;
    let randomDiceTwo = Math.round(Math.random() * 5) + 1;
    let randomDiceThree = Math.round(Math.random() * 5) + 1;
    let randomDiceFour = Math.round(Math.random() * 5) + 1;
    let diceRollAlts = ['roll: 1', 'roll: 2', 'roll: 3', 'roll: 4', 'roll: 5', 'roll: 6']

    document.getElementById('myDiceOne').setAttribute('src', 'images/d' + randomDiceOne + ".PNG");
    document.getElementById('myDiceTwo').setAttribute('src', 'images/d' + randomDiceTwo + ".PNG");
    document.getElementById('theirDiceOne').setAttribute('src', 'images/e' + randomDiceThree + ".PNG");
    document.getElementById('theirDiceTwo').setAttribute('src', 'images/e' + randomDiceFour + ".PNG");
    document.getElementById('myDiceOne').setAttribute('alt', diceRollAlts[randomDiceOne - 1]);
    document.getElementById('myDiceTwo').setAttribute('alt', diceRollAlts[randomDiceOne - 1]);
    document.getElementById('theirDiceOne').setAttribute('alt', diceRollAlts[randomDiceOne - 1]);
    document.getElementById('theirDiceTwo').setAttribute('alt', diceRollAlts[randomDiceOne - 1]);

    diceRollHighest(randomDiceOne, randomDiceTwo, randomDiceThree, randomDiceFour);
    diceRollerScoreCount(randomDiceOne, randomDiceTwo, randomDiceThree, randomDiceFour);
}

const diceRollHighest = (randomDiceOne, randomDiceTwo, randomDiceThree, randomDiceFour) => {
    let playerPoints = randomDiceOne + randomDiceTwo;
    let opponentPoints = randomDiceThree + randomDiceFour;
    let gif = diceRollerWinner(playerPoints, opponentPoints);

    document.getElementById('gifMessage').setAttribute('src', 'images/' + gif);
}

const diceRollerWinner = (diceRollPlayerOne, diceRollPlayerTwo) => {
    if (diceRollPlayerOne > diceRollPlayerTwo) {
        return "diceWinner.gif"

    } else if (diceRollPlayerTwo > diceRollPlayerOne) {
        return "diceloser.gif"
    }
    if (diceRollPlayerOne === diceRollPlayerTwo) {
        return "diceTie.gif"
    }
}

const diceRollerScoreCount = (randomDiceOne, randomDiceTwo, randomDiceThree, randomDiceFour) => {
    let playerPoints = randomDiceOne + randomDiceTwo;
    let opponentPoints = randomDiceThree + randomDiceFour;

    if (playerPoints > opponentPoints) {
        playerOneDicePoints++;
        let playerOneScoreElem = document.getElementById('playerOneScoreTotal');
        playerOneScoreElem.innerText = playerOneDicePoints.toString();
    } else if (opponentPoints > playerPoints) {
        playerTwoDicePoints++;
        let playerTwoScoreElem = document.getElementById('playerTwoScoreTotal');
        playerTwoScoreElem.innerText = playerTwoDicePoints.toString();
    } else {
        playerTieDicePoints++;
        let playerTieScoreElem = document.getElementById('playerTieScoreTotal');
        playerTieScoreElem.innerText = playerTieDicePoints.toString();
    }
}
