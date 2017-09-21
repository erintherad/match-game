var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var board = $('#memory_board');

board.click(function(event) {
  var tile = event.target;
  var value = event.target.attributes[2].value;
  memoryFlipTile(tile, value);
});

// Sets up board
function newBoard() {
  tiles_flipped = 0;
  memory_array = _.shuffle(memory_array);

  var output = '';

_.forEach(memory_array, function(memory_array_value, index) {
  output += '<div class="card" id="tile_'+ index +'" data-value="\''+ memory_array_value +'\'"></div>';
});
  board.append(output);
}

function flipCard(tile, value) {
 $(tile).css("background-color", "white");
 $(tile).html(value);
}

function canFlipCard(tile) {
  return $(tile).html("") && memory_values.length < 2;
}

// Provides logic for flipped card when clicked
function memoryFlipTile(tile, value) {
  if (canFlipCard(tile)) {
    flipCard(tile, value);
  }
}

newBoard();
