function rollDice() {
    var randomDiceOne = Math.round(Math.random() * 5) + 1;
    var randomDiceTwo = Math.round(Math.random() * 5) + 1;
    var randomDiceThree = Math.round(Math.random() * 5) + 1;
    var randomDiceFour = Math.round(Math.random() * 5) + 1;
    document.getElementById('myDiceOne').setAttribute('src', 'images/d' + randomDiceOne + ".PNG");
    document.getElementById('myDiceTwo').setAttribute('src', 'images/d' + randomDiceTwo + ".PNG");
    document.getElementById('theirDiceOne').setAttribute('src', 'images/e' + randomDiceThree + ".PNG");
    document.getElementById('theirDiceTwo').setAttribute('src', 'images/e' + randomDiceFour + ".PNG");
}