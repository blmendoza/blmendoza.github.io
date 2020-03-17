let canvas;
let kasaOpen;
let kasaClose;

let classifier;
let video;
let label = "";
let flippedVideo;

//water counter
let rectHeight = 34;
let rectWidth = 300;
let barXPos = 202;
let barYPos = 253; //will add +50 for hunger/money bars
let waterLevel = 0;
let fatigueLevel = 0;
let kasaPosX;
let kasaPosY;

let rainDrop;
let bkgd;
let rainList = [];
let emergeTimeList = [];

function preload() {
  rainDrop = loadImage("../img/raindrop.png");
  bkgd = loadImage("../img/tokyoStreets.jpg");
  kasaOpen = loadImage("../img/kasabakeOpened.png");
  kasaClose = loadImage("../img/kasabakeClosed.png");
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6yZbTe9O/model.json');
}

function setup(){
  canvas = createCanvas(1300,600);
  canvas.style('display','block');
  let x = (windowWidth-width)/2;
  let y = (windowHeight-height)/2;
  canvas.position(x,y);
  canvas.style('z-index','-1');
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  flippedVideo = ml5.flipImage(video);
  classifyVideo();

  kasaPosX = width/3;
  kasaPosY = height/3;


  // for(let i=0;i<50;i++){
  //   emergeTimeList.push(Math.floor(random(2500)));
  //   text(emergeTimeList[i],width/2, height - 50);
  // }


  // for(let i=0;i<50;i++){
  //   rainList.push(new Rain(random(width),emergeTimeList[i]));
  // }
}

function classifyVideo(){
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResults);
}

function gotResults(error, results){
  if(error){
    console.log(error);
    return
  }
  label = results[0].label;
  classifyVideo();
  console.log(results);
}

// class Rain {
//   constructor(startXPos, timeStart){
//     this.startPos = startXPos;
//     this.startTime = timeStart;
//     this.yPos = 0;
//     this.gate=false;
//   }
//
//   rainCheck(){
//     if(frameCount==this.startTime){
//       this.gate=true;
//     }
//   }
//
//   rainFall(){
//     if(this.gate == true){
//       image(rainDrop, this.startPos, this.yPos++);
//       if((this.yPos >= kasaPosY) & (this.startPos < kasaPosX+20 & this.startPos > kasaPosX-20)){
//         this.yPos = 0;
//         this.gate = false;
//       }
//     }
//   }
// }

function draw() {
  image(bkgd,0,0,width,height);

  // stroke(255);
  // noFill(255);
  // textSize(40);
  // let textPos = 50;
  // text('Water Level',110,textPos);
  // rect(220,25,rectWidth+2,40); //for counter
  //
  // text('Yōkai Stamina',135,textPos+50);
  // rect(220+45,15+65,rectWidth+2,40); //for counter

  // for(let i=0;i<length.rainList;i++){
  //   console.log(emergeTimeList[i]);
  //   let currentRain = rainList[i];
  //   if(frameCount == currentRain.timeStart){
  //     currentRain.rainCheck;
  //   }
  //   currentRain.rainFall();
  //}
  if(label=="Open"){

    image(kasaOpen,kasaPosX,kasaPosY,300,400);
  }
  if(label=="Closed"){
    image(kasaClose,kasaPosX,kasaPosY,300,400);
  }

  // textSize(32);
  // textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);

}

function keyPressed() {
  if (keyCode === 37) {
    kasaPosX-=60;
  }
  else if (keyCode === 39) {
    kasaPosY=+ 60;
  }
  // uncomment to prevent any default behavior
  // return false;
}

function windowResized() { // automatically resize to fill the window whenever the window is resized
  resizeCanvas(windowWidth, windowHeight);
}
