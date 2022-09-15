var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomFilename1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomFilename1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomFilename2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomFilename2);

if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "Player1 Win!";
} else if (randomNumber1 < randomNumber2) {
	document.querySelector("h1").innerHTML = "Player2 Win!";
} else {
	document.querySelector("h1").innerHTML = "Equal!";
}
