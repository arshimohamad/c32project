const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score=0;

function preload() {
  getTimeForBgImg();
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);

  ground1 = new Ground(650,170,200,25);
  ground2 = new Ground(380,250,200,25);
  //ground2 boxes
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,30,40);

  //ground1 boxes
  box7 = new Box(640,155,30,40);
  box6 = new Box(670,155,30,40);
  box5 = new Box(610,155,30,40);
  box4 = new Box(630,125,30,40);
  box3 = new Box(660,125,30,40);
  box2 = new Box(645,100,30,40);

  ball = new Ball(300,300,15);

  slingshot = new Slingshot(ball.body,{x:200,y:50});

}

function draw() {
  background("black");
  text("score: "+score,730,60)  
  ground1.display();
  ground2.display();

  ball.display();
  slingshot.display();

  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();

  box7.display();
  box7.score();
  box6.display();
  box6.score();
  box5.display();
  box5.score();
  box4.display();
  box4.score();
  box3.display();
  box3.score();
  box2.display();
  box2.score();
}
function mouseDragged(){
  //ball.body.position.x= mouseX;
  //ball.body.position.y=mouseY;
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
  console.log("mouse is released")
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32 && ball.body.speed<1){
      Matter.Body.setPosition(ball.body,{x:200,y:50});
      slingshot.attach(ball.body);

  }
}
async function getTimeForBgImg(){
  var url="http://worldtimeapi.org/api/timezone/America/Chicago"
  var response= await fetch(url)
  var responseJson= await response.json()
  var datetime= responseJson.datetime;
  var hour= datetime.slice(11,13);
  if(hour>=06 && hour<=19){
      bg= ("bg.png")
  }
  else{
      bg=("bg2.jpg")
  }
  backgroundImg= loadImage(bg);
  console.log(hour);

}

