var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
 drawSprites()
if(keyDown(LEFT_ARROW)){
  ball.x-=5
}
if(keyDown(RIGHT_ARROW)){
  ball.x+=5
}

}




