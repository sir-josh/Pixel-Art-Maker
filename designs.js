// Select color input;
var userDefinedColor = $('#colorPicker').val();

// Set target ID to variable.
let table = '#pixelCanvas';

// Set row elements to variable.
let row = '<tr></tr>';

// Set cell elements to variable.
let cell = '<td></td>';


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (e){
    e.preventDefault();
    makeGrid();
});

function makeGrid() {
// Your code goes here!

    $(table).empty();// Clear the grid on submit, if there is one.

    // Select size input
    height = $('#inputHeight').val();// Fetch the input value of height.

    width = $('#inputWeight').val();// Fetch the input value of width.

    // Outer loop defined by height.
    for (let m = 1; m <= height; m++) {

        $(table).append(row);   // Append a row to the table m times.

        let n = 1;  // Inner loop defined by width.
        while (n <= width){

            $('tr').last().append(cell);  // Append n cells to the last row m times.
            n++;
        }
    }

}

// When the table (a pixel) is clicked on, run the paintGrid function on the target cell.
$(table).on('click', 'td', function paintGrid () {

    userDefinedColor = $('#colorPicker').val(); //get the color each time user make color change

    // Set this cell's background to the input color.
    $(this).css('background-color', userDefinedColor);

});


//while holding the left mouse button down draw the pixels
$(table).on("mousemove", "td", function(e) {

    userDefinedColor = $('#colorPicker').val(); //get the color each time user make color change

    if (e.buttons == 1) {
        $(this).css("background-color", userDefinedColor); //Draw the td that the user hovers
    }
});