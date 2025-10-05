import express from "express"

const app = express();
const port = 3000;

app.set("view engine", "ejs");


const fruits = ["apple", "mango", "orange", "banana"];

function randomFruit(fruits){
    return fruits[Math.floor(Math.random() * fruits.length)]
}

function getAdvice(fruit){
    if(fruit === "apple"){
        return "One apple a day keeps the doctor away"
    }else if(fruit === "banana"){
        return "Bananas are a good source of potassium, fiber and vitamin B6."
    }else if(fruit === "orange"){
        return "Oranges are an excellent source of vitamin C."
    }else{
        return "Mangoes contain antioxidants like mangiferin, which may help protect against certain cancers and heart disease."
    }
}

app.get("/", (req,res)=>{
    let selectedFruit = randomFruit(fruits)
    let advice = getAdvice(selectedFruit)
    res.render("index.ejs",{
        fruit: selectedFruit,
        quote: advice,
    })
})

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
})
