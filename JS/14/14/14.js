// var names = prompt("Which 3 dog breeds are your favourite?")
// var namesCount = names.length;
// console.log("You have written " + names.length + " characters, you have " + (150 - namesCount) + " charaters remaining." );
 /* 
//create variable that ask for your name and stores it
var name = prompt("What is your name")
//find the first charactr of name
var firstCharacter = name.slice(0,1);
// make first charactr uppercase
var firstCharacter = firstCharacter.toUpperCase();
//find rest of name and make it lower case if necessary
var restOffName = name.slice(1, name.length);
var restOffName = restOffName.toLowerCase();
//Join first charactr and rest off name
var fullName = firstCharacter + restOffName;
//Greet person
alert("Welcome " + fullName + " we are glad to have you here" )

 

//Numbers

//Create dog age to human age convertor

var dogAge = prompt("How old is your dog?")
var humanAge = prompt("How old are you?")
var calculation = humanAge = (dogAge -2) * 4 +21;
alert("Your dog is " +calculation + (" years old in human years"))


//Functions



function getMilk(bottles) {   
    var bottles = 1
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + bottles + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  getMilk(5)

 function getMilk(money){
     var numBottles = Math.floor(money / 1.5)
    console.log("You can buy " + numBottles + " bottles of milk with " + money + " dollars"); 
}
getMilk(9)


//Challenge

function lifeInWeeks(age) {
    var days = Math.floor(90 - age) * 365;
    var weeks = Math.floor(90 - age) * 52;
    var month = Math.floor(90 - age) * 12;
console.log("You have " + days + " days , " + weeks + " weeks, and " + month  + " months left");
}
lifeInWeeks(23)



//95 Functions part 3

function getMilk(money, costPerBottle){
    // var numBottles = Math.floor(money / 1.5)
   console.log("You can buy " + calcBottles(money, costPerBottle) + " bottles of milk with " + money + " dollars"); 
   return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle)
    return numberOfBottles;

}

function calcChange(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle; 
    return change;
}
console.log("hello, here is your " + getMilk(50, 4) + " dollars change");

*/
//Challenge BMI calculator

//create BMI calc function
//BMI = weight / (height * height)
function bmiCalculator(weight, height){
    var bmi = weight / (height * height);
    return ("Your BMI is " + Math.round(bmi));
}
console.log(bmiCalculator(100, 1.85));











































