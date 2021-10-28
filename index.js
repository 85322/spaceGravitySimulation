'use strict';

function setup (){
    createCanvas (1000, 700);
    textSize(20);
    let xPos = 0;
    let yPos = 505;
    //generates ball and planet data, fills arrays
    for (let i = 0; i < ballVelocity.length; i++) {
      xPos += 75;
      ballArray[i] = new Ball(xPos, ballVelocity[i]);  
      planetArray[i] = new Planet(xPos, yPos, planetImageArray[i]);
    }

    setInterval(() => { 
      setIntervalFunc0();
      setIntervalFunc1();
      setIntervalFunc2();
      setIntervalFunc3();
      setIntervalFunc4();
      setIntervalFunc5();
      setIntervalFunc6();
      setIntervalFunc7();
      setIntervalFunc8();
      setIntervalFunc9();
      setIntervalFunc10();
    }, 10);  

    setInterval(() => { 
      displayTimeHolder++;
      if (displayTimeHolder > 5350) {
        return;
      } else {
        time();
      }
    }, 10);
    
    function time(){
      let time = millis();
      timeDisplay = time / 1000;
    }
     time();
}

  function draw(){ 
    background(0, 0, 0);
    stroke(100);
    line(0, 500, 850, 500);
    line(0, 100, 850, 100);
    text("1 km", 900, 100);
    text("0 km", 900, 500);
    text("Gravity Fall Simulation", 0, 650);
    text("objects not to scale, free fall assuming no air resistance", 0 ,670)
    text("github.com/Anon853", 0, 690);
    text("Joule = ", 0, 10);
    text("distance = ", 0, 35);
    text("t = " + timeDisplay, 0, 95);
    text("velocity = " , 0, 65);
    fill(255, 255, 255);

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

  //returns data of falling ball
  //[t] parameter based on timers to re-calculate ballVelocity each millisecond of free fall  
  const calc = (g, t) => {    //gravity & time
    let v = 0;                //velocity
    let h = 1000;             //height
    let m = 1;                //mass
    let j = 0;                //Joule
    let d = 0;                //distance km rounded
    let d2= 0;                //distance m
    let j2 = 0;               //Joule exact final value
    v = g * t * 3.6;                
    t = Math.sqrt(2 * h / g); 
    d = v * t /7000;
    d2 = v * t /7;
    j = m * g * d2;
    j2 = m * g * h;
    const returnArray = [v, t, j, d, j2];
    return returnArray;
  }
  
  //calls calc(), displays return values of calc(), increments xTextPos pixel position for result display
  const calcInputAndDisplay = () => {
    let xTextPos = 0;
    let results = [];
  for (let i = 0; i < calcGravityDataArray.length; i++) {
    results = calc(calcGravityDataArray[i], timeCalc[i]);
    xTextPos += 75;

    textSize(13);
    noStroke();
    fill(255, 255, 255);
    
    //distance display 
    text((results[3].toFixed(1)) + " km" , xTextPos, 35);

    //Joule display
    if (ballArray[i].ballVelocity == 0){
      text(Math.floor(results[4]) + " J" , xTextPos, 10);
    }else{
      text(Math.floor(results[2]) + " J" , xTextPos, 10);
  }
    //velocity display
    text(Math.floor(results[0]) + "km/h", xTextPos, 65);
    
    //falltime display
    if(timeDisplay >= results[1]) {

        fill(0, 255, 0);
        text(results[1].toFixed(3) + " s", xTextPos, 95);   
        ballArray[i].ballVelocity = 0; 
      }else{
        fill(255, 0, 0);
        text(timeDisplay + " s", xTextPos, 95);
      }
    fill(255, 255, 255);
    text("Gravity \n" + calcGravityDataArray[i] + " m/s²", xTextPos -22, 580);
  }
}
calcInputAndDisplay();
}
//        _ _   _           _          __
//   __ _(_) |_| |__  _   _| |__      / /
//  / _` | | __| '_ \| | | | '_ \    / / 
// | (_| | | |_| | | | |_| | |_) |  / /  
//  \__, |_|\__|_| |_|\__,_|_.__/  /_/   
//  |___/
//     _                       ___ ____ _____ 
//    / \   _ __   ___  _ __  ( _ ) ___|___ / 
//   / _ \ | '_ \ / _ \| '_ \ / _ \___ \ |_ \ 
//  / ___ \| | | | (_) | | | | (_) |__) |__) |
// /_/   \_\_| |_|\___/|_| |_|\___/____/____/