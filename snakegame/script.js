const boardEl = document.querySelector("#board");
const blockwidth = 80;
const blockheight = 80;
const width = Math.floor(boardEl.clientWidth / blockwidth);
const height = Math.floor(boardEl.clientHeight / blockheight);

// FIXED: Changed to an Object {} instead of an Array []
const blocks = {}; 
const snake = [
  {x: 3, y: 1}, // Adjusted starting coordinates to fit X, Y
  {x: 4, y: 1},
  {x: 5, y: 1},
];

const direction = 'left';

// Outer loop: Rows (Y-axis)
for (let row = 0; row < height; row++) {
  // Inner loop: Columns (X-axis)
  for (let col = 0; col < width; col++) {
    const box = document.createElement("div");
    box.classList.add("box");
    boardEl.appendChild(box);
    
    // FIXED: Storing as X-Y to match the snake coordinates
    blocks[`${col}-${row}`] = box; 
  }
}

function render() {
  snake.forEach(segment => {
    // Look up the box
    const block = blocks[`${segment.x}-${segment.y}`];
    
    // Safety check: only add class if the block exists!
    if (block) {
      block.classList.add("fill");
    }
  });
}

// Initial draw
render();

setInterval(() => {
  let head = null;

  // 1. Calculate the new head
  if (direction === 'left') {
    // FIXED: Moving left decreases X, not Y
    head = { x: snake[0].x - 1, y: snake[0].y }; 
  }

  // 2. Clear the old snake from the screen
  snake.forEach(segment => {
    const block = blocks[`${segment.x}-${segment.y}`];
    if (block) {
      block.classList.remove('fill');
    }
  });

  // 3. Update the snake array in memory!
  snake.unshift(head); // Add new head to the front
  snake.pop();         // Remove the last tail piece

  // 4. Redraw the new snake
  render();
}, 400);