let canvasX;
let canvasY;
let counter = 0;
let rectWidth = 300;
let rectYPos = 0;
let lineVerX = 550;
let lineHorY = 159;
//let calHead1;
//let calHead2;
//let calHead3;
//let currentCalHead;
let testImg;
let gameStat=false;

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

  //counter setup
  stroke(255,0,0);
  noFill();
  rect(100,189,rectWidth,40);


  //draws calendar outline
  strokeWeight(3);
  fill(0);
  line(lineVerX,0,lineVerX,height); //separator line

  let posXList = []; //saving positions for 'day' header placements
  strokeWeight(1.5);
  fill(125);
  lineVerX+=50;
  for(let i=0; i<8; i++){
    line(lineVerX,159,lineVerX,height);
    lineVerX+=200;
    posXList.push(lineVerX);
  }

  let posYList = []; //saving positiosn for 'time' header placements
  strokeWeight(1);
  fill(110);
  for(let k=0; k<20; k++){
    line(posXList[k],lineHorY,width,lineHorY);
    posYList.push(lineHorY);
    lineHorY+=30;
  }

  //add day headings
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  textSize(25);
  for(let j=0;j<7;j++){
    text(days[j],posXList[j]+10,100);
  }
  console.log("finished drawing");
}

function draw(){

  if(gameStat){
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
  else{

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
