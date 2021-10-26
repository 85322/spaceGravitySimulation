'use strict';

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


const ballVelocity = [-2.76, -0.285, -0.45, -0.47, -0.187, -0.285, -0.745, -0.487, -0.44, -0.492, -0.113];
const ballArray = [];
const planetArray = [];
let timeDisplay = "0.0";
let timeCalc;
const planetImageArray = ['sun','mercury','venus','earth','moon','mars','jupiter','saturn','uranus','neptune','pluto'];
const calcGravityDataArray = [274, 3.7, 8.9, 9.8, 1.6, 3.7, 24.8, 10.4, 8.9, 11.2, 0.6];

function setup (){
    createCanvas (1000, 600);
    textSize(20);
    let xPos = 0;
    let yPos = 505;
    //creates ball and planet data, fills arrays
    for (let i = 0; i < ballVelocity.length; i++) {
      xPos += 75;
      ballArray[i] = new Ball(xPos, ballVelocity[i]);  
      planetArray[i] = new Planet(xPos, yPos, planetImageArray[i]);
    }
}
  
  function draw(){ 
    background(0, 0, 0);
    stroke(100);
    line(0, 500, 850, 500);
    line(0, 100, 850, 100);
    text("1 km", 900, 100);
    text("0 km", 900, 500);
    text("Gravity Fall Simulation", width/2 -100, 10);
    text("t = " + timeDisplay, 0, 80);
    fill(255, 255, 255);

    function time(){
      let time = millis();
      timeCalc = time / 1000;
      timeDisplay = time / 1000;
    }
    time();

    //draws falling balls and planets from array data
    ballArray.forEach(ballArray => {
      ballArray.move();
      ballArray.display();
      
    if (ballArray.y > 490) {
      ballArray.ballVelocity = 0;   
    }
  });

  planetArray.forEach(planetArray => {
    planetArray.display();
});
  //returns data of falling ball graphic
  //[t] based on timer to re-calculate ballVelocity each second of free fall 
  const calc = (g, t) => {
    //let d = 0;
    let v = 0;
    v = g * t;
    //d = v * t / 3600;
    t = Math.sqrt(2 * 1000 / g);
    const returnArray = [v, t];
    return returnArray;
  }
  
  //inserts data into calc() from gravitation array, displays return values of calc(), increments xTextPos pixel position for each planet
  const calcInputAndDisplay = () => {
    let xTextPos = 0;
  for (let i = 0; i < calcGravityDataArray.length; i++) {
    let results = calc(calcGravityDataArray[i], timeCalc);
    xTextPos += 75;

    textSize(13);
    noStroke();
    fill(255, 255, 255);
    //text(Math.floor(results[0]) + "km/h", xTextPos, 50);
      if(timeDisplay >= results[1]) {
        text(Math.floor(results[0]) + "km/h", xTextPos, 50);
        fill(0, 255, 0);
        text(results[1].toFixed(2) + " s", xTextPos, 80);   
        ballArray[i].ballVelocity = 0; 
      }else{
        fill(255, 0, 0);
        text(timeDisplay + "s", xTextPos, 80);
      }
    fill(255, 255, 255);
    text("Gravity \n" + calcGravityDataArray[i] + " m/s²", xTextPos -22, 580);
  }
}
calcInputAndDisplay();
}

