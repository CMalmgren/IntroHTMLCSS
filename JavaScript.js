
function CreateDeck() {

    let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suitValues = ['H', 'C', 'D', 'S'];
    let deck = [];

    cardValues.forEach(function (value)
    {
        for (var i = 0; i < suitvalues.length; i++) {
            let theSuit = suitValues[i];
            let card = value + theSuit;
            deck.push(card);
        }
    }
    );
    return deck;
}

let deck = CreateDeck();
console.log(deck);











//let deckOfCards = [], range = 52;
//let playerHand = [], range = 26;
//let computerHand = [], range = 26;


//function GenerateDeckOfCards(deck) {

//    for (var i = 0; i < 52; i++) {
//        if (i < 13) {
//            deck[i] = i + "H";
//        }

//        if (i < 26) {
//            deck[i] = (i - 13) + "S";
//        }

//        if (i < 39) {
//            deck[i] = (i -26) + "D"
//        }

//        else {
//            deck[i] = (i-39) + "C"
//        }
//    }
//    deckOfCards = deck;
//}

//GenerateDeckOfCards(deckOfCards)



//function DealCards() {
//    //Lägga in 26 random kort från arrayen deckOfCards till arrayerna playerCards och computerCards

//};

//function ComputerDraws() {
//    //Poppa computers översta kort från arrayen ComputerHand
//};

//function PlayerDraws() {
// //poppa players översta kort från arrayen playerHand
//};

//function UpdatePoints() {
//  //Kolla om suit eller value matchar och isf öka poängen med 1
//  //annars poäng -1

//};
//GenerateCards(deckOfCards);

//function GenerateCards(deck) {

//    for (let i = 0; i < 13; i++) {
//        if (i = 0)
//            deck[i] = "AH"
//        if (i = 10)
//            deck[i] = "JH"
//        if (i = 11)
//            deck[i] = "QH"
//        if (i = 12)
//            deck[i] = "KH"
//        else deck[i] = (i + 1) + "H"
//    };
//    for (let j = 0; j < 13; j++) {
//        if (j = 0)
//            deck[j + 13] = "AS"
//        if (j = 10)
//            deck[j + 13] = "JS"
//        if (j = 11)
//            deck[j + 13] = "QS"
//        if (j = 12)
//            deck[j + 13] = "KS"
//        else deck[j + 13] = (j + 1) + "S"
//    }
//    for (let k = 0; k < 13; k++) {
//        if (k = 0)
//            deck[k + 26] = "AD"
//        if (k = 10)
//            deck[k + 26] = "JD"
//        if (k = 11)
//            deck[k + 26] = "QD"
//        if (k = 12)
//            deck[k + 26] = "KD"
//        else deck[k + 26] = (k + 1) + "D"
//    }
//    for (let l = 0; l < 13; l++) {
//        if (l = 0)
//            deck[l + 39] = "AC"
//        if (l = 10)
//            deck[l + 39] = "JC"
//        if (l = 11)
//            deck[l + 39] = "QC"
//        if (l = 12)
//            deck[l + 39] = "KC"
//        else deck[l + 39] = (l + 1) + "C"
//    }
//    return deck;
//}