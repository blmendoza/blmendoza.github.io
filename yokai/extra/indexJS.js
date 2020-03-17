let capture;
let tracker;
let canv;

let iceCream;
let carrot;
let imgSize = 100;
let speed = 2;

let emergeTimeList = []; //decides when the images emerge, filled in setup function

let score = 0;

//gates for ice cream photos to start
let gate1=false;
let gate2=false;
let gate3=false;
let gate4=false;
let gate5=false;
let gate6=false;
let gate7=false;
let gate8=false;
let gate9=false;
let gate10=false;
let gate11=false;
let gate12=false;
let gate13=false;
let gate14=false;
let gate15=false;

//starting y positions of ice cream should be 0
let pos1=0;
let pos2=0;
let pos3=0;
let pos4=0;
let pos5=0;
let pos6=0;
let pos7=0;
let pos8=0;
let pos9=0;
let pos10=0;
let pos11=0;
let pos12=0;
let pos13=0;
let pos14=0;
let pos15=0;

//x positions of ice cream will be randomized
let xPos1;
let xPos2;
let xPos3;
let xPos4;
let xPos5;
let xPos6;
let xPos7;
let xPos8;
let xPos9;
let xPos10;
let xPos11;
let xPos12;
let xPos13;
let xPos14;
let xPos15;


//gates for carrot photos
let gateA=false;
let gateB=false;
let gateC=false;
let gateD=false;
let gateE=false;
let gateF=false;
let gateG=false;
let gateH=false;
let gateI=false;
let gateJ=false;
let gateK=false;
let gateL=false;
let gateM=false;
let gateN=false;
let gateO=false;

//starting positions of carrots should be 0
let posA=0;
let posB=0;
let posC=0;
let posD=0;
let posE=0;
let posF=0;
let posG=0;
let posH=0;
let posI=0;
let posJ=0;
let posK=0;
let posL=0;
let posM=0;
let posN=0;
let posO=0;

//x positions of carrots will be randomized
let xPosA;
let xPosB;
let xPosC;
let xPosD;
let xPosE;
let xPosF;
let xPosG;
let xPosH;
let xPosI;
let xPosJ;
let xPosK;
let xPosL;
let xPosM;
let xPosN;
let xPosO;


let gateCounter=0;


function preload(){
  iceCream = loadImage("icecream.png");
  carrot = loadImage("carrot.png");
}


let w = 640,
    h = 480;

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    //canvas.parent('sketch-holder');

    canv = createCanvas(w, h);
    capture.size(w, h);
    capture.hide(); //if we don't hide this, we get double video capture, the raw and the analyzed
    colorMode(HSB);

    //analyzing video with clmtracker function/object
    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);

    for(let i=0;i<30;i++){
      emergeTimeList.push(Math.floor(random(2500))); //increase this number for chance for images to appear wider apart
    }

}

