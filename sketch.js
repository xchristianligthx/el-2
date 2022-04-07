
var ground, invisibleGround, groundImage;
var trex, trex_running, trex_collided;

function preload() {

  

  
  
  groundImage = loadImage("sea.png")

  trex_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png" ,"ship-4.png");


 trex_collided = loadImage("ship-1.png");

  
}

function setup() {
createCanvas(2000, 2000);

  

//crear sprite de Trex


//crear sprite de suelo
//ground.addImage("ground",groundImage);
//ground.x = ground.width /10;
//ground.velocityX = -10;
  
//invisibleGround = createSprite(200,350,400,10); 

//invisibleGround.visible = false;

trex = createSprite(200,350,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.3;
}

function draw() {
background("blue");

//console.log(trex.y)

//hacer que el Trex salte al presionar la barra espaciadora


trex.x=World.mouseX;

//if (ground.x < 0) {
//  ground.x = ground.width / 2;
//}

//trex.collide(ground);

//trex.collide(invisibleGround);

//if (keyDown("space") ) {

  //trex.velocityY = -10;
//}

//trex.velocityY = trex.velocityY + 0.8

drawSprites();
}
