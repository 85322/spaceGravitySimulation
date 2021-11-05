# Gravity Fall Simulation

Simulating a free falling ball drop of 1 km height on different celestial bodies of the solar system.
Made in Javascript and p5.js.


* Watch here: https://anon853.github.io/spaceGravitySimulation/ 

[![image](https://i.postimg.cc/Z5y4FhcY/Untitled.png)](https://anon853.github.io/spaceGravitySimulation/)  

Features
---------

Calculates time of impact, current velocity, traveled distance and energy on each celestial body in real time.


Free fall / falling speed equations
---------


The simulation uses the standard formula from Newtonian physics to figure out how long the falling object takes:

* The force of earth's gravity, g = 9.8 m/s2 
* Gravity accelerates you at 9.8 meters per second per second. After one second, you're falling 9.8 m/s. After two seconds, you're falling 19.6 m/s, and so on.
* Time to hit ground: sqrt ( 2 * height / 9.8 )
* It's the square root because you fall faster the longer you fall.
* Velocity at impact: sqrt( 2 * g * height )
* Energy at impact time: 1/2 * mass * velocity² = mass * g * height
* Distance: velocity * time

![image](https://www.angio.net/personal/climb/speedplot.png) 

Notes
--------

It's a good visualisation of showing why Pluto is now considered a dwarf planet. To be labeled as planet the requirements are:

    1. It is in orbit around the Sun.
    2. It has sufficient mass to assume hydrostatic equilibrium (a nearly round shape).
    3. It has “cleared the neighborhood” around its orbit.
    
Pluto does not fulfill the third requirement, which means having gravitational influence on any celestial bodies that are not its own satelites.    


![image](https://i.postimg.cc/nVDgHbxB/pluto-charon-usa-sizes-en.png) 

If the animation gets stuck, reload page.

Resources
---------

* Planet data: https://nssdc.gsfc.nasa.gov/planetary/factsheet/
* Equation formulas: https://www.angio.net/personal/climb/speed.html
* Equation formulas: https://www.gigacalculator.com/calculators/speed-calculator.php
* Pluto not a planet: https://www.loc.gov/everyday-mysteries/item/why-is-pluto-no-longer-a-planet/
