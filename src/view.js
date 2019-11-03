let canvas;
let context;

export function updateView() {
  if (!canvas) {
    initView();
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function initView() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  resizeView();
  window.addEventListener("resize", resizeView);
}

function resizeView() {
  const size = Math.min(window.innerWidth, window.innerHeight);
  canvas.width = canvas.height = size - (size % 16);
}
