// Select color input
var colorInput = document.getElementById("color-picker");
// Select size input
var inputHeight = document.getElementById("inputHeight");
var inputWidth = document.getElementById("inputWidth");

//submit button
var sizePicker = document.getElementById("sizePicker");
//table storage
var grid = document.getElementById("pixel-canvas");
//body storage
var body = document.querySelector('body');
// When size is submitted by the user, call makeGrid()
// submit event listener

var reset = document.querySelector('.reset');

reset.addEventListener('click', function(event) {
  gridCall();
})

sizePicker.addEventListener('submit', function(event)
{
  gridCall();
});

//Function that resets and creates the grid
function makeGrid(height, width)
{
  console.log("generating grid.");
  grid.innerHTML = '';

  //Horizontal loop
  for(var x = 0; x < height; x++)
  {
    var gridRow = document.createElement('tr');

    //Vertical loop
    for(var y = 0; y < width; y++)
    {
      var gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      gridCell.addEventListener('click', function(event)
      {
        event.target.style.backgroundColor = colorInput.value;
      });
    }
    grid.appendChild(gridRow);
  }
  body.appendChild(grid);
  grid.classList.add('grid');
}

function gridCall() {
  event.preventDefault();
  let height = inputHeight.value;
  let width = inputWidth.value;
  makeGrid(height, width);
}