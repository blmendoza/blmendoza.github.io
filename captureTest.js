let capture;

function setup() {
  createCanvas(800, 800);
  capture = createCapture(VIDEO);
  //canvas.style('z-index','-1');
  canvas.position(0,0);
  imageMode(CENTER);

}

function draw() {
  background(0);
  if (capture.loadedmetadata) {
    let c = capture.get(0, 0, 100, 100);
    image(c, 0, 0);
  }
}
