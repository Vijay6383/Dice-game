 var randomNumber1 = Math.floor((Math.random() * 6) + 1); //generates random number for plaayer 1//

var randomImageSource = "images/" + "dice" + randomNumber1 + ".png";  // images/dice1.png to images/dice2.png//

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); // set the random image everytime when refresshing//

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//condition statements //

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins !!😎🔥 ";

} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins !!😁🔥 ";

} else {
  document.querySelector("h1").innerHTML = "it's a draw! 🏁🏁";
}
