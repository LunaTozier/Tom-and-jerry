var tom, tomImg , tom_moving, tom_happy;

var gardenImage ;

var jerry, jerryImg, jerry_moving , jerry_happy;

function preload() {
    //load the images here
tomImg = loadAnimation("tom1.png");

jerryImg = loadAnimation("jerry1.png");

jerry_moving = loadAnimation("jerry2.png");

jerry_happy = loadAnimation("jerry3.png");

tom_moving = loadAnimation("tom2.png");

tom_happy = loadAnimation("tom3.png");

gardenImage = loadImage("background.jpg");
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here


    tom = createSprite(480,200,10,10);
    tom.addAnimation("standing", tomImg);
    tom.scale = 0.8; 
    tom.addAnimation("moving", tom_moving);
    tom.addAnimation("happy", tom_happy);

    jerry = createSprite(80,200,10,10);
    jerry.addAnimation(" jerry standing", jerryImg);
    jerry.scale = 0.04;
    jerry.addAnimation("jerry moving", jerry_moving);
    jerry.addAnimation("jerry happy", jerry_happy); 

  

}

function draw() {

    background(gardenImage);


    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.changeAnimation("happy", tom_happy);
        tom.scale = 0.3;
        jerry.changeAnimation("jerry happy", jerry_happy);
        jerry.scale = 0.05;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === RIGHT_ARROW){
    jerry.changeAnimation ("jerry moving", jerry_moving);
    jerry.scale = 0.1 ; 
}
if (keyCode === LEFT_ARROW){
    tom.changeAnimation ("moving", tom_moving);
    tom.x = tom.x - 15 ; 
}

}
