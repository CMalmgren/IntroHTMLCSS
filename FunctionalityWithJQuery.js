$(function () {

    var cards = $("section.cards");
    cards.hide();

    var newGameButton = $("#newGame");
    newGameButton.click(function () {
        newGameButton.addClass("clicked");
        cards.show();
        
        //enable playing cards

        var sec = 0;
        function pad(val) { return val > 9 ? val : "0" + val; }
        setInterval(function () {
            $("#seconds").html(pad(++sec % 60));
            $("#minutes").html(pad(parseInt(sec / 60, 10)));
        }, 1000);
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