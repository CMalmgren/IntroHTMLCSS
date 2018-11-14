function CreateDeck() {

    const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suitValues = ['h', 'c', 'd', 's'];
    const deck = [];

    cardValues.forEach(function (value) {
        for (var i = 0; i < suitValues.length; i++) {
            const theSuit = suitValues[i];
            const card = value + theSuit;
            deck.push(card);
        }
    });
    return deck;
}

let deck = CreateDeck();
console.log(deck);

function Deal(theDeck) {
    const playerCards = [];
    const computerCards = [];

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
    currentComputerCard: undefined,
};

function ComputerDrawsCard(allComputerCards, CardDrawnFunction) {
    setTimeout(function () {
        CardDrawnFunction(allComputerCards.pop());
    }, Math.floor(Math.random() * 6000) + 3000);  //3-6 sekunder
}

ComputerDrawsCard(dealtCards.computerCards, function (theCard) {
    console.log('this is where the computer card shows up!' + theCard);
    theGame.currentComputerCard = theCard;
});

function PlayerDrawsCard(allPlayerCards, playerDrawFunction) {
    setTimeout(function () {
        playerDrawFunction(allPlayerCards.pop());
    }, 5000);
}

PlayerDrawsCard(dealtCards.playerCards, function (playerCard) {
    console.log("this is the player card: " + playerCard);
    theGame.score += ScoreCards(playerCard, theGame.currentComputerCard)
});
    
function ScoreCards(card1, card2) {
    const value1 = card1.charAt(0);
    const suit1 = card1.charAt(1);
    const value2 = card2.charAt(0);
    const suit2 = card2.charAt(1);

    if (value1 === value2 || suit1 === suit2) return 1;
    else return -1;
    }
