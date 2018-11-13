﻿
function CreateDeck() {

    let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suitValues = ['H', 'C', 'D', 'S'];
    let deck = [];

    cardValues.forEach(function (value) {
        for (var i = 0; i < suitValues.length; i++) {
            let theSuit = suitValues[i];
            let card = value + theSuit;
            deck.push(card);
        }
    });
    return deck;
}

let deck = CreateDeck();
console.log(deck);

function Deal(theDeck) {
    let playerCards = [];
    let computerCards = [];

    for (var i = 0; i < theDeck.length; i++) {
        if (i % 2 === 0) {
            playerCards.push(theDeck[i]);
        }
        else {
            computerCards.push(theDeck[i]);
        }
    }
    return {
        playerCards: playerCards,
        computerCards: computerCards
    };
}

let dealtCards = Deal(deck);
console.log(dealtCards);

function ComputerDrawsCard(allComputerCards) {
    return allComputerCards.pop();
}
let theComputerCard = ComputerDrawsCard(dealtCards.computerCards);


function PlayerDrawsCard(allPlayerCards) {
    return allPlayerCards.pop();
}
let thePlayerCard = PlayerDrawsCard(dealtCards.playerCards)

console.log(theComputerCard);
console.log(thePlayerCard);
console.log(dealtCards);

function ScoreCards(card1, card2) {
    let value1 = card1.charAt(0);
    let suit1 = card1.charAt(1);
    let value2 = card2.charAt(0);
    let suit2 = card2.charAt(1);

    if (value1 === value2 || suit1 === suit2) return 1;
    else return -1;
}

let score = 0;

for (var i = 0; i < 4; i++) {  //en låtsasomgång

    theComputerCard = ComputerDrawsCard(dealtCards.computerCards)
    thePlayerCard = PlayerDrawsCard(dealtCards.playerCards)

    let scoreDelta = ScoreCards(thePlayerCard, theComputerCard);

    score += scoreDelta;
    console.log(scoreDelta)
    console.log(score);
}
