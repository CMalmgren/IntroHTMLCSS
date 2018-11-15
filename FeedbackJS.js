$(function () {
    $('#theForm').submit(function (e) {
        e.preventDefault();

        let textInput = $('#textID');
        let happinessInput = $('input[name=happiness]:checked');
        let colorInput = $('#colorID');
        let newRow = $('<tr>');
        let textCell = $('<td>');
        let happinessCell = $('<td>');
        let colorCell = $('<td>');

        textCell.text(textInput.val());
        happinessCell.text(happinessInput.val())
        colorCell.text(colorInput.val());
        colorCell.css('background-color', colorInput.val());

        newRow.append(textCell);
        newRow.append(happinessCell);
        newRow.append(colorCell);
        $('#ResultBody').append(newRow);


    });
        
       
});