var Player;
var border;
var npc,npc1,npc2;
var bullet1,bullet2,bullet3,bulletImage;
var topBorder,bottomBorder;
var level = 0;
var distanceTravelled = 0;

function preload(){
  bulletImage = loadImage("bullets.jpg");
}

function setup() {
  createCanvas(800,700);

  Player = createSprite(100, 650, 50, 50);
  Player.shapeColor = "black";

  topBorder = createSprite(windowWidth/2,0,windowWidth,10);
  topBorder.shapeColor = "black";
  bottomBorder = createSprite(windowWidth/2,700,windowWidth,10);
  bottomBorder.shapeColor = "black";

  security = new Security();
}

function draw() {
  background("cyan"); 

  Player.collide(topBorder);
  Player.collide(bottomBorder);

  if(level == 0){
    security.display();
    fill("black");
    textSize(20);
    text("enter your username here -->",30,365);
    text("<-- click here to play",400,400);
    text("click here to buy stuff -->",140,425);
  }
  
  if(level == 1){

    distanceTravelled++;

    if(keyDown("SPACE")){
      Player.velocityY -= 5;
      creationOfBullets();
    }else{
      Player.velocityY++
    }

    if(keyDown("D")){
      Player.x += 10;
    }

    if(keyDown("A")){
      Player.x -= 10;
    } 

    drawSprites();
  }
  creationOfNpcs();
  movementOfNpcs
}

function creationOfNpcs(){
  if(level == 1){
    if(frameCount%200 == 0 ){
      npc1 = createSprite();
      npc1.height = 50;
      npc1.width = 50;
      npc1.x = Math.round(random(400,700));
      npc1.y = 670;
      npc1.lifetime = 100;
    }
    if(frameCount%100 == 0 ){
      npc2 = createSprite();
      npc2.height = 50;
      npc2.width = 50;
      npc2.x = Math.round(random(400,700));
      npc2.y = 670;
      npc2.lifetime = 50;
    }
  }
}

function creationOfBullets(){
  bullet1 = createSprite();
  bullet1.addImage("bullet1",bulletImage);
  bullet1.x = Player.x;
  bullet1.y = Player.y+30;
  bullet1.velocityY +=5;
  bullet1.lifetime = 200;

  bullet2 = createSprite();
  bullet2.addImage("bullet1",bulletImage);
  bullet2.x = Player.x+20;
  bullet2.y = Player.y+30;
  bullet2.velocityY+= 5
  bullet2.lifetime = 200;

  bullet3 = createSprite();
  bullet3.addImage("bullet1",bulletImage);
  bullet3.x = Player.x-20;
  bullet3.y = Player.y+30;
  bullet3.velocityY += 5;
  bullet3.lifetime = 200;
}