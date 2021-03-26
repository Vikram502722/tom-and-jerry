var background;
var cat;
var mouse;

function preload() {
    backgroundimg=loadImage("images/garden.png");
    catimg4=loadImage("images/cat4.png");
    catimg2=loadImage("images/cat2.png","images/cat3.png");
    catimg1=loadImage("images/cat1.png");
    mouseimg1=loadImage("images/mouse1.png");
    mouseimg2=loadImage("images/mouse2.png","images/mouse3.png");
    mouseimg4=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(870,600);
    cat.addImage("tom sleeping",catimg1);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addImage("moouse standing",mouseimg1);
    mouse.scale=0.15;


    


    //create tom and jerry sprites here

}

function draw() {

    background(backgroundimg);
    if(cat.addImage("cat sitting",catimg1)){
        mouse.addImage("mouse chesse",mouseimg1);
    }


    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addImage("cat checking",catimg4);
        cat.x=300;
        cat.scale=0.2;
        mouse.addImage("mouse investigating",mouseimg4);
        mouse.scale=0.15;
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === lEFT_Arrow){
        cat.velocityX=-5;
        cat.addAnimation("cat running",catimg2);
        cat.changeAnimation("cat running");
        mouse.addImage("funny mouse",mouseimg2);
        mouse.frameDelay;
        mouse.changeImage("funny mouse");

    }


  //For moving and changing animation write code here


}
