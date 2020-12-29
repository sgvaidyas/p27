const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,100,500,50);

	bob1 = new Bob(200,400,70);
	bob2 = new Bob(280,400,70);
	bob3 = new Bob(360,400,70);
	bob4 = new Bob(440,400,70);
	bob5 = new Bob(520,400,70);

	rope1 = new Rope(bob1.body,roof.body,-150,0);
	rope2 = new Rope(bob2.body,roof.body,-70,0);
	rope3 = new Rope(bob3.body,roof.body,10,0);
	rope4 = new Rope(bob4.body,roof.body,90,0);
	rope5 = new Rope(bob5.body,roof.body,170,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(96,233,255);
  
  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



