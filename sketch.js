'use strict';

class Ball {
  constructor(x, v){
    this.x = x;
    this.y = 100;
    this.velocity = v;
    
}
  move(){
    this.y = this.y - this.velocity;
  }
  show(){
    stroke(255);
    circle(this.x, this.y, 5);
  }
}

class Planet {
  constructor(x, y, img){
    this.x = x;
    this.y = y;
    this.img = loadImage('assets/' + img + ".png");
  }
    show(){
      image(this.img, this.x -30, this.y);

  }
}

let xPos = 0;
let yPos = 505;
let yTextPos = 0;
let yTextPos2 = 0;
const velocity = [-3, -0.43, -5, -0.43, -5, -5, -5, -5, -5, -5, -5];
const ballArray = [];
const planetArray = [];
let timeDisplay = "0:00";
let timeCalc = 0;
const planetArrayImage = ['sun','mercury','venus','earth','moon','mars','jupiter','saturn','uranus','neptune','pluto'];
const calcFunctionDataArray = [274, 3.7, 8.9, 9.8, 1.6, 3.7, 24.8, 10.4, 8.9, 11.2, 0.6];

function preload() {
}

function setup (){
    createCanvas (1000, 600);
    textSize(20);

    //creates ball data and planets, fills arrays
    for (let i = 0; i < velocity.length; i++) {
      xPos += 75;
      ballArray[i] = new Ball(xPos, velocity[i]);  
      planetArray[i] = new Planet(xPos, yPos, planetArrayImage[i]);
    }

    function startTimer(duration, display) {
      let timer = duration, minutes, seconds;
      setInterval(function () {
          minutes = parseInt(timer / 60, 10)
          seconds = parseInt(timer % 60, 10);
          minutes = minutes < 10 ? + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          display.textContent = minutes + ":" + seconds;
          timeDisplay = display.textContent;
          timeCalc = parseInt(seconds);
        
          if (++timer < 0) {
        timer = duration;
          }
    }, 1000);
  }
  function timer() {
      let Minutes = 0,
         display = document.getElementById("timer");
      startTimer(Minutes, display);
  };

  timer();
}
  
  function draw(){ 
    background(0, 0, 0);
    stroke(100);
    line(0, 500, 850, 500);
    line(0, 100, 850, 100);
    noStroke();
    //text("1km Ball Drop On Solar System Bodies", 180, 25);
    text(timeDisplay + " tDisplay", 10, 20);
    text(timeCalc + " timecalc", 200, 20);
    fill(255, 255, 255);

    //draws falling balls and planets from array data
    ballArray.forEach(ballArray => {
      ballArray.move();
      ballArray.show();
      
    if (ballArray.y > 490) {
      ballArray.velocity = 0;   
    }
  });

  planetArray.forEach(planetArray => {
    planetArray.show();
});
  //calculates and displays data of falling ball graphic
  //[t] based on timer to re-calculate velocity each second of free fall 
  const calc = (g, t, yTextPos, yTextPos2) => {
    //let d = 0;
    let yPos = yTextPos;
    let yPos2 = yTextPos2;
    let v = 0;
    v = g * t;
    //d = v * t / 3600;
    t = Math.sqrt(2 * 1000 / g);
    //text((d).toFixed(2) + " km", 50, 75);
    //return v = g * t;
    textSize(15);
    noStroke();
    text(Math.floor(v) + " km/h", 50, 50); //50 50
    text(t.toFixed(2) + " time", 50, 80);
    fill(255, 255, 255);
    //console.log("d = " + d + " v" + v + " * t" + t + " / 3600");
  }
  calc(9.8, timeCalc);
  //calc(274, timeCalc);

  for (let i = 0; i < calcFunctionDataArray.length; i++) {
    yTextPos += 75;
    yTextPos2+= 75;
    calc(i, timeCalc, yTextPos, yTextPos2);
    //console.log("calcFunctionDataArray");
  }
}