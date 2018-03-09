var image = document.getElementById("slideShowImage");
var imageArray =  ["images/spaceMinerals/rock1.jpg",'images/spaceMinerals/rock2.jpg','images/spaceMinerals/rock3.jpg','images/spaceMinerals/rock4.jpg','images/spaceMinerals/rock5.jpg','images/spaceMinerals/rock6.jpg'];
var index = 0;
function slideShow(){

    image.setAttribute("src",imageArray[index]);
    index++;
    if(index > imageArray.length){
        index = 0;
    }
}

window.onload = function(){
    // $Image("#slideShow").fadeOut();
    setInterval(slideShow, 2500);
    // $Image("#slideShow").fadeIn();
}


$(document).ready(function(){
    $("p").click(function(){
        $(this)("text-font: 16px")
    });
});
