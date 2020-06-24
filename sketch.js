var world,engine;
var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;
var roof1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(340,500,80);
	bob2 = new Bob(420,500,80);
	bob3 = new Bob(500,500,80);
	bob4 = new Bob(580,500,80);
	bob5 = new Bob(660,500,80);

	string1 = new String(bob1.body,{x:340,y:100});
	string2 = new String(bob2.body,{x:420,y:100});
	string3 = new String(bob3.body,{x:500,y:100});
	string4 = new String(bob4.body,{x:580,y:100});
	string5 = new String(bob5.body,{x:660,y:100});

	roof1 = new Roof(500,100,410,40);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  roof1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:350,y:-85});
	}
}




