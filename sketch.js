const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var helicopter,helicopter2=helicopter.png;
var package,package2=package.png;
var ground;
var engine,world;

function setup(){
var canvas = createCanvas(500,500);
    engine=Engine.create();
world=engine.world;
var ground_options={
    isStatic:true
}
package_options={
    restitution:1.0
}
package.addImage(package.png,package2);
package=Bodies.rectangle(200,100,50,50);

World.add(world,package);

ground=Bodies.rectangle(250,490,10,10,ground_options);
}

function draw(){
background(0);






}






























