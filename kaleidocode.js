let x = 100;
let y = 100;
let z = 100;
let vx = 1;
let vy = 2;
let vz = 3;
var circleX = 0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	background(0);
}

//Draw function code from Zach Whalen's 'Move and Bounce' sketch
function draw() {
		if (x < (0 + 25) || x > (width - 25)){
		vx = -vx;
		fill(random(0, 255),random(0, 255), random(0, 255)) ;
	}
	if (y < (0 + 25) || y > (height - 25)){
		vy = -vy;
		fill(random(0, 255),random(0, 255), random(0, 255)) ;
	}
	if (z < (0 + 25) || z > (height - 25)){
		vz = -vz;
		fill(random(0, 255),random(0, 255), random(0, 255)) ;
	}
	x += vx;
	y += vy;
	
	torus(x, y);
}
