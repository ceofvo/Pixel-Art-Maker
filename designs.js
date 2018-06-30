/* 
JavaScript code to 
1. Dynamically set the size of the table as an X by Y grid.
2. Retrive users chosen color.
3. Listen to click events and fill the cell in the grid with the chosen color.
*/

// Declare some variables and assign it the values returned by the document.getElementById() function

let pixelCanvas = document.getElementById('pixelCanvas');
let formSubmit = document.getElementById('formSubmit');
let sizePicker = document.getElementById('sizePicker');
let inputColumn = document.getElementById('inputColumn');
let inputRow = document.getElementById('inputRow');
let colorPicker = document.getElementById('colorPicker');

// Listen to the submit click event then call clearGrid() to clear the grid then call makeGrid() to make new grid

formSubmit.addEventListener('click' , (e) => {
	e.preventDefault();
	clearGrid();
	makeGrid();
});

// listen to the colorPicker input event the assign chosen color to the colorChoice variable

var colorChoice = colorPicker.value;

colorPicker.addEventListener("input", function() {
    colorChoice = colorPicker.value;
  });

// function to fill the chosen color into the clicked cell in the grid

function fillColor(event) {
	event.target.style.backgroundColor = colorChoice;
}


// When size is submitted by the user, call makeGrid() by 

function makeGrid() {
	for (let i = 0; i < inputRow.value; i++ ){
		const tableRow = pixelCanvas.insertRow(i) ;
		    for (let j = 0; j < inputColumn.value; j++ ){
				const tableCell = tableRow.insertCell(j) ;
					tableCell.addEventListener('click', fillColor, false);
				}
	}
}

//function clearGrid() to clear the grid

function clearGrid(){
	while (pixelCanvas.innerHTML !== '') {
		pixelCanvas.innerHTML = '';
	}
}
