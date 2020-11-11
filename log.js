class Log {
  constructor(x, y, height, angle) {
    var options = { restitution: 0.6, friction: 1.0 };
    this.body = Bodies.rectangle(x, y, 20, height, options);
    Matter.Body.setAngle(this.body, angle);
    World.add(world, this.body);
    this.width = 20;
    this.height = height;
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
