const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var bird;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,80,80);
    box2 = new Box(900,320,80,80);
    box3 = new Box(700,240,80,80);
    box4 = new Box(900,240,80,80)
    box5 = new Box(800,180,80,80);
    pig1 = new Pig(800,340);
    pig2 = new Pig(800,240);
    //PI/2=90
    log1 = new Log(800,280,280,PI/2);
    log2 = new Log(800,200,280,PI/2);
    log3 = new Log(730,140,150,PI/7);
    log4 = new Log(870,140,150,-PI/7);
    //bird
    bird = new Bird(200,200);
    ground = new Ground(600,height,1200,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}