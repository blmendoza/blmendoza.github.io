let canvasX;
let canvasY;
let counter;
let rectWidth = 50;
let rectYPos = 0;
let lineVerX = 550;
let lineHorY = 159;
//let calHead1;
//let calHead2;
//let calHead3;
//let currentCalHead;
let testImg;

function preload(){ //loads image before any js runs
  //calHead1 = loadImage('images/morning.png');
  //calHead2 = loadImage('images/afternoon.png');
  //calHead3 = loadImage('images/evening.png');
  testImg = loadImage('images/morning.png');
}

function setup(){
  let canvas = createCanvas(windowWidth-25,windowHeight-25);
  canvasX = (windowWidth-width) / 2;
  canvasY = (windowHeight-height) / 2;
  canvas.position(canvasX, canvasY);

  background(255);
  image(testImg,0,0);
  //currentCalHead = calHead1;
  //changeCalHead(calHead1);
  //calHead2.hide();
  //calHead3.hide();

  counter = 0;

  //draws calendar outline
  strokeWeight(3);
  fill(0);
  for(let i=0; i<8; i++){
    line(lineVerX,0,lineVerX,height);
    lineVerX+=100;
  }
  console.log("finished drawing");
}

function draw(){

  if(counter == 10){
    console.log("Reached the max");
  }
  else{
    if(frameCount%60 == 0 && rectWidth < 300){

      //this "erases" the previous lines/rectangles made
      stroke(255);
      fill(255);
      rect(10,10,rectWidth,20); //bar
      rect(300,rectYPos,100,2); //line

      counter++;

      //reset to a visible stroke/fill and "move" items
      noStroke();
      fill(255,0,0);
      rectWidth+=10;
      rect(10,10,rectWidth,20);
      rectYPos+=10;
      rect(300,rectYPos,100,2);
    };
  }
}

/*
function changeCalHead(calHead){
  image(calHead, canvasX, canvasY, 100, 100);
}
*/

function mousePressed(){
  //"erases" old bar
  stroke(255);
  fill(255);
  rect(10,10,rectWidth,20);

  //redraw new bar
  rectWidth = 10;
  noStroke();
  fill(255,0,0);
  rect(10,10,rectWidth,20);
}
