let canvasX;
let canvasY;
let instructions;

//counter bar
let rectHeight = 34;
let rectWidth = 300;
let barXPos = 202;
let barYPos = 253; //will add +50 for hunger/money bars
let tiredWidth = 10;
let hungerWidth = 10;
let moneyWidth = 298;
let counter = 0;

//moving tracker
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
let currentDay = days[0];
let trackerXPos;
let trackerYPos = 100;

//calender build
let lineVerX = 550;
let lineHorY = 100;
let posXList = []; //saving positions for 'day' header placements, vertical line build
let posYList = []; //saving positiosn for 'time' header placements, horizontal line build


//let calHead1;
//let calHead2;
//let calHead3;
//let currentCalHead;
let testImg;
let gameStat=false;

/*
function preload(){ //loads image before any js runs
  //calHead1 = loadImage('images/morning.png');
  //calHead2 = loadImage('images/afternoon.png');
  //calHead3 = loadImage('images/evening.png');
  testImg = loadImage('images/morning.png');
}*/

function setup(){
  let canvas = createCanvas(windowWidth-25,windowHeight-25);
  canvasX = (windowWidth-width) / 2;
  canvasY = (windowHeight-height) / 2;
  canvas.position(canvasX, canvasY);

  background(255);
  //image(testImg,0,0);
  //currentCalHead = calHead1;
  //changeCalHead(calHead1);
  //calHead2.hide();
  //calHead3.hide();
  textSize(18);
  instructions = text('Press the "space" key to begin the game.\n\nPress "s" to sleep or nap\n(tiredness bar will decrease)\n\nPress "e" to eat and curb your hunger\n(hunger bar will decrease, money bar will decrease)\n\nPress "c" to buy and drink coffee\n(tiredness bar will decrease considerably, money bar will decrease)\n\nPress "w" to work\n(money bar will increase slightly)',0,420,500,height);

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
  noStroke(); //draw inside of money bar
  fill(255,0,0);
  rect(barXPos,barYPos+100,moneyWidth,34);


  //draws calendar outline
  stroke(0);
  strokeWeight(3);
  line(lineVerX,0,lineVerX,height); //separator line

  strokeWeight(1.5);
  stroke(128,128,128);
  lineVerX+=100;
  for(let i=0; i<6; i++){
    posXList.push(lineVerX);
    line(lineVerX,lineHorY,lineVerX,(lineHorY+(25*23)));
    lineVerX+=150;
  }

  strokeWeight(1);
  stroke(192,192,192);
  for(let k=0; k<24; k++){
    line(posXList[0],lineHorY,posXList[5],lineHorY);
    posYList.push(lineHorY);
    lineHorY+=25;
  }

  //add day headings
  textSize(25);
  for(let j=0;j<5;j++){
    text(days[j],posXList[j]+10,(posYList[0]-20));
  }
  console.log("finished drawing");

  //add time headings
  let times = ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM','12AM'];
  textSize(12);
  for(let l=0;l<times.length;l++){
    text(times[l],(posXList[0]-50),(posYList[l]+5));
  }

  //add class blocks
  let blockWidth = 142;
  let hourWidth = 25;

  stroke(232, 219, 32);
  fill(232, 219, 32);
  for(let i=0;i<5;i++){ //everyday classes
    rect(posXList[i]+4,posYList[8]+12,blockWidth,hourWidth);
  }
  for(let i=0;i<5;i+=2){ // M/W/Fri classes
    rect(posXList[i]+4,posYList[10]+12,blockWidth,hourWidth);
    rect(posXList[i]+4,posYList[13]+12,blockWidth,hourWidth);
  }
  for(let i=1;i<4;i+=2){ // T/Thur classes
    rect(posXList[i]+4,posYList[13]+12,blockWidth,hourWidth);
  }
  rect(posXList[1]+4,posYList[17]+12,blockWidth,hourWidth+12);

  //add work blocks
  stroke(130, 224, 152);
  fill(130, 224, 152);
  for(let i=0;i<5;i++){ //everyday work
    rect(posXList[i]+4,posYList[15]+2,blockWidth,hourWidth*2-4);
  }
  for(let i=1;i<4;i+=2){ // T/Thur work
    rect(posXList[i]+4,posYList[10]+2,blockWidth,hourWidth*3-4);
  }
}

