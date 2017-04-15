var numOfPoints;
var prevPos;
var timeX;
var timeY;

function setup(){
    createCanvas(500,500);
    numOfPoints= 60;
    prevPos=createVector(0,0);
    timeX=0;
    timeY=0;
}
function draw(){
        
    
    background(200);
    timeX+=0.04;
    timeY+=0.03;
    
    var r=100;
    var noiseAmount=2;

    
    for (var i=0; i<numOfPoints; i++){
        var xPos= width/2 + Math.cos(i/numOfPoints * TWO_PI)*r;
        var yPos=height/2+Math.sin(i/numOfPoints*TWO_PI)*r;
        
        var noiseValX= noise(timeX, xPos * noiseAmount, yPos*noiseAmount);
        var noiseValY=noise(timeY,yPos * noiseAmount,xPos*noiseAmount);
        
        noiseValX = map(noiseValX,0,1,-5,5);
        noiseValY= map(noiseValY,0,1,-5,5);
        
        xPos += noiseValX
        yPos +=noiseValY
        
        line(xPos, yPos, prevPos.x, prevPos.y);
        prevPos=createVector (xPos,yPos);
    }
}