class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("pinksquare.png")
      this.visibility = 255

      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //rectMode(CENTER);
        //rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,0,40,40);
        pop();
       }
      
      else{
        World.remove(world, this.body); // will remove the body
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility); // reduces the visibility of the image (max vis, value i want ot give)
        // fading effect can only be done on an image
        image(this.image, this.body.position.x, this.body.position.y, 40,40);
        pop();
      }
    };
      score(){
        if(this.visibility<0 && this.visibility>-105){
          score=score+1; 
        }
    } 
  };