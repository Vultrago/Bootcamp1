//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is Alfredo

//username1 = letmein
//password1 = nodejs
import express from "express"
import bodyParser from "body-parser"
import {dirname} from "path"
import {fileURLToPath} from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
var isUserAuthorised = false;
var loginAuthorised = false
app.use(bodyParser.urlencoded({extended: true}))

//Check login details

function loginChecker(req,res,next){
    const username1 = req.body["username"]
    const password1 = req.body["password"];

    if(username1 === "letmein"  && password1 === "nodejs"){
       req.loginAuthorised = true
    }else{
        req.loginAuthorised = false
    }
    next()
}
// app.use(loginChecker)

app.get("/login", (req,res)=>{
    res.sendFile(__dirname + "/public/login.html")
})

app.post("/login",loginChecker, (req,res)=>{
      if(req.loginAuthorised === true){
        res.sendFile(__dirname + "/public/index.html")
    }else{
        res.sendFile(__dirname + "/public/login.html")
    }
})


// password checker

function passwordChecker(req, res,next){
    const password = req.body["password"]
    if(password === "Alfredo"){
        req.isUserAuthorised = true;
    }else{
        req.isUserAuthorised = false
    }
    next()
}
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check",passwordChecker, (req, res)=>{
    if(req.isUserAuthorised === true){
        res.sendFile(__dirname + "/public/secret.html")
    }else{
        res.sendFile(__dirname + "/public/index.html")
    }
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

