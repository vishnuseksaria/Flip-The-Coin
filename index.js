var heads=0;
var tails=0;
document.querySelector("button").addEventListener("click",function(){
var randomnumber=Math.ceil(Math.random()*2);
flip(randomnumber);
}
)

document.querySelectorAll("button")[1].addEventListener("click",function(){
    heads=0;
    tails=0;
    document.querySelector(".heads").innerHTML="Heads : "+heads;
    document.querySelector(".tails").innerHTML="Tails : "+tails;
})

function flip(number){
    document.querySelector("img").classList.toggle("rotate45");
    setTimeout(function(){document.querySelector("img").classList.toggle("rotate90");},100);
    setTimeout(function(){document.querySelector("img").classList.toggle("rotate90");},200);
    setTimeout(function(){document.querySelector("img").classList.toggle("rotate45");},300);
    setTimeout(function(){document.querySelector("img").classList.toggle("rotate45");},400);
    setTimeout(function(){document.querySelector("img").classList.toggle("rotate90");},500);
    setTimeout(function(){
        if(number===1){
        document.querySelector("img").src="./Heads.png";
        }
        else{
        document.querySelector("img").src="./Tails.png";
        }
    },500);
    setTimeout(function(){document.querySelector("img").classList.toggle("rotate90");},600);
    setTimeout(function(){document.querySelector("img").classList.toggle("rotate45");},700);
    if(number===1){
        heads++;
    }
    else{
        tails++;
    }
    setTimeout(function(){document.querySelector(".heads").innerHTML="Heads : "+heads;},700);
    setTimeout(function(){document.querySelector(".tails").innerHTML="Tails : "+tails;},700);
}
