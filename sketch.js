const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world=engine.world;

var option_ground= {
  isStatic:true
}

  ground=Bodies.rectangle(200,370,400,30,option_ground);
  World.add(world,ground);

  var option_ball= {
    restitution:0.8
  }

  ball=Bodies.circle(200,100,35,option_ball);
  World.add(world,ball);

}

function draw() {
  background("blue"); 
  
  Engine.update(engine)

  rectMode(CENTER);
  
  rect(ground.position.x,ground.position.y,400,30)
ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,35)

}