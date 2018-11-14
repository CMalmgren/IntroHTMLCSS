$(function () {

    let paused = false;
    let playerHand = [];
    let computerHand = [];
    let currentComputerCard = undefined;
    let currentPlayerCard = undefined;

    var cards = $("section.cards");
    cards.hide();

    var newGameButton = $("#newGame");
    newGameButton.click(function () {
        newGameButton.addClass("clicked");
        cards.show();

        var sec = 0;
        function pad(val) { return val > 9 ? val : "0" + val; }
        setInterval(function () {
            $("#seconds").html(pad(++sec % 60));
            $("#minutes").html(pad(parseInt(sec / 60, 10)));
        }, 1000);

        $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/", { count: 52 })
            .done(function (data) {
                console.log(data);

                let index = 0;
                data.cards.forEach(function (card) {

                    if (index % 2 == 0) {
                        playerHand.push(card);
                        index++;
                    }
                    else {
                        computerHand.push(card);
                        index++;
                    }

                    SetPlayerCard(currentPlayerCard);
                });
            })
            .fail(function () {
                console.log("This is broken");
            });
    });

    function ComputerDrawsCard(computerHand, CardDrawnFunction) {
        //setTimeout(function () {
        CardDrawnFunction(computerHand.pop());
        /*}, Math.floor(Math.random() * 6000) + 3000);*/  //3-6 sekunder
    }

    setInterval(function () {
        ComputerDrawsCard(computerHand, function (theCard) {
            currentComputerCard = theCard;
            if (currentComputerCard !== undefined) {
                $("#ComputerCard img").attr("src", theCard.image);
            }
        });
    }, Math.floor(Math.random() * 6000) + 3000); //3-6 sekunder


    var pauseButton = $("#pause");
    pauseButton.click(function () {
        //timer pause  if pause is false så kan saker köras. ändra om pauseknappen till play när den är intryckt
        //disable ability to play cards
    });

    var playerCard = $("#PlayerCard");
    playerCard.click(function () {
        if (currentComputerCard !== undefined && currentPlayerCard !== undefined) {
            ScorePoints(currentPlayerCard, currentComputerCard)
        }

        SetPlayerCard(playerHand.pop())
        let newEl = $("<strong> Played! </strong>");
        playerCard.append(newEl);
        newEl.hide(6000);

    });

    function SetPlayerCard(card) {

        currentPlayerCard = card;
        if (currentPlayerCard !== undefined) {
            $("#PlayerCard img").attr("src", card.image);
        }
    }

    function ScorePoints(card1, card2) {
        if (card1.value === card2.value || card1.suit === card2.suit) {
            score += 1;
        }
        else score -= 1;

    }
});

//ToDo: Implementera pausen, visa upp score dynamiskt

//To future Carro: For sanity, keep these as examples....

    //$.getJSON("https://deckofcardsapi.com/api/deck/new/shuffle/", { deck_count: 1 })
    //    .done(function (data) {
    //        console.log(data);
    //        console.log(data.remaining);
    //    })
    //    .fail(function () {
    //        console.log("broken");
    //    });

    //let deckID = "v9nakxwl741h";
    //let url = "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/";
    //$.getJSON(url, { count: 26 })
    //    .done(function (data) {
    //        console.log(data);

    //        data.cards.forEach(function (card) {
    //            $("section.cards").append($("<img src= '" + card.image + "'>")
    //            );
    //        });
    //    })
    //    .fail(function () {
    //        console.log("broken");
    //    });