//Matter.js variables:
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

var thunderSprite,thunder1,thunder2,thunder3,thunder4;
var boy;
var drop,max=100;

function preload(){
    //thunder
    thunder1=loadImage("thunderbolt/1.png");
    thunder2=loadImage("thunderbolt/2.png");
    thunder3=loadImage("thunderbolt/3.png");
    thunder4=loadImage("thunderbolt/4.png");

}

function setup(){
    createCanvas(400,675);
    engine=Engine.create();
    world=engine.world;
 
    //Ground:
    ground=new Ground(0,670,1000,20);
    
    //boy:
    boy=new Umbrella(20,20);
}

function draw(){
    background("black");
    Engine.update(engine);

    //create rain
    for(i=0;i<max;i++){
        drop=createSprites(random(0,400),random(0,400));

        if(this.drop.position.y>675){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)});
        }

    }

    //ground
    ground.display();

    boy.display();
}   

function createThunder(){
    rand=Math.round(random(1,4));
    if (frameCount%80===0){
        thunderSprite=frameCount;
        thunderSprite=createSprites(random(10,30),random(10,30),window.innerWidth*0+10,window.innerHeight*0+10);
        switch(rand){
            case 1: thunderSprite.addImage(thunder1);
            break;
            case 2:thunderSprite.addImage(thunder2);
            break;
            case 3:thunderSprite.addImage(thunder3);
            break;
            case 4:thunderSprite.addImage(thunder4);
            break;
            default:break;    

            //thunder.scale=random(0.3,0.6);
        }
    }
}
