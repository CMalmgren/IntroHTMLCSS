
function CreateDeck() {

    let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suitValues = ['H', 'C', 'D', 'S'];
    let deck = [];

    cardValues.forEach(function (value)
    {
        for (var i = 0; i < suitValues.length; i++) {
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
