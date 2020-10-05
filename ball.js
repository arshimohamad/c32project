class Ball {
    constructor(x, y, r) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.circle(x, y,r, options);
      this.radius=15;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    };
  };