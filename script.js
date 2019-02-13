// alert("Connected");

var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");


colors = generateRandomColors(colors.length);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];   

    //add click listeneres to squares
    squares[i].addEventListener("click", function () {
       //grab color of clicked square
       var clickedColor = this.style.backgroundColor;

       //compare color to pickedColor
       if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
       }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
       }
    });
}

function changeColors(color) {
    //loop throught all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match giver color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into array        
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pic a "red" from 0-255;
    var r = Math.floor(Math.random() * 256);
    //pic a "green" from 0-255;
    var g = Math.floor(Math.random() * 256);
    //pic a "blue" from 0-255;
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";

}