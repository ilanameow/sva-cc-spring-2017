var targetX;
var targetY;

var backgroundColor;



function setup(){
	createCanvas(1000,1000);
	targetX=width/2;
	targetY=height/2;
}


function draw(){
	backgroundColor=calcDistance(targetX,targetY,mouseX,mouseY)
	
	background(backgroundColor);
	drawTarget(targetX,targetY,200,10)
	drawTarget(mouseX,mouseY,20,20)

}
	

function calcDistance(x1,y1,x2,y2){
	var diffX=x1-x2;
	var diffY=y1-y2;
	var distance=Math.sqrt(diffX*diffX+diffY*diffY);
	return distance;
}


function drawTarget(x,y,circleSize,numberOfCircles){
	circleSize=300;
	var numberOfCircles=10;
	for (var i=0;i < numberOfCircles; i++){
		var segment=i/numberOfCircles;
		fill(segment*250);
		circleSize=circleSize-segment*circleSize;
		ellipse(x,y,circleSize,circleSize)
	}
}	
	
		