'use strict';

class Planet {
  constructor(x, g){
    this.x = x;
    this.y = 0;
    this.speed = g;
}
  move(){
    this.y = this.y - this.speed;
  }
  show(){
    stroke(255);
    circle (this.x, this.y, 5);
  }
}
const ball = [];

function setup (){
    createCanvas (750, 500);
    textSize(20);
    //array aus den einzelnen m/s der planeten
    //vielleicht doch planeten einzeln und nicht als loop
    for (let i = 0; i < 12; i++) {
      ball[i] = new Planet(10, -3);  
      print(ball[i]);
    }
  }
  
  function draw(){ 
    background(0, 0, 0);
  
    ball.forEach(ball => {
      ball.move();
      ball.show();
      
    if (ball.y > 400) {
      ball.y = -350;   
    }
  });
  text("1km Ball Drop On Solar System Bodies", 175, 25);
}