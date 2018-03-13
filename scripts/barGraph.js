var theCanvas = document.getElementById("barGraph");
var theContext = theCanvas.getContext("2d");
var pricePerCarat = [['Black Opal', 150], ['Diamond', 70], ['Sapphire', 30], ['Neumontite', 5]];
var scalar = 2;
var DIMENSIONS = 100;
var BORDER = 25;
var newDimensions = DIMENSIONS * scalar;
var unitSpacing = newDimensions/pricePerCarat.length;
var bottom = BORDER*2+newDimensions;
theCanvas.width =  bottom;
theCanvas.height = bottom;

function drawBackground(){
    theContext.fillStyle = "#5b73e3";
    theContext.fillRect(0, 0, bottom, bottom);
    //add Datafield
    theContext.fillStyle = "#F2DC3A";
    theContext.fillRect(BORDER, BORDER, newDimensions, newDimensions);
    theContext.strokeStyle = "#00587D";
    theContext.strokeRect(BORDER, BORDER, newDimensions, newDimensions);
    //add Labels
    //label-1
    theContext.font = "bold 11px Arial";
    theContext.textAlign = "center";
    theContext.fillStyle = "#000000";
    var rotation = 3/2*Math.PI;
    var middle = bottom/2;
    var botLabel = bottom-BORDER/2;
    theContext.save();
    theContext.translate(BORDER, middle);
    theContext.rotate(rotation);
    theContext.fillText("Cost of Gemstones ($/carat)", 0, -5);
    theContext.restore();
    //label-2
    theContext.beginPath();
    theContext.fillText("Gemstones", middle, botLabel);
    theContext.closePath();
    theContext.textAlign = "start";
}

function drawGraph(){
    //Make main background for graph
    drawBackground();
    //Develop bar graph measurements
    pricePerCarat.forEach(function(element, i){
        var yPos = bottom-BORDER-element[1];
        var xPos = BORDER+(unitSpacing*i);
        theContext.fillStyle = "#3DB000";
        theContext.fillRect(xPos, yPos, unitSpacing, element[1]);
        theContext.strokeStyle = "#00587D";
        theContext.strokeRect(xPos, yPos, unitSpacing, element[1]);
        theContext.fillStyle = "#000000";
        theContext.font = "11px Arial";
        yPos-=5;
        xPos+=1;
        theContext.fillText(element[0], xPos, yPos);
    });
}
drawGraph();