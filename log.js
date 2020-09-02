class Log{
    constructor(x,y,h,angle){
        var options ={
            restitution: 0.5,
            friction: 1.0,
            density: 0.8
        }
        this.body = Bodies.rectangle(x,y,20,h,options);
        Matter.Body.setAngle(this.body,angle);
        this.widht = 20;
        this.height = h;

        World.add(world, this.body);
    }
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       strokeWeight(4);
       stroke("green");
       fill("white");
       rect(0,0,this.widht,this.height);
       pop(); 
       

    }
}