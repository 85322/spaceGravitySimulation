class Ball {
    constructor(x, v){
      this.x = x;
      this.y = 100;
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
  
  class Planet {
    constructor(x, y, img){
      this.x = x;
      this.y = y;
      this.img = loadImage('assets/' + img + ".png");
    }
      display(){
        image(this.img, this.x -30, this.y);
    }
  }