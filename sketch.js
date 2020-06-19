const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1, platform2;
var box1, box2, box3, box4, box5;
var box6, box7, box8, box9, box10;




function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(1000, 160)
  box2 = new Box(980, 160)
  box3 = new Box(1020, 160)
  box4 = new Box(990, 140)
  box5 = new Box(1010, 140)

  box6 = new Box(950, 380)
  box7 = new Box(980, 380)
  box8 = new Box(1000, 380)
  box9 = new Box(1020, 360)
  box10 = new Box(1010, 360)

  platform1 = new Ground(1000, 200, 200, 10);
  platform2 = new Ground(600, 390, 1200, 10)
}

function draw() {
  Engine.update(engine);

  background(255,255,255); 
  platform1.display();
  platform2.display();
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 

  box6.display(); 
  box7.display(); 
  box8.display(); 
  box9.display(); 
  box10.display(); 


}