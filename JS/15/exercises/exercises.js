
Challenges
1. Count from 1 to 10

let count = 1;
while(count <=10){
    console.log(count);
    count++;
}

2. Countdown from 5 to 1

let count = 5;
while(count >= 1){
    console.log(count);
    count--;
}

3. Print only even numbers until 100

let even = 2;
while(even <= 100){
    console.log(even);
    even += 2
}

4. Sum Numbers from 1 to 100

let num = 1;
let total = 0;
while (num <=100){
    total += num;
    num++;
}
console.log("The sum from 1 to 100 is:", total);

 5. Guess the Secret Number 1-10
 Use a while loop to keep asking the user to guess a number until they guess the secret number (e.g. 7).

let secretNumber = 9;
var guess = prompt("What is the number?");
while(guess !== 9){
    console.log("Secret number incorrect");
    guess = Number(prompt("Try again:"));
}
console.log("Well done");


6. Print "I love JavaScript" 5 times

let count = 1
let love = "I love JavaScript";
while(count <= 5){
    console.log("I love JavaScript");
    count ++; 
}

7. Multiply until over 1000
Start with the number 2 and keep multiplying it by 2 using a while loop until the value is greater than 1000. Print each step.

let num = 2;
while (num <=1000){
    console.log(num);
    num *= 2;
}

8. Count characters in a word (without .length)
Ask the user for a word (use prompt()), and then use a while loop to count how many characters it has — without using .length.

let word = prompt("Enter a word");
let count = 0;
while(word[count] !== undefined){
    count ++;
}
console.log("The word has " + count + " characters.");

Challenge 9 Countdown from 10 to 1


let count = 10;
while(count >= 1){
    console.log(count);
    count --;
}


Challenge 10: Add Numbers Until Total Reaches 50

let number = 1;
let total = 0;
while(number <= 50){
    console.log(number);
    total += number;
    number ++;
}
console.log("Adding numbers until 50 gives you a total of " + total);


Challenge 11: Print the Sum of All Numbers from 1 to N


let limit = Number(prompt("Choose a number between 1 and 999"));
let number = 1;
let total = 0;
while(number <= limit){
    total += number;
    number ++;
}
console.log("The total sum of " + number + " from number 1 equals " + total);


Challenge 12: Print the First 50 Even Numbers


let num = 0;
while(num <= 50){
    console.log(num);
    num += 2;
}

Challenge 13: Print Numbers from 1 to 20, but Skip Multiples of 3

let num = 1;
while (num <=20){
    if(num % 3 !== 0){
       console.log(num); 
    }
    num ++;
}



Challenge 14: Sum of All Even Numbers Between 1 and 200

let num =2;
let total = 0;
while(num <= 200){
    total += num;
    num += 2;
    console.log(num);
}
console.log("The total sum of all the even numbers from 1 to 200 is: " + total);


Challenge 15: Sum of All odd Numbers Between 1 and 200

let num = 1;
let total = 0;
while(num <=200){
    total += num;
    num +=2
    console.log(num);
}
console.log("The total sum of all the odd numbers from 1 to 200 is: " + total);



functions exercises
1. Greeting Function

function greet(name){
    return ("Hello " + name)
}
console.log(greet("Ana"));

2. Double a Number
Write a function that takes a number, doubles it, and returns the result.


function double(number){
return number * 2;
}
console.log(double(10));

3. Convert Minutes to Seconds
Build a function that takes a number of hours and converts it to minutes.

function hoursToMinutes(hours){
    return hours * 60;
}
console.log(hoursToMinutes(3));

4. Is the Number Even or Odd?

function evenOrOdd(number){
    if(number % 2 === 0){
        console.log("This number is even");
    }else if(number % 3 !== 0){
        console.log("This number is odd");
    }
}
evenOrOdd(77)

5.  Get the First Letter of a Word
Create a function that takes a word and returns the first letter of that word.

function fLetter(word){
    firstLetter = word[0];
    console.log("The first letter of your word is: " + firstLetter);
}
fLetter("Keyboard")

6.Capitalize the First Letter of a Word
Write a function that takes a lowercase word (like "banana") and returns the same word with the first letter capitalized (e.g., "Banana").


function toUpper(word){
    var toUpperCase1 = word[0].toUpperCase();
    return toUpperCase1 + word.slice(1)
};
console.log(toUpper("ana"));



function addPrevious(a, b){
var total1 = a + b;
var total2 = b + total1
console.log("First total " + total1);
console.log("second total " + total2)

}
addPrevious(2,3)

.push challenges


1. Add Your Name to a List
Challenge:
Create an empty array called names. Write a function that takes a name as input and pushes it into the array.

var names = [];
function addName(){
    names.push("Ana");
    return names;
}
console.log(addName());

Fibonacci sequence break down challenges 

Phase 1: Master the Basics
✅ Challenge 1: Add Numbers to an Array

var emptyNumbers = [1,2,3,4,5,6];
function number(){
    emptyNumbers.push(1);
    return emptyNumbers;
}
console.log(number());

✅ Challenge 2: Add the Last Two Numbers
 Create an array with two numbers: [1, 1]
 Add the last two numbers and push the result into the array.

var array = [10,11];
var total = [];
function add(){
    var sum = array[0] + array[1];
    total.push(sum)
    array.push(sum)
    return total;
}
console.log(add());
console.log(array);
console.log(total);


🔁 Phase 2: Strengthen Loop Logic
✅ Challenge 3: Loop a Set Number of Times
Goal: Comfortably write for loops.
// Use a for loop to print numbers 0 to 9

for(var n = 0; n <=9; n++){
    console.log(n);
}

✅ Challenge 4: Loop to Push Numbers
Goal: Use a loop to fill an array automatically.

var numbers = [];

function pushNumbers(){
    for(i = 0; i <= 10; i++){
        numbers.push(i);
    }
    return numbers;
}
console.log(pushNumbers());


Challenge 5: Add Previous Two Elements Inside Loop
Goal: Simulate Fibonacci logic.
 Start with array [1, 1]
 Use a loop to add the last two numbers and push to the array
 Do this 5 times✅


1. 💡 Make it Flexible:
Update your function so it takes a number n as input and returns the first n Fibonacci numbers.✅


var array =[1,1];
var total = [];
function fibonacciLogic(n){
    for(i = 2; i <=n; i++){
        var sum = array[i-1] + array[i-2];
        total.push(sum);
        array.push(sum);
    }
    return array;
}
console.log(fibonacciLogic(10));

Tax calculator


function tax(n){
    if(n <= 12570){
        console.log("You don't need to pay tax");
    }else if(n >= 12571 && n <= 50270){
        var afterTax = n * 0.8
        console.log("Your annual salary after 20% of tax is £" + afterTax);
        console.log("This means that you will earn a monthly salary of £" + (afterTax / 12).toFixed(2));
    }else if(n >= 50271 && n <= 125140){
        var afterTax = n * 0.6
        console.log("Your annual salary after 40% of tax is £"  +  afterTax);
        console.log("This means that you will earn a monthly salary of £" + (afterTax / 12).toFixed(2));
    }else{
        var afterTax = n * 0.55
        console.log("Your annual salary after 45% of tax is £"  + afterTax);
        console.log("This means that you will earn a monthly salary of £" + (afterTax / 12).toFixed(2));
    }
}
tax(50000)






























































































