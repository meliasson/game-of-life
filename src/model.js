export function initModel(gridWidth, gridHeight) {
  const grid = [];
  for (var y = 0; y < gridHeight; y++) {
    grid[y] = [];
    for (var x = 0; x < gridWidth; x++) {
      if (Math.floor(Math.random() * 10 < 5)) {
        grid[y].push(0);
      } else {
        grid[y].push(1);
      }
    }
  }
  return grid;
}

export function stepModel(grid) {
  const newGrid = createNewGrid(grid);
  return populateNewGrid(grid, newGrid);
}

function createNewGrid(grid) {
  const newGrid = [];
  for (var y = 0; y < grid.length; y++) {
    newGrid[y] = [];
    for (var x = 0; x < grid[y].length; x++) {
      newGrid[y].push(null);
    }
  }
  return newGrid;
}

function populateNewGrid(grid, newGrid) {
  for (var y = 0; y < grid.length; y++) {
    for (var x = 0; x < grid[y].length; x++) {
      const isCellAlive = grid[y][x];
      const nrOfNeighbors = getNrOfNeighbors(grid, x, y);
      if (isCellAlive && nrOfNeighbors < 2) {
        newGrid[y][x] = 0;
      } else if (isCellAlive && (nrOfNeighbors === 2 || nrOfNeighbors === 3)) {
        newGrid[y][x] = 1;
      } else if (isCellAlive && nrOfNeighbors > 3) {
        newGrid[y][x] = 0;
      } else if (!isCellAlive && nrOfNeighbors === 3) {
        newGrid[y][x] = 1;
      }
    }
  }

  return newGrid;
}

function getNrOfNeighbors(grid, x, y) {
  let neighborCount = 0;

  // Upper neighbor
  if (y > 0 && grid[y - 1][x]) {
    neighborCount++;
  }

  // Upper right neighbor
  if (y > 0 && x < grid[y].length - 1 && grid[y - 1][x + 1]) {
    neighborCount++;
  }

  // Right neighbor
  if (x < grid[y].length - 1 && grid[y][x + 1]) {
    neighborCount++;
  }

  // Lower right neighbor
  if (y < grid.length - 1 && x < grid[y].length - 1 && grid[y + 1][x + 1]) {
    neighborCount++;
  }

  // Lower neighbor
  if (y < grid.length - 1 && grid[y + 1][x]) {
    neighborCount++;
  }

  // Lower left neighbor
  if (y < grid.length - 1 && x > 0 && grid[y + 1][x - 1]) {
    neighborCount++;
  }

  // Left neighbor
  if (x > 0 && grid[y][x - 1]) {
    neighborCount++;
  }

  // Upper left neighbor
  if (y > 0 && x > 0 && grid[y - 1][x - 1]) {
    neighborCount++;
  }

  return neighborCount;
}