function draw(){

  if(gameStat){
    if((frameCount%60 == 0 && tiredWidth < 300) || (frameCount%60 ==0 && hungerWidth < 300)){ //check that either bar isn't maxed
      //this "erases" the previous bar made for tiredness
      stroke(255);
      fill(255);
      rect(barXPos,barYPos,tiredWidth,34);

      //reset to a visible stroke/fill and "move" bar forward for tiredness
      noStroke();
      fill(255,0,0);
      tiredWidth+=5;
      rect(barXPos,barYPos,tiredWidth,34);

      //this "erases" the previous bar made for hunger
      stroke(255);
      fill(255);
      rect(barXPos,barYPos+50,hungerWidth,34);

      //reset to a visible stroke/fill and "move" bar forward for hunger
      noStroke();
      fill(255,0,0);
      hungerWidth+=5;
      rect(barXPos,barYPos+50,hungerWidth,34);

      //draw tracker
      let buffer = 2;
      if(currentDay == 'Monday'){
        trackerXPos = posXList[0]+buffer;
      }
      else if(currentDay == 'Tuesday') {
        trackerXPos = posXList[1]+buffer;
      }
      else if(currentDay == 'Wednesday') {
        trackerXPos = posXList[2]+buffer;
      }
      else if(currentDay == 'Thursday'){
        trackerXPos = posXList[3]+buffer;
      }
      else if(currentDay == 'Friday'){
        trackerXPos = posXList[4]+buffer;
      }
      stroke(255,0,0);
      fill(255,0,0);
      let tracker = rect(trackerXPos,trackerYPos+1,146,2); //line
      if(trackerYPos >= posYList[22]){
        let dayIndex = days.findIndex(findDayIndex);
        currentDay = days[dayIndex+1];
        console.log(currentDay);
      }

      //past tracker erasing
      stroke(255);
      fill(255);
      rect(trackerXPos,trackerYPos,146,3);

      //tracker advancing
      stroke(255,0,0);
      fill(255,0,0);
      trackerYPos+=10;
      rect(trackerXPos,trackerYPos,146,2);
    }
    else{
      if(tiredWidth >= 300){
        //instructions.hide();
        textSize(50);
        text('You passed out from exhaustion, game over.',0,500,500,height);
        gameStat = false;
      }
      else if(hungerWidth >= 300){
        //instructions.hide();
        textSize(50);
        text('You passed out from hunger, game over.',0,500,500,height);
        gameStat = false;
      }
    }
  }
}

function keyPressed(){
  if(keyCode==32){
    gameStat = true;
  }
  if(keyCode==83){ //'s' for sleep/nap
    //this "erases" the previous bar made for tiredness
    stroke(255);
    fill(255);
    rect(barXPos,barYPos,tiredWidth,34);

    //reset to a visible stroke/fill and "move" bar forward for tiredness
    noStroke();
    fill(255,0,0);
    tiredWidth-=5;
    rect(barXPos,barYPos,tiredWidth,34);
  }
  if(keyCode==69){ //'e' for eat
    //this "erases" the previous bar made for hunger
    stroke(255);
    fill(255);
    rect(barXPos,barYPos+50,hungerWidth,34);

    //reset to a visible stroke/fill and "move" bar forward for hunger
    noStroke();
    fill(255,0,0);
    hungerWidth-=15;
    rect(barXPos,barYPos+50,hungerWidth,34);

    //this "erases" the previous bar made for money
    stroke(255);
    fill(255);
    rect(barXPos,barYPos+100,moneyWidth,34);

    //reset to a visible stroke/fill and "move" bar forward for money
    noStroke();
    fill(255,0,0);
    moneyWidth-=3;
    rect(barXPos,barYPos+100,moneyWidth,34);
  }
  if(keyCode==67){ //'c' for coffee
    //this "erases" the previous bar made for tiredness
    stroke(255);
    fill(255);
    rect(barXPos,barYPos,tiredWidth,34);

    //reset to a visible stroke/fill and "move" bar forward for tiredness
    noStroke();
    fill(255,0,0);
    tiredWidth-=5;
    rect(barXPos,barYPos,tiredWidth,34);

    //this "erases" the previous bar made for money
    stroke(255);
    fill(255);
    rect(barXPos,barYPos+100,moneyWidth,34);

    //reset to a visible stroke/fill and "move" bar forward for money
    noStroke();
    fill(255,0,0);
    moneyWidth-=3;
    rect(barXPos,barYPos+100,moneyWidth,34);
  }
  if(keyCode==87){ //'w' for work
    //this "erases" the previous bar made for money
    stroke(255);
    fill(255);
    rect(barXPos,barYPos+100,moneyWidth,34);

    //reset to a visible stroke/fill and "move" bar forward for money
    noStroke();
    fill(255,0,0);
    moneyWidth+=1;
    rect(barXPos,barYPos+100,moneyWidth,34);
  }
}

function findDayIndex(day){
  return day == currentDay;
}
