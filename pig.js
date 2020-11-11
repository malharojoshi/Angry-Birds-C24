class Pig {
  constructor(x, y) {
    var options = { restitution: 0.6 };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    World.add(world, this.body);
    this.width = 50;
    this.height = 50;
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("pink");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
