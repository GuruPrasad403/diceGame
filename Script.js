var a=[1,2,3,4,5,6]
var randomNumber1 = Math.random(a);
randomNumber1=Math.ceil(randomNumber1*=6);
console.log(randomNumber1);
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
var randomNumber2 = Math.random(a);
randomNumber2=Math.ceil(randomNumber2*=6);
console.log(randomNumber2);
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");
var x=document.querySelector(".img1").getAttribute("src");
var y=document.querySelector(".img2").getAttribute("src");
console.log(x);
if(x<y)
document.querySelector("h1").innerHTML="Player 2 wins";
else if(x>y)
document.querySelector("h1").innerHTML="Player 1 Wins";
else 
document.querySelector("h1").innerHTML="Draw";