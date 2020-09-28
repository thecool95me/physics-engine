const  Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

var engine,world;
var ground
var box1,box2;
var ground;

function setup() {
 var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(210,200,30,30);
  box2 = new Box(200,100,30,30);
  ground = new Ground(200,350,400,30);

}

function draw() {
  background("black");
  Engine.update(engine) 
 box1.display();
 box2.display();
 ground.display();

  drawSprites();
}