class Block {
  constructor(x,y,height,width) {
    var options = {
      isStatic: false,
      restitution: 0.8,
      friction: 1.0,
      density: 1.0
    }
    this.x=x;
    this.y=y;
    this.height = height;
    this.width = width;
    this.Visibility = 255
    this.body = Bodies.rectangle(this.x,this.y,this.height,this.width);

    World.add(world,this.body);
  }

  score(){
    if(this.Visibility<0 && this.Visibility>-105){
      score++;
    }
  }

  display() {
    if(this.body.speed < 3) {
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
      pop();
    }
    var pos = this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill("blue");
    rect(0,0,this.height,this.width);
    pop();
  }
}