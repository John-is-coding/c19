var tower, towerImg
var door, doorImg, doorsGroup
var climber, climberImg, climbersGroup
var ghost, ghostAnimation
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostAnimation = loadAnimation("ghost-standing.png", "ghost-jumping.png")
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300)
  tower.addImage(towerImg)
  tower.velocityY = 10

  ghost = createSprite(300,300)
  ghost.addAnimation("jumping", ghostAnimation)
  ghost.scale = 0.6

  doorsGroup = new Group()
  climbersGroup = new Group()
}

function spawnDoors() {
  if(frameCount % 100 == 0){
    door = createSprite(Math.round(random(100,500)),0)
  door.velocityY = 10
  door.addImage(doorImg)
  door.lifetime = 70
  doorsGroup.add(door)

  climber = createSprite(door.x,71)
  climber.velocityY = 10
  climber.addImage(climberImg)
  climber.lifetime = 70
  climbersGroup.add(climber)

  
  }
    
}
function draw() {
  
  background(200);
  spawnDoors()

  if (keyDown("right_arrow")) {
    ghost.x = ghost.x + 10
  }

  if (keyDown("left_arrow")) {
    ghost.x = ghost.x - 10
  }

  if (keyDown("up_arrow")) {
    ghost.velocityY = -5
  }
  // gravvvvvity
  ghost.velocityY = ghost.velocityY + 0.5

  //reset tower nfsndajoiodsaklfdil
  if (tower.y > 400) {
    tower.y = 300
  }
  drawSprites()
}
