import express from "express"; 
const app = express();
const port = 3100

app.get("/", (req,res)=>{
    res.send("Hello from vscode")
})

app.get("/contact", (req,res)=>{
    res.send("<h1>Phone number: 07739872349</h1>")
})

app.get("/about", (req,res)=>{
    res.send("<h1>We are a company that specialises in cybersecurity</h1>")
})

app.listen(port, ()=>{
    console.log(`This server is running on port ${port}`);
})