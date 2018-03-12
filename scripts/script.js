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

    setInterval(slideShow, 5000);

    $(".contact").hover(
        function(){
            $(".contact").css("font-size","25px");
        },
        function(){
            $(".contact").css("font-size","16px");
        });
}
