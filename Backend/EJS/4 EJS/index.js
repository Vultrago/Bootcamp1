import express from "express";
const app = express();
const port = 3000

app.set("view engine", "ejs");




app.get("/", (req,res)=>{
    const today = new Date();
    const day = today.getDay();
    // console.log(day);
    let type = "a weekday";
    let motivation = "a day to work hard!"

    if(day === 0 || day === 6){
        type = "weekend"
        motivation = "have a little break"
    }
   res.render("index.ejs",{
    dayType: type,
    motivation: motivation,
})
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})
