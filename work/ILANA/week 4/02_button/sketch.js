

var backgroundColor=200;
	var hungry=true;

	var buttonWidth=50;
	var buttonHeight=100;

	function setup() {
	createCanvas(500,500);	

	}


function draw(){
	if(hungry){
		backgroundColor=0;
	} else 
		backgroundColor=200;

	background(backgroundColor);
	stroke(0);
	rectMode(CENTER);
	rect(width/2,height/2,buttonWidth,buttonHeight);
}

function mousePressed (){
	if  (mouseX > width/2 - buttonWidth/2 &&
		mouseX < width/2+ buttonWidth/2 &&
		mouseY > height/2 - buttonHeight/2 &&
		mouseY < height/2 + buttonHeight/2) 
		
		hungry=!hungry;
	
}