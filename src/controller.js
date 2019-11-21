import { updateView } from "./view";
import { initModel, stepModel } from "./model";

export function startGame() {
  loop(0, initModel(50, 50));
}

function loop(gameSteppedAt, grid) {
  if (isTimeToStepGame(gameSteppedAt)) {
    const gridAfterStep = stepGame(grid);
    callRequestAnimationFrame(Date.now(), gridAfterStep);
  } else {
    callRequestAnimationFrame(gameSteppedAt, grid);
  }
}

function isTimeToStepGame(gameSteppedAt) {
  const now = Date.now();
  const elapsed = now - gameSteppedAt;
  return elapsed / 1000 > 0.5;
}

function stepGame(grid) {
  const gridAfterStep = stepModel(grid);
  updateView(gridAfterStep);
  return gridAfterStep;
}

function callRequestAnimationFrame(gameSteppedAt, grid) {
  window.requestAnimationFrame(() => loop(gameSteppedAt, grid));
}
