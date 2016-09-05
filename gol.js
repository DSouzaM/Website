var canvas = document.getElementById('canvas');
var HEIGHT = 30;
var WIDTH = 30;
var CELL_SIZE = 20;
var PADDING = 2;
var BUFFER = 3;
var cells = [];

function countNeighbours(cells, index) {
	var count = 0;
	var topEdge = index < WIDTH;
	var bottomEdge = index >= (HEIGHT-1) * WIDTH;
	var leftEdge = index % WIDTH === 0;
	var rightEdge = (index+1) % WIDTH === 0;


	if (!topEdge) { 
		count += cells[index-WIDTH]; // top middle
		if (!leftEdge) {
			count += cells[index-WIDTH-1]; // top left
		}
		if (!rightEdge) {
			count += cells[index-WIDTH+1]; // top right
		}
	}
	if (!leftEdge) {
		count += cells[index-1]; // left
	}
	if (!rightEdge) {
		count += cells[index+1]; // right
	}
	if (!bottomEdge) {
		count += cells[index+WIDTH]; // bottom middle
		if (!leftEdge) {
			count += cells[index+WIDTH-1]; // bottom left
		}
		if (!rightEdge) {
			count += cells[index+WIDTH+1]; // bottom right
		}
	}
	return count;
}

function cellChanges(cells, index) {
	var isAlive = cells[index];
	var neighbourCount = countNeighbours(cells, index);
	return (isAlive && (neighbourCount < 2 || neighbourCount > 3)) || (!isAlive && neighbourCount == 3);
}

// returns the indices of cells which change from one state to the other
function getChanges(cells) {
	var changed = [];
	for (var i = 0; i < HEIGHT*WIDTH; i++) {
		if (cellChanges(cells,i)) {
			changed.push(i);
		}
	}
	return changed;
}

function drawGame(cells, canvas, ctx) {
	ctx.fillStyle = "#FFFFFF";
	ctx.clearRect('0','0', canvas.width, canvas.height);

	/*
	example with BUFFER = 2, WIDTH = 8, HEIGHT = 7 of the cells we want to display
	# # # # # # # #
	# # # # # # # #
	# # _ _ _ _ # #
	# # _ _ _ _ # #
	# # _ _ _ _ # #
	# # # # # # # #
	# # # # # # # # 

	columns, rows zero-indexed
	*/
	ctx.fillStyle = "#000000";
	ctx.fillRect(CELL_SIZE * BUFFER - PADDING, CELL_SIZE * BUFFER - PADDING, 2 * PADDING, CELL_SIZE * (HEIGHT-2*BUFFER));
	ctx.fillRect(CELL_SIZE * BUFFER - PADDING, CELL_SIZE * BUFFER - PADDING, CELL_SIZE * (WIDTH-2*BUFFER), 2 * PADDING);
	ctx.fillRect(CELL_SIZE * (WIDTH-BUFFER) - PADDING, CELL_SIZE * BUFFER - PADDING, 2 * PADDING, CELL_SIZE * (HEIGHT-2*BUFFER)+2*PADDING);
	ctx.fillRect(CELL_SIZE * BUFFER - PADDING, CELL_SIZE * (HEIGHT-BUFFER) - PADDING, CELL_SIZE * (WIDTH-2*BUFFER) + 2*PADDING, 2 * PADDING);

	for (var row = BUFFER; row <= HEIGHT - 1 - BUFFER; row++) {
		for (var col = BUFFER; col <= WIDTH - 1 - BUFFER; col++) {
			var cellNum = WIDTH * row + col;
			ctx.fillStyle = cells[cellNum] === 1 ? "#FF0000" : "#FFFFFF";
			ctx.fillRect(CELL_SIZE * (cellNum % WIDTH)+PADDING, CELL_SIZE * (Math.floor(cellNum / WIDTH)) + PADDING, CELL_SIZE - 2*PADDING, CELL_SIZE - 2*PADDING);
		}
	}
}


$(function() {

	for (var i = 0; i < HEIGHT*WIDTH; i++) {
		cells.push(0);
	}

	// seed it
	cells[0]=1;
	cells[WIDTH+1]=1;
	cells[WIDTH+2]=1;
	cells[2*WIDTH]=1;
	cells[2*WIDTH+1]=1;

	var canvas = $('#canvas')[0];
	var ctx = canvas.getContext('2d');
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;


	setInterval(function() {
		var changes = getChanges(cells);
		for (var i = 0; i < changes.length; i++){
			if (cells[changes[i]] !== undefined) {
				cells[changes[i]] ^= 1; // invert
			}
		}

		drawGame(cells, canvas, ctx);

		var line = '';
		for (var i = 0; i < HEIGHT*WIDTH; i++) {
			line+= cells[i];
			if ((i+1) % WIDTH == 0) { //line over
				//console.log(line);
				line = '';
			}
		}
		//console.log('-----------------------');
	}, 200)

});