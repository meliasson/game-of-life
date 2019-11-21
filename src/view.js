let canvas;
let context;

export function updateView(grid) {
  if (!canvas) {
    initView(grid);
  }
  const margin = 20;
  const size = Math.min(window.innerWidth, window.innerHeight) - margin * 2;
  if (grid.length < size) {
    canvas.width = size - (size % grid.length);
    canvas.height = size - (size % grid.length);
  } else {
    canvas.width = size;
    canvas.height = size;
  }
  canvas.style.border = "1px solid deeppink";
  canvas.style.margin = margin - 2 + "px";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
  const squareSize = canvas.width / grid.length;
  context.fillStyle = "#ffffff";
  for (var y = 0; y < grid.length; y++) {
    for (var x = 0; x < grid[y].length; x++) {
      if (grid[y][x]) {
        context.fillRect(
          x * squareSize,
          y * squareSize,
          squareSize - 1,
          squareSize - 1
        );
      }
    }
  }
}

function initView(grid) {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
}
