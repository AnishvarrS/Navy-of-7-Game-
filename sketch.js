var bg,bgImg;
var player, Graphite2020Img, shooter_shooting;


function preload(){
  
  Graphite2020Img = loadImage("assets/Graphite.png")
  //shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/AncientWar.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,windowWidth,windowHeight) 
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1500, displayHeight-500, 50, 50);
 player.addImage(Graphite2020Img)
   player.scale = 0.3
   //player.debug = true
   //player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  //player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  //player.addImage(shooterImg)
}

drawSprites();

}
