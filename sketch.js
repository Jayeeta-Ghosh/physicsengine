const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,ourworld,ourgroundbody;

function setup() {
  createCanvas(400,400);
  
  myengine= Engine.create();
  ourworld=myengine.world;
  var options= {
    isStatic:true,
  }
  ourgroundbody=Bodies.rectangle(200,390,400,20,options);
  World.add(ourworld,ourgroundbody);

}

function draw() {
  background(0);  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ourgroundbody.position.x,ourgroundbody.position.y,400,20);
}