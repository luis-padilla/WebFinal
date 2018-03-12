var image = document.getElementById("slideShowImage");
var imageArray =  ["images/spaceMinerals/rock1.jpg",'images/spaceMinerals/rock2.jpg','images/spaceMinerals/rock3.jpg','images/spaceMinerals/rock4.jpg','images/spaceMinerals/rock5.jpg','images/spaceMinerals/rock6.jpg'];
var index = 0;

function slideShow(){
    image.setAttribute("src",imageArray[index]);
    index++;
    if(index >= imageArray.length){
        index = 0;
    }
}

window.onload = function(){

    setInterval(slideShow, 10000);

    $("#intro").hover(
        function(){
            $("#intro").css("font-size","24px");
            console.log("over");
        },
        function(){
            $("#intro").css("font-size","12px");
            console.log("out");
        });

    
}
