let canvas;//projecting canvas into variable because we want to move it around
let button;
let selectMenu;
let checkBox;
let ads1;
let ads2;
let interactiveScene = false;
let checkBoxPaint;
let virus;
//let radioButton;

function preload(){ //loads image before any js runs
  ads1 = loadImage('images/adsOne.png');
  ads2 = loadImage('images/adsTwo.png');
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.style('z-index','-1');
  canvas.position(0,0);

  background(255);

  virus = createImg("images/virus.gif"); //gifs need this, diff from regular images
  virus.hide();

  button = createButton("Submit");
  button.mousePressed(trigger);
  button.position(43,43);
  button.style('z-index',2);

  selectMenu = createSelect();
  selectMenu.option("One");
  selectMenu.option("Two");
  selectMenu.position(random(400),random(123));
  selectMenu.style('z-index',2);

  checkBox = createCheckbox(false);
  checkBox.position(random(555), random(234));
  checkBox.changed(trigger); //
  checkBox.style('z-index',2);

  imageMode(CENTER);

}

function draw(){
  if(interactiveScene==true){
    checkBoxBrush();
  }
}

function trigger(){
  let val = selectMenu.value();
  if(val=="One" && checkBox.checked()){
    interactiveScene = false;
    background(213,123,21);
    image(ads1, width/2, height/2, width, height);
  }
  else if(val=="One"){
    interactiveScene = false;
    background(random(255),random(255), random(255));
    image(ads2, width/2, height/2, width, height);
  }
  else if(val=="Two" && checkBox.checked()){
    interactiveScene = true;
  }
  else if(val=="Two"){
    interactiveScene = false;
    virus.show();
    virus.position(400,400);
  }
}

function checkBoxBrush(){
  checkBoxPaint = createCheckbox("AAAA",true);
  checkBoxPaint.position(mouseX,mouseY);
}
