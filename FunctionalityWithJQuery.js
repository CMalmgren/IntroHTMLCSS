$(function () {

    var cards = $("section.cards");
    cards.hide();

    var newGameButton = $("button.newGame");
    newGameButton.click(function () {
        newGameButton.addClass("clicked");
        cards.show();
    });

});