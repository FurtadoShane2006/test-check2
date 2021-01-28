class Umbrella{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=loadImage("Walking Frame/walking_1.png"/*,"Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png"*/);
        World.add(world,this.body);
    }
    display(){
        push ();
            //translate (this.body.position.x,this.body.position.y);
            imageMode(CENTER);
            image(this.image,this.x,this.y,this.width,this.height);
        pop ();
    }
}