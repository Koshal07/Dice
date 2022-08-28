var randomNumber1=Math.floor((Math.random() *6 )+1); //creating random number from 1 to 6

var randomDiceImage1="dice" + randomNumber1 +".png"; // creating random dice image from random Number

var randomImageSource1=randomDiceImage1; //taking dice image source from images folder

var image1=document.querySelectorAll("img")[0]; //taking out the image of dice 1

image1.setAttribute("src",randomImageSource1); //setting it randomaly


var randomNumber2=Math.floor((Math.random()*6)+1); //creating random number from 1 to 6

var randomImageSource2="dice"+randomNumber2 +".png"; //taking dice image source from images folder

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);  //taking out the image of dice 2

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 Won";
}
else
{
  document.querySelector("h1").innerHTML="Draw !";
}
