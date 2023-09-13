var randomNum1 = Math.floor((Math.random() * 6)+1);
var randomNum2 = Math.floor((Math.random() * 6)+1);

document.querySelector(".img1").setAttribute("src","./images/dice"+randomNum1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNum2+".png");


if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Won the game";
} else if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Won the game &#128681";
} else if(randomNum1 === randomNum2){
    document.querySelector("h1").innerHTML = "Draw!!!";
}