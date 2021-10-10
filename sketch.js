var bcg,cat,mouse;
var catimg,mouseimg;
var catimg1,catimg2,catimg3,catimg4
function preload() {
    //load the images here
    bcg=loadImage("images/garden.png")
    catimg=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png")
    mouseimg=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(900,700)
cat.addAnimation("runningcat",catimg)
cat.scale=0.2
mouse=createSprite(100,700)
mouse.addAnimation("runningmouse",mouseimg)
mouse.scale=0.2
}

function draw() {

    background(bcg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocityX=0
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=== LEFT_ARROW){
cat.velocityX= -5
cat.addAnimation("runningcat",catimg)
}

}
