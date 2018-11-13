
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

let theGame = {
    score: 0,
    currentComputerCard: undefined
};

function ComputerDrawsCard(allComputerCards, CardDrawnFunction) {
    setTimeout(function () {
        let theCard = allComputerCards.pop();
        CardDrawnFunction(theCard);
    }, Math.floor(Math.random() * 6000) + 3000);  //3-6 sekunder
}

ComputerDrawsCard(dealtCards.computerCards, function (theCard) {
    console.log('this is where the computer card shows up!' + theCard);
    theGame.currentComputerCard = theCard;
});

function PlayerDrawsCard(allPlayerCards, playerDrawFunction) {
    setTimeout(function () {
        let playerCard = allPlayerCards.pop();
        playerDrawFunction(playerCard);
    }, 5000);
}

PlayerDrawsCard(dealtCards.playerCards, function (playerCard) {
    console.log("this is the player card: " + playerCard);
    gameState.score += ScoreCards(playerCard, gameState.currentComputerCard)
});
    
function ScoreCards(card1, card2) {
    let value1 = card1.charAt(0);
    let suit1 = card1.charAt(1);
    let value2 = card2.charAt(0);
    let suit2 = card2.charAt(1);

    if (value1 === value2 || suit1 === suit2) return 1;
    else return -1;
}

