//uses at least one for loop, one mouse interaction and one key board interaction
let redVal;
let greenVal;
let blueVal;
let cirVal;

function setup() {
  createCanvas(700, 500);
  background(220);
  cirVal = 10;
}

function draw() {
  for(let i=0;i<width;i+=20){ //drag mouse to change from red, to green, to blue
    if(mouseX<width/3){
      redVal = 255;
      greenVal = 0;
      blueVal = 0;
    }
    else if(mouseX>width/3 && mouseX<width/1.5){
      redVal = 0;
      greenVal = 255;
      blueVal = 0;   
    }
    else{
      redVal = 0;
      greenVal = 0;
      blueVal = 255;
    }
    fill(random(redVal),random(greenVal),random(blueVal));
    ellipse(i,random(height),cirVal,cirVal);
  }

}

function keyPressed() { //up arrow to make bigger circles, down for smaller
  if (keyCode === UP_ARROW) {
    cirVal+=5;
  } 
  else if (keyCode === DOWN_ARROW) {
    if(cirVal === 5){
      cirVal = 5; //keep min size at 5, got a weird backwards effect otherwise
    }
    else{
      cirVal-=5;
    }
  }
}


//try starting with bigger circles, and drag the mouse while making smaller ones; you get a cool effect
