let capture;

function setup() {
  createCanvas(640, 640);
  capture = createCapture(VIDEO);
  canvas.style('z-index','-1');
  canvas.position(0,0);
}

function draw() {
  background(0);
  if (capture.loadedmetadata) {
    let c = capture.get(0, 0, 100, 100);
    image(c, 0, 0);
  }
}
