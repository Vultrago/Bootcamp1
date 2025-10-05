/*
Challenge 1.1 — Level 1: Basics (Variables, Data Types, Console)
🟦 Task:
Create a simple JavaScript program that:

Declares a variable called name and assigns it your name as a string.
Declares a variable called age and assigns it your age as a number.
Logs the message:
"Hello, my name is [name] and I am [age] years old."
(Replacing [name] and [age] with the values from the variables.)

const name = "Ana"
const age = 20;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);


Challenge 1.2 — Level 1: Arithmetic and Basic Operations
🟦 Task:
Write a JavaScript program that:

Declares two variables: num1 and num2, and assigns them any two numbers.

Calculates the sum, difference, product, and quotient of those two numbers.

Logs each result to the console in this format:

makefile
Copy
Edit
Sum: [result]
Difference: [result]
Product: [result]
Quotient: [result]



const num1 = 1000;
const num2 = 250;

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`
    Sum: ${sum} 
    Difference: ${difference}
    Product: ${product} 
    Quotient: ${quotient}`
    );



   Challenge 1.3 — Level 1: Strings and Concatenation
🟦 Task:
Write a JavaScript program that:

Declares three variables:

firstName (your first name),

lastName (your last name),

country (your country).

Concatenates them into a sentence using string concatenation (not template literals).

Logs the following sentence to the console:
"My name is [firstName] [lastName] and I live in [country]."

🟡 Important Rule:
Use string concatenation with +, not backticks or ${}. 


const firstName = "Ana"
const lastName = "Mesa"
const country = "Spain"

console.log("My name is " + firstName +" "+ lastName + " and I live in " + country + ".");

Challenge 2.1 — Level 2: If/Else Conditions
🟦 Task:
Write a JavaScript program that:

Declares a variable called score and assigns it a number between 0 and 100.

Uses an if...else statement to log the grade based on this scale:

arduino
Copy
Edit
90–100 → "Grade: A"
80–89  → "Grade: B"
70–79  → "Grade: C"
60–69  → "Grade: D"
0–59   → "Grade: F"


const score = Math.floor(Math.random()*100)

if(score <= 59){
    console.log("Grade: F");
}else if(score >= 60 && score <= 69){
    console.log("Grade: D");
}else if(score >= 70 && score <= 79){
    console.log("Grade: C");
}else if(score >= 80 && score <= 89){
    console.log("Grade: B");
}else{
    console.log("Grade: A");
}
console.log(score);


Challenge 2.2 — Level 2: Comparison Operators
🟦 Task:
Write a JavaScript program that:

Declares two variables: a and b (assign them any numbers).

Compares them using these comparison operators:

==

===

!=

!==

>

<

Logs the result of each comparison in this format:

yaml
Copy
Edit
a == b: [true/false]
a === b: [true/false]
a != b: [true/false]
a !== b: [true/false]
a > b: [true/false]
a < b: [true/false]


const a = 10000;
const b = 1000;

if(a == b){
    console.log(true);
}else{
    console.log(false);
}if(a === b){
    console.log(true);
}else{
    console.log(false);
}if(a != b){
    console.log(true);
}else{
    console.log(false);
}if(a !== b){
    console.log(true);
}else{
    console.log(false);
}if(a > b){
    console.log(true);
}else{
    console.log(false);
}if(a < b){
    console.log(true);
}else{
    console.log(false);
}
    


Challenge 2.3 — Level 2: Logical Operators
🟦 Task:
Write a JavaScript program that:

Declares three variables: x, y, and z (assign any numbers).

Uses logical operators && (AND), || (OR), and ! (NOT) to check these conditions and logs the results:

Is x greater than y AND z less than 10?

Is x equal to y OR z equal to 5?

Is x NOT equal to z?

Example output format:

yaml
Copy
Edit
x > y && z < 10: true
x == y || z == 5: false
x !== z: true


const x = Math.floor(Math.random() *100)
const y = Math.floor(Math.random() *100)
const z = Math.floor(Math.random() *100)

if(x > y && z < 10){
    console.log(true);
}else{
    console.log(false);
}if(x == y || z == 5){
    console.log(true);
}else{
    console.log(false);
}if (x !== z) {
    console.log(true);
} else {
    console.log(false);
}
    

✅ Challenge 3.1 — Print Numbers with a for Loop
Task:
Write a JavaScript program using a for loop that prints the numbers from 1 to 20.

🧠 Example Output:
python-repl
Copy
Edit
1  
2  
3  
...  
20


for(let i = 1; i<=20; i++){
    console.log(i);
}



✅ Challenge 3.2 — Even or Odd?
Task:
Write a for loop that prints the numbers from 1 to 30.
For each number, print whether it is "even" or "odd".

🧠 Example Output:
python
Copy
Edit
1 is odd  
2 is even  
3 is odd  
4 is even  
...  
30 is even



for(let i = 1; i<=30; i++){
    // console.log(i);
    if(i % 2=== 0){
        console.log(i + " is even");
    }else{
        console.log(i + " is odd");
    }
}


✅ Challenge 3.3 — Sum of Multiples
Task:
Write a loop that calculates the sum of all numbers between 1 and 100 that are multiples of 3 or 5.

After the loop finishes, print the final sum.

🧠 Expected Output:
Only one line, like:


Copy
Edit
The sum is: 2418

let total = 0
for(let i = 1; i<=100; i++){
    if (i % 3 === 0 || i % 5 === 0) {
        total += i;
    }
}
console.log("The sum is: " + total);


✅ Challenge 4.1 — Write a Function to Convert Celsius to Fahrenheit
Task:
Write a function named celsiusToFahrenheit that:

Takes one parameter: a temperature in Celsius.

Returns the temperature converted to Fahrenheit.

Formula for conversion:

°F = (°C * 9/5) + 32

Write the function and then test it with these examples:

Input: 0 → Output: 32

Input: 100 → Output: 212




function celsiusToFahrenheit(c){
    let f = (c * 9/5) + 32;
    return f;
}

console.log(celsiusToFahrenheit(100));


✅ Challenge 4.2 — Check If a Number is Prime
Task:
Write a function called isPrime that:

Takes a number as input.

Returns true if it is a prime number.

Returns false otherwise.

🧠 Example:
js
Copy
Edit
isPrime(2)     // true  
isPrime(10)    // false  
isPrime(13)    // true



function isPrime(n){
    if(n <= 1){
        return false
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true;
}
console.log(isPrime(1));



4.3 – Challenge: Comparison Logic Check
Write a JavaScript program that does the following:

Create three variables:

a = 5,

b = 10,

c = "5" (a string, not a number).

Use if statements to check and log the result of the following comparisons:

Is a equal to b? (using both == and ===)

Is a equal to c? (using both == and ===)

Is a not equal to b?

Is a less than or equal to b?

Is a strictly not equal to c?

Don't solve this with one giant if...else if block. Write separate if blocks for each comparison.


const a = 5;
const b = 10;
const c = "5";

if(a == b){
    console.log(true);
}else{
    console.log(false);
}

if(a === b){
    console.log(true);
}else{
    console.log(false);
}

if(a == c){
    console.log(true);
}else{
    console.log(false);
}

if(a === c){
    console.log(true);
}else{
    console.log(false);
}

if(a !== b){
    console.log(true);
}else{
    console.log(false);
}

if(a <= b){
    console.log(true);
}else{
    console.log(false);
}

if(a !== c){
    console.log(true);
}else{
    console.log(false);
}




✅ Challenge 5.1
Task:
Create an array of five numbers.
Write a for loop that goes through the array and prints:

Each number

Whether it is even or odd

🔁 Example output (if the array is [3, 8, 5, 10, 1]):

Copy
Edit
3 is odd
8 is even
5 is odd
10 is even
1 is odd



const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
        console.log(`${array[i]} is even`);
    }else{
        console.log(`${array[i]} is odd`);
    }
}



Challenge 5.2
Task:
Create a function called sumArray that:

Takes an array of numbers as a parameter

Returns the sum of all the numbers in the array

Then, test your function with this array:
[10, 20, 30, 40, 50]


const numbers = [10, 20, 30, 40, 50];

function sumArray(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i ++){
        sum += numbers[i] 
    }
    return sum;
}
console.log(sumArray(numbers));


Challenge 5.3
Write a function called reverseString that:

Takes a string as input

Returns the reversed version of that string

For example:
reverseString("hello") should return "olleh"


function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString("Hello"));


✅Challenge 6.1
Write a function called fizzBuzz that:

Takes a number n as input

Loops from 1 to n

For each number:

Prints "Fizz" if divisible by 3

Prints "Buzz" if divisible by 5

Prints "FizzBuzz" if divisible by both 3 and 5

Otherwise, prints the number itself

Test with n = 20.



function fizzBuzz(n){

    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(i +": FizzBuzz");
        }else if(i % 3 === 0){
            console.log(i+ ": Fizz");
        }else if(i % 5 === 0){
            console.log(i + ": Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzBuzz(150)


6.2
Write a function that takes a string and returns true if it is a palindrome (ignoring case and spaces), false otherwise.

Example:
"Race car" → true
"Hello" → false



//Having a bit of help with this one
function palindrome(str){
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

console.log(palindrome("A man, a plan, a canal, Panama"));



🔍 Challenge 6.3 – Find the Longest Word
Objective:
Write a JavaScript function that takes a sentence as a string and returns the longest word in the sentence.

Example:

javascript
Copy
Edit
longestWord("The quick brown fox jumped over the lazy dog");
// Output: "jumped"
*/

function longestWord(str){
    
}