'use strict';

class Ball {
  constructor(x, v){
    this.x = x;
    this.y = 15;
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

let i2 = 0;
let xPos = 0;
const velocity = [-10, -3, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5];
const ballArray = [];
let timeDisplay = "0:00";
let timeCalc = 0;

function setup (){
    createCanvas (750, 500);
    textSize(20);

    for (let i = 0; i < 12; i++, i2++) {
      xPos += 70;
      ballArray[i] = new Ball(xPos, velocity[i2]);  
      print(ballArray[i]);
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
  
    ballArray.forEach(ballArray => {
      ballArray.move();
      ballArray.show();
      
    if (ballArray.y > 400) {
      ballArray.velocity = 0;   
    }

    const calc = (g, t) => {
      let d = 0;
      let v = 0;
      v = g * t;
      d = v * t / 3.6;
      t = Math.sqrt(2 * 1000 / g);
      text((d).toFixed(2) + " km", 50, 75);
      text(t.toFixed(2) + " time", 50, 100);
      noStroke();
      textSize(20);
      text(Math.floor(v) + " km/h", 50, 50);
      fill(255, 255, 255);
      console.log("d = " + d + " v" + v + " * t" + t + " / 3600");
    }

    
    calc(9.8, timeCalc);



  });
  noStroke();
  text("1km Ball Drop On Solar System Bodies", 180, 25);

  text(timeDisplay + " timedisplay", 250, 250);
  text(timeCalc + " timecalc", 270, 270);
  fill(255, 255, 255);
}