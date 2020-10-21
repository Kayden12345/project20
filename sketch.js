var  wall, thinkness; 
var  bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thinkness=random(22,83)
  bullet= createSprite(50, 200, 20,50)
  bullet.shapeColor=color(255,255,255)
  wall= createSprite(1200,200, thinkness, height/2)

  
}

function draw() {
  background(0,0,0);  
  bullet.velocityX = speed;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
      bullet.velocityX=0;
      var deformation=0.5 * weight * speed* speed/22500;
      if(deformation>180)
      {
         bullet.shapeColor=color(255,0,0);
      }
 
      if(deformation<180 && deformation>100)
      {
          bullet.shapeColor=color(230,230,0);
      }
 
      if(deformation<100)
      {
          bullet.shapeColor=color(0,255,0)
      }
      
  }
  if(hasCollided(bullet, wall))
{
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thinkness *thinkness *thinkness);

    if(damage>10)
    {
        wall.shapeColor=color(255,0,0);

    }



    if(damage<10)
    {
        wall.shapeColor=color(0,255,0);
    }
}
 
  hasCollided(bullet, wall);
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
   bulletRightEdge =lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
      return true
   }
      return false;
}

