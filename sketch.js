
var monkey , monkey_running;
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage; 
var foodGroup, obstacleGroup;
var survivalTime,score;
var ground; 
var GAMEOVER;
var Background,BackgroundImage;
var score=0;

function preload(){
  
  
    BackgroundImage = loadImage("jungle.jpg")
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");

  
 
}



function setup() {
  createCanvas(800,400);
  
  Background = createSprite(0,0,800,400);
  Background.addImage(BackgroundImage);
   Background.scale=1.5;
  Background.x=Background.width/2;
  Background.velocityX=-4;
  
  monkey=createSprite(100,340,20,50);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
   
  
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x);
  ground.visible=false;
  
  
  
  
  
  foodGroup=new Group();
  obstacleGroup=new Group();
 

  score = 0;

    
}


function draw() {
  background(0);
  
 
   
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
   if(Background.x<100){
    Background.x=Background.width/2;
  }
   if(foodGroup.isTouching(monkey)){
      foodGroup.destroyEach();
    score = score + 2;
    }
  
  switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
   if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY=monkey.velocityY+0.8;

  
  monkey.collide(ground);
  

  
  spawnfood() ;
  
  spawnobstacles() ;
 
  
  
  if(obstacleGroup.isTouching(monkey)){
  monkey.scale=0.08;
  
  }
  
  
  drawSprites ();
    stroke("red");
  textSize(20);
  fill("red");
  text("Score:" + score,500,50);
    
}

 function spawnfood () {
   if (frameCount % 80 === 0){
   banana = createSprite(600,250,40,10);
    banana.y=random(120,200);
   banana.addImage(bananaImage);
   banana.scale=0.05;
     banana.velocityX=-5;
      banana.lifetime = 300;
    monkey.depth = banana.depth;
      monkey.depth = monkey.depth + 1;
     foodGroup.add(banana);
   }
   
 }

function spawnobstacles() {
  if (frameCount % 300 === 0){
  obstacle = createSprite(800,320,10,40);
    
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.15;
    obstacle.velocityX=-5;
     obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
}
}



