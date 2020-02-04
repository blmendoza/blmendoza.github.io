let canvasX;
let canvasY;

//counter bar
let rectHeight = 34;
let rectWidth = 300;
let barXPos = 202;
let barYPos = 252;
let counter = 0;

//moving line
let rectYPos = 0;

//calender build
let lineVerX = 550;
let lineHorY = 120;


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
  textSize(40);
  let textPos = 280;
  text('Tiredness',0,textPos);
  rect(200,250,rectWidth+2,40); //for sleep counter
  text('Hunger',0,textPos+50);
  rect(200,300,rectWidth+2,40); //for hunger counter
  text('Money',0,textPos+100);
  rect(200,350,rectWidth+2,40); //for money counter


  //draws calendar outline
  stroke(0);
  strokeWeight(3);
  line(lineVerX,0,lineVerX,height); //separator line

  let posXList = []; //saving positions for 'day' header placements
  strokeWeight(1.5);
  stroke(128,128,128);
  lineVerX+=100;
  for(let i=0; i<6; i++){
    posXList.push(lineVerX);
    line(lineVerX,lineHorY,lineVerX,(lineHorY+(30*19)));
    lineVerX+=150;
  }

  let posYList = []; //saving positiosn for 'time' header placements
  strokeWeight(1);
  stroke(192,192,192);
  for(let k=0; k<20; k++){
    line(posXList[0],lineHorY,posXList[5],lineHorY);
    posYList.push(lineHorY);
    lineHorY+=30;
  }

  //add day headings
  let days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
  textSize(25);
  for(let j=0;j<5;j++){
    text(days[j],posXList[j]+10,(posYList[0]-20));
  }
  console.log("finished drawing");

  //add time headings
  let times = ['5AM','6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM','12AM'];
  textSize(15);
  for(let l=0;l<times.length;l++){
    text(times[l],(posXList[0]-50),(posYList[l]+5));
  }
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
