let canvas;
let pointerX = 50;
let pointerY = 50;

let eyeObjects = [];
let patchList = [];

let tatami;
let wood;
let bandaid;

function preload() {
  tatami = loadImage('../img/wood.jpg');
  wood = loadImage('../img/darkwood.jpg');
  bandaid = loadImage('../img/bandaid.png');
}


class Eyes {
  constructor(xPos, yPos){
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.origX = xPos;
    this.origY = yPos;
    this.height = 40;
    this.width = 40;
    this.maxLeft = 19;
    this.maxRight = 19;
    this.maxUp = 15;
    this.maxDown = 3;
  }


  //method
  moveEye(){
    if(mouseX > this.xPosition){
      if(this.maxRight > 0){
        fill("#ffffff");
        stroke("#ffffff");
        ellipse(this.xPosition, this.yPosition, this.width, this.height);

        fill(0);
        ellipse(this.xPosition++, this.yPosition, this.width, this.height);
        this.maxRight--;
        this.maxLeft++;
      }
    }
    if(mouseX < this.xPosition){
      if(this.maxLeft > 0){
        fill("#ffffff");
        stroke("#ffffff");
        ellipse(this.xPosition, this.yPosition, this.width, this.height);

        fill(0);
        ellipse(this.xPosition--,this.yPosition, this.width, this.height);
        this.maxLeft--;
        this.maxRight++;
      }
    }
    if(mouseY > this.yPosition){
      if(this.maxDown > 0){
        fill("#ffffff");
        stroke("#ffffff");
        ellipse(this.xPosition, this.yPosition, this.width, this.height);

        fill(0);
        ellipse(this.xPosition, this.yPosition++,this.width, this.height);
        this.maxDown--;
        this.maxUp++;
      }
    }
    if(mouseY < this.yPosition){
      if(this.maxUp > 0){
        fill("#ffffff");
        stroke("#ffffff");
        ellipse(this.xPosition, this.yPosition, this.width, this.height);

        fill(0);
        ellipse(this.xPosition, this.yPosition--,this.width, this.height);
        this.maxUp--;
        this.maxDown++;
      }
    }
  }
}

class Patches {
  constructor(xPos, yPos){
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.height = 200;
    this.width = 200;
  }

  //method
  drawPatch(){
    image(bandaid,this.xPosition-95,this.yPosition-95,this.height,this.width);
  }
}

function setup(){
  canvas = createCanvas(1300,600);
  canvas.style('display','block');
  let x = (windowWidth-width)/2;
  let y = (windowHeight-height)/2;
  canvas.position(x,y);
  canvas.style('z-index','-1');

  background(wood);

  while (pointerY < height){
    while (pointerX < width){
      arc(pointerX, pointerY, 100, 80, 40.85, 0, OPEN);
      arc(pointerX, pointerY, 100, 50, 0, 40.85, OPEN);
      eyeObjects.push(new Eyes(pointerX,pointerY));
      pointerX+=200;
    }
    pointerY+=100;
    pointerX=50;
  }
}

function draw(){
  for(let j=0; j<eyeObjects.length; j++){
    let currentEye = eyeObjects[j];
    currentEye.moveEye();
  }
  for(let h=0; h<patchList.length;h++){
    let currentPatch = patchList[h];
    currentPatch.drawPatch();
  }
  if (mouseIsPressed) {
    patchList.push(new Patches(mouseX,mouseY));
    //rect(mouseX,mouseY, 100,100);
  }

}

function windowResized() { // automatically resize to fill the window whenever the window is resized
  resizeCanvas(windowWidth, windowHeight);
}
