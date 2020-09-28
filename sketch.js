var ground1, slingshot, polygon, ball;
var block1, block2,block3,block4 ,block5 ,block6 ,block7 ,block8,block9,block10,
block11 ,block12 ,block13 ,block14 ,block15 ,block16 ,block17 ,block18;

var score = 0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ground2, ground3;


function preload()
{
	polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
  world = engine.world;

  text("Score : "+score, 750, 40);

	ground1 = new Ground();
	ground2 = new Ground(390,290,230,20);
	ground3 = new Ground(390,680,230,20);
  ball = Bodies.circle(800,200,20);
  World.add(world,ball);
	slingshot = new SlingShot(this.ball,{x:800, y:200});
  block1 = new Block(330,600,30,40);
	block2 = new Block(360,600,30,40);
	block3 = new Block(390,600,30,40);
	block4 = new Block(420,600,30,40);
	block5 = new Block(450,600,30,40);
	block6 = new Block(360,560,30,40);
	block7 = new Block(390,560,30,40);
	block8 = new Block(420,560,30,40);
	block9 = new Block(390,510,30,40);
	block10 = new Block(330,235,30,40);
	block11 = new Block(360,235,30,40);
	block12 = new Block(390,235,30,40);
	block13 = new Block(420,235,30,40);
	block14 = new Block(450,235,30,40);
	block15 = new Block(360,195,30,40);
	block16 = new Block(390,195,30,40);
	block17 = new Block(420,195,30,40);
	block18 = new Block(390,155,30,40);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  rectMode(CENTER);
  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  
  imageMode(CENTER);
  image(polygonImg, ball.position.x, ball.position.y, 40,40);
  slingshot.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(this.body, {x: mouseX , y: mouseY});
    console.log("checkmousefunction");
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keycode === 32){
    slingshot.attach(this.polygon);
  }
}
