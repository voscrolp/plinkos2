
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var ground;

var divisionHeight = 200;
var particleCount = 0;
var particle;
var score = 0;
var i;

var particleOnScreen;

var gameState;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(width/2,875,800,400);
  particle = new Particle(100,100,10,10);

  Engine.run(engine);
  
  gameState = "play";
  particleOnScreen = false;
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  console.log(particleOnScreen);

  push();
  textSize(25);
  fill(255);
  textAlign(CENTER);
  text("500",40,height-divisionHeight/2);
  text("500",120,height-divisionHeight/2);
  text("500",200,height-divisionHeight/2);
  text("500",280,height-divisionHeight/2);

  text("100",360,height-divisionHeight/2);
  text("100",440,height-divisionHeight/2);
  text("100",520,height-divisionHeight/2);

  text("200",600,height-divisionHeight/2);
  text("200",680,height-divisionHeight/2);
  text("200",760,height-divisionHeight/2);

  text("Score:" + score,75,50);
  pop();

  if(gameState == "play"){
//create particles


  if(mouseWentDown(LEFT) && particleCount < 5 && particleOnScreen == false){
    particles.push(new Particle(mouseX,10,10));
    particleCount = particleCount + 1;
    particleOnScreen = true;
  }

  

  for(i = 0; i < particles.length; i++){
    particles[i].score();
    particles[i].display();
  }

  if(particleCount == 6){
    gameState = "end";
  }
}

if(gameState == "end"){
  push();
  textAlign(CENTER);
  fill(255);
  textSize(20);
  text("Game Over!", 400, 350);
  pop();
}


//create plinkos
  for(var a = 50; a <= 750; a = a + 50){
	  plinkos.push(new Plinko(a,75,10));
  }

  for(var a = 75; a <= 725; a = a + 50){
	plinkos.push(new Plinko(a,175,10));
  }

  for(var a = 50; a <= 750; a = a + 50){
	plinkos.push(new Plinko(a,275,10));
  }

  for(var a = 75; a <= 725; a = a + 50){
	plinkos.push(new Plinko(a,375,10));
  }




  for(var z = 0; z < plinkos.length; z++){
	  plinkos[z].display();
  }

//create divisions
  for(var y = 0; y <= width; y = y + 80){
    divisions.push(new Ground(y,height-divisionHeight/2,10,divisionHeight));
  }

  for(var r = 0; r < divisions.length; r++){
    divisions[r].display();
  }


  //scoring
  //325 boundary for 500
  

  drawSprites();
 
}



