

//var backgroundColor=200;
	var hungry=true;

	var buttonWidth=50;
	var buttonHeight=100;

	function setup() {
	createCanvas(500,500);	

	}


//function draw(){
	if(hungry){
		backgroundColor=0;
	} else 
		backgroundColor=200;

	background(backgroundColor);
	stroke(0);
	rectMode(CENTER);
	rect(width/2,height/2,buttonWidth,buttonHeight);
	

//function mousePressed (){
	if  (mouseX > width/2 - buttonWidth/2 &&
		mouseX < width/2+ buttonWidth/2 &&
		mouseY > height/2 - buttonHeight/2 &&
		mouseY < height/2 + buttonHeight/2) 
		
		hungry=!hungry;
	
	



//var circleX;
	var circleY;

	var graviy = 0.1;
	var speed = 0;

	function setup(){
	createCanvas(500,500);
//}
//	circleX=width/2;
//	circleY=0;

//	function draw(){
		background(100);

		circleY=circleY+speed;
		
		ellipse(circleX,circleY,20,20);
		speed = speed + gravity;


		if(circleY > height -1)
			speed = speed* -0.9;
//	}



var lineX1 = 10;
var lineY1 = 10;
var lineX2 = 10;
var lineY2 = 100;

function setup(){
	createCanvas(500,500)
}

function draw(){
	background(100)
	lineX1 = 10;
}

	for(var i = 0; i < 10; i++)
		line(lineX1,lineY1,lineX1, lineY2);
		lineX1 = lineX1 + 10






















