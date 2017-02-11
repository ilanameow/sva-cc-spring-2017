var circleX;
var circleY;
var circlesSize;
var speedX;
var speedY;


function setup(){
	createCanvas(550,550);
	circlesSize=30;
	circleX=10;
	circleY=10
	
	speedX=2;
	speedY=2.2;
}


function draw(){
	background(110,70,90);
	checkIfHitTheBound();
	drawCircle();
	moveCircle()
}
	
function moveCircle(){
	circleX=circleX+speedX;
	circleY=circleY+speedY;
}	
	
		
function checkIfHitTheBound(){
	if (circleX > width || circleX<0){
		speedX=speedX*-1;
	}
	if (circleY > height || circleY<0){
		speedY=speedY*-1
	}
}
	
function drawCircle(){
	ellipse(circleX,circleY,circlesSize);
}

