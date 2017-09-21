var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var board = $('#memory_board');

// Sets up board
function newBoard() {
 tiles_flipped = 0;
 memory_array = _.shuffle(memory_array);

 var output = '';

 _.forEach(memory_array, function(memory_array_value, index) {
   output += '<div id="tile_'+ index +'">test</div>';
 });
 board.append(output);
}

// calls board
newBoard();
