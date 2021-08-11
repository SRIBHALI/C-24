const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase,computerplayer;
var playerbase,player;

function preload(){
  computerbaseImage = loadImage("./assets/base2.png");
  playerbaseImage = loadImage("./assets/base1.png");
  playerImage = loadImage("./assets/player.png");
  computerplayerImage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerbase = new ComputerBase (900,random(450,height-300),180,150);
   playerbase = new PlayerBase (100,random(450,height-300),180,150);
   player = new Player (100,playerbase.body.position.y-140,50,150);
   computerplayer = new ComputerPlayer (900,computerbase.body.position.y-140,50,150);

   rectMode(CENTER);
   ellipseMode(RADIUS);
 }

function draw() {

  background("lightblue");

  Engine.update(engine);

  // Title
  fill("green");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 50);

   //Display Playerbase and computer base 
     computerbase.display()
     playerbase.display()
     player.display()
     computerplayer.display()

   //display Player and computerplayer
 

}
