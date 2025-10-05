var button = document.getElementById("button")
message = document.getElementById("surprise")

button.addEventListener("click", () =>{
    if(message.classList.contains("hidden")){
    console.log("I have been clicked");
    message.classList.remove("hidden")
    button.innerHTML = "Hide Message"
}else{
    message.classList.add("hidden")
    button.innerHTML = ("Show Message")
}
})

