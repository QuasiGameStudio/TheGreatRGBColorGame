// alert("Connected");


var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var colors = [];
var pickedColor;

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    numSquares = 3;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
});

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    numSquares = 6;
    for (var i = 0; i < squares.length; i++) {        
        squares[i].style.backgroundColor = colors[i];        
        squares[i].style.display = "block ";        
    }
});

resetButton.addEventListener("click", function () {
    //generate all new colors
    colors = generateRandomColors(numSquares)
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display
    colorDisplay.textContent = pickedColor;
    //cange colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];   
    }

    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
});

colors = generateRandomColors(6);
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
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
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