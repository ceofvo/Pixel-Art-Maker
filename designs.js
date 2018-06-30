// Select color input
// Select size input

let pixelCanvas = document.getElementById('pixelCanvas');
let formSubmit = document.getElementById('formSubmit');
let sizePicker = document.getElementById('sizePicker');
let inputHeight = document.getElementById('inputHeight');
let inputWidth = document.getElementById('inputWidth');
let colorPicker = document.getElementById('colorPicker');

formSubmit.addEventListener('click' , (e) => {
	e.preventDefault();
	clearGrid();
	makeGrid();
});


var colorChoice = colorPicker.value;
colorPicker.addEventListener("input", function() {
    colorChoice = colorPicker.value;
  });

function fillColor(event) {
	event.target.style.backgroundColor = colorChoice;
}


// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

	for (let i = 0; i < inputWidth.value; i++ ){
		const tableRow = pixelCanvas.insertRow(i) ;
		    for (let j = 0; j < inputHeight.value; j++ ){
				const tableCell = tableRow.insertCell(j) ;
					tableCell.addEventListener('click', fillColor, false);
				}
	}
}

//function clearGrid() {
//        pixelCanvas.innerHTML = '';
//}

function clearGrid(){
	while (pixelCanvas.innerHTML !== '') {
		pixelCanvas.innerHTML = '';
	}
}