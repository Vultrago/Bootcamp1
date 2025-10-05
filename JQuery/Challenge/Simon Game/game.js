
var buttonColors = ["red", "blue", "green", "yellow" ]
var gamePattern = []
var userClickedPattern = []

var gameStarted= false;
var level = 0;

$(document).keypress(function(){
    if(!gameStarted){
        $("#level-title").text("Level: " + level)
        nextSequence()
        gameStarted = true;
    }
})


function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
    }
    }else{
        // console.log("Wrong");
        playSound("wrong")
        $("body").addClass("game-over")
        $("#level-title").text("Game Over, Press any key to restart")


        setTimeout(function(){
            $("body").removeClass("game-over");    
        },200)
        startOver()
    }
}

function startOver(){
    level = 0
    gamePattern = []
    gameStarted= false;
    // startOver()
}

function nextSequence(){

    userClickedPattern = []
level++
$("#level-title").text("Level: " + level)
var randomNumber = Math.floor(Math.random() * 4)
var randomChosenColor = buttonColors[randomNumber]

gamePattern.push(randomChosenColor)

$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomChosenColor)
    
}


$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    console.log("User clicked:", userChosenColor);
    userClickedPattern.push(userChosenColor)
    //Adding sound to clicked buttons
    playSound(userChosenColor)
    animatePress(userChosenColor)

    checkAnswer(userClickedPattern.length-1)


})
 function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
 }

 function animatePress(currentColor){
        $("#" + currentColor).addClass("pressed")
        setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
        }, 99)
   }
 








