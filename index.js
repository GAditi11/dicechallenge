var randomNumber1=Math.floor(Math.random()*6)+1; //picks 1 to 6
var randomImage1="dice"+randomNumber1+".png";//dice1.png
var randomImagesrc1="images/"+randomImage1;//images/dice1.png
document.querySelectorAll("img")[0].setAttribute("src",randomImagesrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomImagesrc2="images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImagesrc2);

if (randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player1 Wins!";
       
    }
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
    
var player1;
var player2;
function editNames(){
    player1=prompt("Change player1 name");
    player2=prompt("Change player2 name");
    
    document.querySelector("p.Player1").innerHTML = player1;
                            
    document.querySelector("p.Player2").innerHTML = player2;  
}

