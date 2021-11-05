class Sphere {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

class Ball extends Sphere {
    constructor(x, v){
      super(x, 100);
      this.ballVelocity = v;
  }
    move(){
      this.y = this.y - this.ballVelocity;
    }
    display(){
      stroke(255);
      circle(this.x, this.y, 7);
    }
  }
  
  class Planet extends Sphere {
    constructor(x, y, img){
      super(x, y);
      this.img = loadImage('assets/' + img + ".png");
    }
      display(){
        image(this.img, this.x -30, this.y);
    }
  }