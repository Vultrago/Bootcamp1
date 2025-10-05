
setTimeout(() => {
   console.log("Delayed by 10 seconds, thanks for the wait"); 
}, "10000");


function bakePizza(callback){
   console.log("Baking Pizza...");
   setTimeout(() => {
      console.log("Pizza is ready");
      callback();
   }, 3000);
}

function sayThanks(){
   console.log("Thanks for the pizza");
}
bakePizza(sayThanks)


function rollSpliff(callback){
   console.log("Roling Spliff...");
   setTimeout(() => {
      console.log("Splif is ready");
      callback()
   }, 4000);
}

function sayGracias(){
   console.log("Gracias por el porro");
}
rollSpliff(sayGracias)

const bellButon = document.getElementById("bellButton");

bellButon.addEventListener("click", e =>{
   console.log("Ding Ding");
})

const coffeMachine = {
   coffeType: "Timana",
   makeCoffee:function(){
      console.log("Making your coffee sir...");
      return "Here's your coffee!";
   }
}
const  coffeeButton = document.getElementById("coffeeButton")
const  coffeeStatus = document.getElementById("coffeeStatus")
coffeeButton.addEventListener("click", () =>{
   const message = coffeMachine.makeCoffee();
   coffeeStatus.textContent = message;
   coffeeButton.style.backgroundColor = "brown"
})
*/

const iceCreamMachine = {
   flavour: "vanilla",
   isMaking: false,
   makeIceCream: function (){
   this.isMaking = true;
   console.log(`Scooping ${this.flavour} ice cream`);
   return (`Here's your ${this.flavour} ice cream`);
   }
}


const iceCreamButton = document.getElementById("iceCreamButton");
const iceCreamStatus = document.getElementById("iceCreamStatus");
iceCreamButton.addEventListener("click", e =>{
   const message = iceCreamMachine.makeIceCream();
   iceCreamStatus.textContent = message;
   iceCreamButton.style.backgroundColor = "pink";
   e.target.textContent = "Scoop Again mate"
})

