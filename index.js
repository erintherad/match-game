var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var board = $('#memory_board');

// Event handler for clicked card
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

// flips card and changes css
function flipCard(tile, value) {
 $(tile).css('background-color', 'white');
 $(tile).html(value);
}

// checks if you can flip a card
function canFlipCard(tile) {
  return $(tile).html('') && memory_values.length < 2;
}

// Provides logic for flipped card when clicked
function memoryFlipTile(tile, value) {
  if (canFlipCard(tile)) {
    flipCard(tile, value);
    if (areNoCardsFlipped()) {
      setCardAsFlipped(tile, value);
    } else if (isOneCardFlipped()) {
      setCardAsFlipped(tile, value);
      if(isThereIsAMatch()) {
        matchCards();
        if (isGameOver()) {
          reset();
        }
      } else {
        cardsDoNotMatch();
      }
    }
  }
}

// check for no cards flipped
function areNoCardsFlipped() {
  return memory_values.length == 0;
}

// check for one card flipped
function isOneCardFlipped() {
  return memory_values.length == 1
}

// saves flipped value in memory_values arr and memory_tile_ids arr
function setCardAsFlipped(tile, value) {
  memory_values.push(value);
  memory_tile_ids.push($(tile)[0].id);
}

// checks to see if there is a match based on stored memory_values in arr
function isThereIsAMatch() {
  return memory_values[0] == memory_values[1];
}

// adds a value of 2 to tiles_flipped variable. This count defines when the game is over. function also clears memory_values and memory_tile_ids since they now match
function matchCards() {
  tiles_flipped += 2;
  memory_values = [];
  memory_tile_ids = [];
}

// if 2 crads are not the same, flip them back
function cardsDoNotMatch() {
  setTimeout(flipCardBack, 700);
}

// functionality that flips card back
function flipCardBack() {
  var tile_1 = '#' + memory_tile_ids[0];
  var tile_2 = '#' + memory_tile_ids[1];

  $(tile_1).css('background-color', 'gray');
  $(tile_1).html('');
  $(tile_2).css('background-color', 'gray');
  $(tile_2).html('');

  memory_values = [];
  memory_tile_ids = [];
}

// if tiles_flipped is same length of memory_array, the game is over
function isGameOver() {
  return tiles_flipped == memory_array.length;
}

function reset() {
  alert('Generating new board');
  $('#memory_board').html('');
  newBoard();
}

newBoard();
