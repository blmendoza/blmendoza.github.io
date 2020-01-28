let playButton;
let playerName;
let canvas;
let greeting;
let startGame = false;
let endGame = false;
let furby;
let nameText;
let scoreText;

let score = 0;

let furbyX = [];
let furbyY = [];

let userAgent;

function preload(){
  furby = loadImage('images/furby.png');
}

function start(){
  startGame = true;
  playerName.hide();
  greeting.hide();

  nameText = createP('');
  scoreText = createP('');
  playButton = createButton('Mine FurbyCoin');

}

function endScreen(){
  background(random(255),random(255),random(255));
  image(furby,width/2,height/2);
}

function furbyCoords(){
  score++;
  furbyX.push(random(50,width-50));
  furbyY.push(random(50, height-50));
}

function furbyMine(){ //will be updated every frame, this will be our game
  userAgent = navigator.userAgent;
  nameText.html('Hi ' + playerName.value());
  scoreText.html('You\'ve generated $' + score*10 + ' FurbyCoins on ' + userAgent);
  playButton.mousePressed(furbyCoords);

  for(let i=0;i<furbyX.length;i++){
    image(furby,furbyX[i],furbyY[i],50,50);
  }

  if(score==100){
    startGame = false;
    endGame = true;
  }

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index','-1');
  canvas.position(0,0);

  greeting = createP('Please type your name and press "Enter"');

  playerName = createInput('');
  playerName.changed(start);

  imageMode(CENTER);
}

function draw(){
  background(120);
  if(startGame){
    furbyMine();
  }
  if(endGame){
    endScreen();
  }
}