function draw() {
    canv.position(mouseX, mouseY);
    imageMode(CORNERS);
    image(capture, 0, 0, w, h);
    let positions = tracker.getCurrentPosition(); //72 pixels
    imageMode(CENTER);

/* if I want outline instead
    noFill();
    stroke(255);
    beginShape();
    for (let i = 0; i < positions.length; i++) {
      if(i > 43 & i < 62){
        vertex(positions[i][0], positions[i][1]);
      }
    }
    endShape();
*/

    //want to draw points 44-61 to see the mouth outline
    noStroke();
/*whole mouth
    for (let i = 0; i < positions.length; i++) {
        fill(map(i, 43, 61, 0, 360), 50, 100);
        if(i > 43 & i < 62){
          ellipse(positions[i][0], positions[i][1], 4, 4);
        }
    }
*/
//center of mouth, point 60
    for (let i = 0; i < positions.length; i++) {
        fill(map(i, 43, 61, 0, 360), 50, 100);
        if(i == 60){
          ellipse(positions[i][0], positions[i][1], 4, 4);
        }
    }

/*
    fill(255, 204, 0);
    for(let i=0;i<positions.length;i++){
      if(i == 44 | i==50 | i==46 | i==53){
        rect(positions[i][0],positions[i][1],4,4);
      }
      if(i == 44){
        let leftMouth = rect(positions[i][0],positions[i][1],4,4);

      }
    }
*/

/* just trying to get the single x and y values for position comparison with food images
    let leftMouth = positions[44][0];
    let rightMouth = positions[50][0];
    let topMouth = positions[46][1];
    let bottomMouth = positions[53][1];
*/

    textSize(32);
    text(score + "\n" + frameCount + "\n" + emergeTimeList, 10, 30);




    if(emergeTimeList.includes(frameCount)){ //alternate between ice cream and carrots
      if(gateCounter==0){ //1
        gate1 = true;
        gateCounter++;
        xPos1 = random(width);
      }
      else if (gateCounter==1){ //A
        gateA = true;
        gateCounter++;
        xPosA = random(width);
      }
      else if (gateCounter==2){ //2
        gate2 = true;
        gateCounter++;
        xPos2 = random(width);
      }
      else if (gateCounter==3){ //B
        gateB = true;
        gateCounter++;
        xPosB = random(width);
      }
      else if (gateCounter==4){ //3
        gate3 = true;
        gateCounter++;
        xPos3 = random(width);
      }
      else if (gateCounter==5){ //C
        gateC = true;
        gateCounter++;
        xPosC = random(width);
      }
      else if (gateCounter==6){ //4
        gate4 = true;
        gateCounter++;
        xPos4 = random(width);
      }
      else if (gateCounter==7){ //D
        gateD = true;
        gateCounter++;
        xPosD = random(width);
      }
      else if (gateCounter==8){ //5
        gate5 = true;
        gateCounter++;
        xPos5 = random(width);
      }
      else if (gateCounter==9){ //E
        gateE = true;
        gateCounter++;
        xPosE = random(width);
      }
      else if (gateCounter==10){ //6
        gate6 = true;
        gateCounter++;
        xPos6 = random(width);
      }
      else if (gateCounter==11){ //F
        gateF = true;
        gateCounter++;
        xPosF = random(width);
      }
      else if (gateCounter==12){ //7
        gate7 = true;
        gateCounter++;
        xPos7 = random(width);
      }
      else if (gateCounter==13){ //G
        gateG = true;
        gateCounter++;
        xPosG = random(width);
      }
      else if (gateCounter==14){ //8
        gate8 = true;
        gateCounter++;
        xPos8 = random(width);
      }
      else if (gateCounter==15){ //H
        gateH = true;
        gateCounter++;
        xPosH = random(width);
      }
      else if (gateCounter==16){ //9
        gate9 = true;
        gateCounter++;
        xPos9 = random(width);
      }
      else if (gateCounter==17){ //I
        gateI = true;
        gateCounter++;
        xPosI = random(width);
      }
      else if (gateCounter==18){ //10
        gate10 = true;
        gateCounter++;
        xPos10 = random(width);
      }
      else if (gateCounter==19){ //J
        gateJ = true;
        gateCounter++;
        xPosJ = random(width);
      }
      else if (gateCounter==20){ //11
        gate11 = true;
        gateCounter++;
        xPos11 = random(width);
      }
      else if (gateCounter==21){ //K
        gateK = true;
        gateCounter++;
        xPosK = random(width);
      }
      else if (gateCounter==22){ //12
        gate12 = true;
        gateCounter++;
        xPos12 = random(width);
      }
      else if (gateCounter==23){ //L
        gateL = true;
        gateCounter++;
        xPosL = random(width);
      }
      else if (gateCounter==24){ //13
        gate13 = true;
        gateCounter++;
        xPos13 = random(width);
      }
      else if (gateCounter==25){ //M
        gateM = true;
        gateCounter++;
        xPosM = random(width);
      }
      else if (gateCounter==26){ //14
        gate14 = true;
        gateCounter++;
        xPos14 = random(width);
      }
      else if (gateCounter==27){ //N
        gateN = true;
        gateCounter++;
        xPosN = random(width);
      }
      else if (gateCounter==28){ //15
        gate15 = true;
        gateCounter++;
        xPos15 = random(width);
      }
      else if (gateCounter==29){ //O
        gateO = true;
        gateCounter++;
        xPosO = random(width);
      }
      else { //the end
        textSize(32);
        text("Game over. Your final score is:" + score, 10,30);
      }
    }


    if (positions.length > 0) {
      var mouthCenter = createVector(positions[60][0], positions[60][1]);

      //actual emerging of images
      if(gate1==true){ //1
        image(iceCream,xPos1,pos1,imgSize,imgSize);
        pos1+=speed;
        if(int(dist(xPos1, pos1, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateA==true){ //A
        image(carrot,xPosA,posA,imgSize,imgSize);
        posA+=speed;
        if(int(dist(xPosA, posA, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate2==true){ //2
        image(iceCream,xPos2,pos2,imgSize,imgSize);
        pos2+=speed;
        if(int(dist(xPos2, pos2, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateB==true){ //B
        image(carrot,xPosB,posB,imgSize,imgSize);
        posB+=speed;
        if(int(dist(xPosB, posB, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate3==true){ //3
        image(iceCream,xPos3,pos3,imgSize,imgSize);
        pos3+=speed;
        if(int(dist(xPos3, pos3, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateC==true){ //C
        image(carrot,xPosC,posC,imgSize,imgSize);
        posC+=speed;
        if(int(dist(xPosC, posC, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate4==true){ //4
        image(iceCream,xPos4,pos4,imgSize,imgSize);
        pos4+=speed;
        if(int(dist(xPos4, pos4, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateD==true){ //D
        image(carrot,xPosD,posD,imgSize,imgSize);
        posD+=speed;
        if(int(dist(xPosD, posD, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate5==true){ //5
        image(iceCream,xPos5,pos5,imgSize,imgSize);
        pos5+=speed;
        if(int(dist(xPos5, pos5, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateE==true){ //E
        image(carrot,xPosE,posE,imgSize,imgSize);
        posE+=speed;
        if(int(dist(xPosE, posE, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate6==true){ //6
        image(iceCream,xPos6,pos6,imgSize,imgSize);
        pos6+=speed;
        if(int(dist(xPos6, pos6, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateF==true){ //F
        image(carrot,xPosF,posF,imgSize,imgSize);
        posF+=speed;
        if(int(dist(xPosF, posF, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate7==true){ //7
        image(iceCream,xPos7,pos7,imgSize,imgSize);
        pos7+=speed;
        if(int(dist(xPos7, pos7, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateG==true){ //G
        image(carrot,xPosG,posG,imgSize,imgSize);
        posG+=speed;
        if(int(dist(xPosG, posG, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate8==true){ //8
        image(iceCream,xPos8,pos8,imgSize,imgSize);
        pos8+=speed;
        if(int(dist(xPos8, pos8, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateH==true){ //H
        image(carrot,xPosH,posH,imgSize,imgSize);
        posH+=speed;
        if(int(dist(xPosH, posH, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate9==true){ //9
        image(iceCream,xPos9,pos9,imgSize,imgSize);
        pos9+=speed;
        if(int(dist(xPos9, pos9, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateI==true){ //I
        image(carrot,xPosI,posI,imgSize,imgSize);
        posI+=speed;
        if(int(dist(xPosI, posI, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate10==true){ //10
        image(iceCream,xPos10,pos10,imgSize,imgSize);
        pos10+=speed;
        if(int(dist(xPos10, pos10, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateJ==true){ //J
        image(carrot,xPosJ,posJ,imgSize,imgSize);
        posJ+=speed;
        if(int(dist(xPosJ, posJ, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate11==true){ //11
        image(iceCream,xPos11,pos11,imgSize,imgSize);
        pos11+=speed;
        if(int(dist(xPos11, pos11, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateK==true){ //K
        image(carrot,xPosK,posK,imgSize,imgSize);
        posK+=speed;
        if(int(dist(xPosK, posK, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate12==true){ //12
        image(iceCream,xPos12,pos12,imgSize,imgSize);
        pos12+=speed;
        if(int(dist(xPos12, pos12, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateL==true){ //L
        image(carrot,xPosL,posL,imgSize,imgSize);
        posL+=speed;
        if(int(dist(xPosL, posL, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate13==true){ //13
        image(iceCream,xPos13,pos13,imgSize,imgSize);
        pos13+=speed;
        if(int(dist(xPos13, pos13, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateM==true){ //M
        image(carrot,xPosM,posM,imgSize,imgSize);
        posM+=speed;
        if(int(dist(xPosM, posM, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate14==true){ //14
        image(iceCream,xPos14,pos14,imgSize,imgSize);
        pos14+=speed;
        if(int(dist(xPos14, pos14, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateN==true){ //N
        image(carrot,xPosN,posN,imgSize,imgSize);
        posN+=speed;
        if(int(dist(xPosN, posN, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gate15==true){ //15
        image(iceCream,xPos15,pos15,imgSize,imgSize);
        pos15+=speed;
        if(int(dist(xPos15, pos15, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }

      if(gateO==true){ //O
        image(carrot,xPosO,posO,imgSize,imgSize);
        posO+=speed;
        if(int(dist(xPosO, posO, positions[60][0], positions[60][1])) < 10){
          score++;
        }
      }
    }

//start of logic for updating score if image is between mouth range
/*
    if((xPos >= leftMouth) && (xPos <= rightMouth) && (icPosition >= topMouth) && (icPosition <= bottomMouth)){ //if ice cream in mouth, "eat"
      icInstance.hide();
      score++;
    }

    if(xPos >= positions[44][0] && xPos <= positions[50][0] && cPosition >= positions[46][1]  && cPosition <= positions[53][1]){
      icInstance.hide();
      score--;
    }*/

}
