let canvas;
let video;
let classifier;
let flippedVideo;

let label = "...waiting";

let counter = 0;

let graphX = 0;
let graphSpeed = 5;

let modelURL = 'https://teachablemachine.withgoogle.com/models/FFzyhuX8/';

function preload(){
  //add a link to your own data set here
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 video = createCapture(VIDEO);
 video.size(640, 480);
 video.hide();

 flippedVideo = ml5.flipImage(video);

 classifyVideo();

}

function classifyVideo(){
  flippedVideo = ml5.flipImage(video);
  //classify our images/videos against the pre-trained model
  classifier.classify(flippedVideo, gotResults); //gotResults is a callback function
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

function draw() {
  background(0);
  image(video, 0, 0);

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(label, width/2, height - 16);
  rect(0,500,graphX,50);

  text("$" + counter, width/2,height-100);

  if(label == "Commodity"){
    stroke(random(255),random(255),random(255));
    strokeWeight(5);
    graphX += graphSpeed;
    counter++;
  }

  if(label == "Idle"){
    stroke(0);
    graphX = graphX;
  }


}
