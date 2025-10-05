/*
const div1 = document.getElementById("div1");

div1.addEventListener("click", e =>{
    e.target.style.backgroundColor = "tomato"
    e.target.textContent = "Well done"
})

div1.addEventListener("mouseover", e =>{
    e.target.style.backgroundColor = "grey"
    e.target.textContent = "Are you going to click me?"
})

div1.addEventListener("mouseout", e =>{
    e.target.style.backgroundColor = "greenyellow"
    e.target.textContent = "Click me😏"
} )


//Practise

var weather = "rainy"

switch (weather) {
    case "sunny":
        console.log("Wear sunglasses");
        break;
    case "rainy":
        console.log("Take an umbrella");
        break;
    case "cloudy":
        console.log("Might be chilly, wear a jacket");
        break;
    case "snowy":
        console.log("Bundle up is snowing!");
        break;
    default: 
        console.log("Check your weather app");
}


let car = {
    brand: "toyota",
    color: "blue",
    start: function(){
        console.log("The " + car.color+ " " + car.brand+ " " + "car has started");
    }
};
car.start();


var player = {
    name: "Knight",
    health: 100,
    armour: 20,
    level: 1,

    takeDamage: function(n){
       let damage = n - this.armour;
       if(damage < 0) damage = 0;
       this.health -= damage;
       console.log(this.name + " took " + damage + " hp. Health is now " + this.health + " hp.");
    },

    heal: function(n){
        if(n < 0) n = 0
        this.health += n;
        console.log(this.name + " healed by " + n + " hp . Health is now " + this.health + " hp.");
    },

    levelUp: function(){
        this.level += 1;
        this.health += 20;
        console.log(this.name + " leveled up to level " + this.level + " health is now " + this.health + "hp");
    }
}

player.takeDamage(100);
player.heal(100);
player.levelUp();



const bulb = document.getElementById("bulb");

bulb.addEventListener("click", () => {
    bulb.classList.toggle("on");
    bulb.classList.toggle("off");
})
*/

