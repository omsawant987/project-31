
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(240,760,480,20)

	for(var k = 0;k <= width;k = k + 80){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
	}

	for(var j = 40; j <= width; j=j+50){
		plinkos.push(new Plinkos(j,75,10))
	}
	for(var j = 15; j <= width-10; j=j+50){
		plinkos.push(new Plinkos(j,75,10))
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display();

  for(var j = 0; j < particles.length; j++){
	  particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
	  divisions[k].display();
  }
 
}



