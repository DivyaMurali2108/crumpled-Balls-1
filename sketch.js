var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paper=new paper (100,600,20)
	Engine.run(engine);
	rect1=createsprite(300,350,100,10)
	rect2=createsprite(250,310,10,80)
	rect3=createsprite(350,310,10,80)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display();
}



