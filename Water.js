class Water{
    constructor(x,y){
        var options={
            isStatic:false,
            'restitution':1,
            'friction':0.1,
            'density':1.2
        }
       
        this.body=Bodies.circle(this.x,this.y,10,options);
        this.x=x;
        this.y=y;

        World.add(world,this.body);
    }

    display(){
        push ();
            translate (this.body.position.x,this.body.position.y);
            ellipseMode(CENTER);
            ellipse(this.x,this.y,5,5);
        pop ();
    }
}