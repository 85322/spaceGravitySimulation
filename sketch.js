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
let timer0 = 0;
let timer1 = 0;
let timer2 = 0;
let timer3 = 0;
let timer4 = 0;
let timer5 = 0;
let timer6 = 0;
let timer7 = 0;
let timer8 = 0;
let timer9 = 0;
let timer10 = 0;
let displayTimeHolder = 0;



let timeCalc = [timer0, timer1, timer2, timer3, timer4, timer5, timer6, timer7, timer8, timer9, timer10];
const planetImageArray = ['sun','mercury','venus','earth','moon','mars','jupiter','saturn','uranus','neptune','pluto'];
const calcGravityDataArray = [274, 3.7, 8.9, 9.8, 1.6, 3.7, 24.8, 10.4, 8.9, 11.2, 0.6];
let results = [];//kann wieder in for loop wenn keine aufteilung



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


    // //defines each planet's timer
    // const time0func = () => {
    //   // timer0 = millis();
    //   // timeCalc[0] = timer0 / 1000;
    // }

    // const time1func = () => {
    //   // timer1 = millis();
    //   // timeCalc[1] = timer3 / 1000;
    // }

    // const time2func = () => {
    //   // timer2 = millis();
    //   // timeCalc[2] = timer3 / 1000;
    // }

    // const time3func = () => {
    //   // timer3 = millis();
    //   // timeCalc[3] = timer3 / 1000;
    // }

    // const time4func = () => {
    //   timer4 = millis();
    //   timeCalc[4] = timer4 / 1000;
    // }

    // const time5func = () => {
    //   timer5 = millis();
    //   timeCalc[5] = timer5 / 1000;
    // }

    // const time6func = () => {
    //   timer6 = millis();
    //   timeCalc[6] = timer6 / 1000;
    // }

    // const time7func = () => {
    //   timer7 = millis();
    //   timeCalc[7] = timer7 / 1000;
    // }

    // const time8func = () => {
    //   timer8 = millis();
    //   timeCalc[8] = timer8 / 1000;
    // }

    // const time9func = () => {
    //   timer9 = millis();
    //   timeCalc[9] = timer9 / 1000;
    // }

    // const time10func = () => {
    //   timer10 = millis();
    //   timeCalc[10] = timer10 / 1000;
    // }

  const setIntervalFunc0 = () =>{
    if (ballArray[0].ballVelocity !== 0) {
      timer0 = millis();
      timeCalc[0] = timer0 / 1000;
    }else{
      return;
    }   
  };

  const setIntervalFunc1 = () =>{
    if (ballArray[1].ballVelocity !== 0) {
      timer1 = millis();
      timeCalc[1] = timer1 / 1000;
    }else{
      return;
    }   
  };

  const setIntervalFunc2 = () =>{
    if (ballArray[2].ballVelocity !== 0) {
      timer2 = millis();
      timeCalc[2] = timer2 / 1000;
    }else{
      return;
    }   
  };

  const setIntervalFunc3 = () =>{
    if (ballArray[3].ballVelocity !== 0) {
      timer3 = millis();
      timeCalc[3] = timer3 / 1000;
    }else{
      return;
    }   
  };

  const setIntervalFunc4 = () =>{
    if (ballArray[4].ballVelocity !== 0) {
      timer4 = millis();
      timeCalc[4] = timer4 / 1000;
    }else{
      return;
    }   
  };
    
  const setIntervalFunc5 = () =>{
    if (ballArray[5].ballVelocity !== 0) {
      timer5 = millis();
      timeCalc[5] = timer5 / 1000;
    }else{
      return;
    }   
  };

  const setIntervalFunc6 = () =>{
    if (ballArray[6].ballVelocity !== 0) {
      timer6 = millis();
      timeCalc[6] = timer6 / 1000;
    }else{
      return;
    }   
  };

  const setIntervalFunc7 = () =>{
    if (ballArray[7].ballVelocity !== 0) {
      timer7 = millis();
      timeCalc[7] = timer7 / 1000;
    }else{
      return;
    }   
  };

  const setIntervalFunc8 = () =>{
    if (ballArray[8].ballVelocity !== 0) {
      timer8 = millis();
      timeCalc[8] = timer8 / 1000;
    }else{
      return;
    }   
  };

  const setIntervalFunc9 = () =>{
    if (ballArray[9].ballVelocity !== 0) {
      timer9 = millis();
      timeCalc[9] = timer9 / 1000;
    }else{
      return;
    }   
  };

  const setIntervalFunc10 = () =>{
    if (ballArray[10].ballVelocity !== 0) {
      timer10 = millis();
      timeCalc[10] = timer10 / 1000;
    }else{
      return;
    }   
  };

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
    text("Gravity Fall Simulation", width/2 -100, 10);
    text("t = " + timeDisplay, 0, 80);
    fill(255, 255, 255);

    //draws falling balls and planets
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
  //[t] input parameter based on timer to re-calculate ballVelocity each millisecond of free fall 
  const calc = (g, t) => {
    //let d = 0;
    let v = 0;
    v = g * t;
    //d = v * t / 3600;
    t = Math.sqrt(2 * 1000 / g);
    const returnArray = [v, t];
    return returnArray;
  }
  
  //calls calc(), displays return values of calc(), increments xTextPos pixel position for each planet
  const calcInputAndDisplay = () => {
    let xTextPos = 0;
    
  for (let i = 0; i < calcGravityDataArray.length; i++) {
    results = calc(calcGravityDataArray[i], timeCalc[i]);
    xTextPos += 75;

    textSize(13);
    noStroke();
    fill(255, 255, 255);

    //velocity display
    text(Math.floor(results[0]) + "km/h", xTextPos, 50);
  
    //falltime display
    if(timeDisplay >= results[1]) {

        fill(0, 255, 0);
        text(results[1].toFixed(3) + " s", xTextPos, 80);   
        ballArray[i].ballVelocity = 0; 
      }else{
        fill(255, 0, 0);
        text(timeDisplay + " s", xTextPos, 80);
      }
    fill(255, 255, 255);
    text("Gravity \n" + calcGravityDataArray[i] + " m/s²", xTextPos -22, 580);
  }
}
calcInputAndDisplay();
}

