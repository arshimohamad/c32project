class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA != null){
            var pointA=this.sling.bodyA.position;
            var pointB=this.sling.pointB;
            push()
            strokeWeight(4);
            stroke(48,22,8);
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            pop()
        }
       

    }
    fly(){
        this.sling.bodyA= null
    }
    attach(body){
        this.sling.bodyA=body;
    }  
}
