 /*
var n = Math.random();
n = n * 6 + 1;
n = Math.floor(n);
console.log(n);


//Love calculator Challenge
function loveCalculator(name1, name2){
    var n = Math.random();
    n = n * 100 + 1
    var n = Math.floor(n);
    return ("Good afternoon " + name1 + " your compatibility with " + name2 + " is of " + n + " %")
}
console.log(loveCalculator("John", "Ana"));


//100
function loveCalculator(){
    prompt("What is your name?")
    prompt("What is your name?")
    var loveCalculator = Math.random();
    loveCalculator = loveCalculator * 100 + 1
    var loveCalculator = Math.floor(loveCalculator);
     if(loveCalculator > 70){
        return("Your love score is " + loveCalculator + "%. You love each other like Kanye loves Kanye");    
    }else{
        return(" Your love is " + loveCalculator + "%. Keep trying buddy");
    }
}
console.log(loveCalculator());



//Challenge
//BMI advanced calculator
function bmiAdvancedCalc(weight, height){
    var bmiAdvanced = weight / (height * height)
    if(bmiAdvanced < 18.5){
        return("Your BMI is " + bmiAdvanced + ", so you are underweight.");
    }if(bmiAdvanced >= 18.5 &&  bmiAdvanced <= 24.9){
        return("Your BMI is " + bmiAdvanced +  ", so you have a normal weight.");
    }else if (bmiAdvanced > 25){
        return("Your BMI is " + bmiAdvanced +  ", so you are overweight.");
    }
}
console.log(bmiAdvancedCalc(80, 1.80));

Challenge


function isLeap(year){
    if(year % 4 === 0){
        return( "Leap year.");
    }if(year % 100 !== 0){
        return("Not leap year.");
    }if(year % 400 === 0){
        return("Leap year.")
    }else{
        return( year + " is not a leap year")
    }
}
console.log(isLeap(2000));


//105 Collections

var guestList = ["Ana", "Jack", "Julio", "Mons", "Lola", "Peter"];
var name1 = prompt("What is your name?")
guestList.includes(name1)
if(guestList.includes(name1)){
    console.log("Welcome to the party");
}else{
    console.log("You are not in the guess list.");
}


//106
var output = [];
var count = 1;
function fizzBuzz(){
    if(count%3 === 0 && count%5 === 0){
        output.push("fizzBuzz")
    }if(count%3 === 0){
        output.push("Fizz")
    }if(count%5 === 0){
        output.push("Buzz")
    }else{
        output.push(count)
    }
    count++;
    console.log(output);
}
fizzBuzz();


//Challenge
Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should be returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input

["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output

Michael is going to buy lunch today!


function whosPaying(names) {
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var randomIndex = Math.floor(Math.random() * names.length);
    var randomName = names[randomIndex];
    return randomName + (" is going to buy lunch today!");
}
console.log(whosPaying());

//While loops

var output = [];
var count = 1;
function fizzBuzz(){
    while( count <= 100){

  
    if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzBuzz")
    }else if(count % 3 === 0){
        output.push("Fizz")
    }else if(count % 5 === 0){
        output.push("Buzz")
    }else{
        output.push(count)
    }
    count++;
    }
    console.log(output); 
}
fizzBuzz();



function beer(){
    var count = 99;
    while(count >= 1){
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around," + (count - 1) + " bottles of beer on the wall.");
   
    count --;

}
console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
};

beer()

110 For Loop

Fibonacci challenge
*/
function fibonacciGenerator (n) {
  var array = [];
  if(n === 1){
    array = [0];
  }else{
    array = [0,1]; 
  }
  for( var i = 2; i < n; i++){
    array.push(array[i-1] + array[i-2])
  }
  return array;
}
console.log((fibonacciGenerator(10)));
