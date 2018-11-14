$(function () {

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

    var cards = $("section.cards");
    cards.hide();

    var newGameButton = $("#newGame");
    newGameButton.click(function () {
        newGameButton.addClass("clicked");
        cards.show();

        //enable playing cards for real at later stage

        var sec = 0;
        function pad(val) { return val > 9 ? val : "0" + val; }
        setInterval(function () {
            $("#seconds").html(pad(++sec % 60));
            $("#minutes").html(pad(parseInt(sec / 60, 10)));
        }, 1000);

        $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/", { count: 52 })
            .done(function (data) {
                console.log(data);
                let playerHand = [];
                let computerHand = [];

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
                });

                playerHand.forEach(function (card) {
                    $("section.cards").append($("<img src= '" + card.image + "'>")
                    );
                });
            })
            .fail(function () {
                console.log("broken");
            });
    });

    $('button'/*döp om till playercard*/).click(function () {
        //implementera spelandet av kortet
        //
    });

    var pauseButton = $("#pause");
    pauseButton.click(function () {
        //timer pause
        //disable ability to play cards
    });

    var playerCard = $("#PlayerCard");
    playerCard.click(function () {
        let newEl = $("<strong>Played! </strong>");
        playerCard.append(newEl);
        newEl.hide(6000);
    });
});
