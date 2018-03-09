var image = document.getElementById("slideShowImage");
var imageArray =  [];
var index = 0;
function slideShow(){
    
    image.setAttribute("src",imageArray[index]);
    index++;
    if(index > imageArray.length){
        index = 0;
    }
}

window.onload = function(){

    setInterval(slideShow, 2500);
}


$(document).ready(function(){
    $("p").click(function(){
        $(this)("text-font: 16px")
    });
});
