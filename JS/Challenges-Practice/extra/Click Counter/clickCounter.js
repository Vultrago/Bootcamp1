const button = document.getElementById("button");
let counter = 0;
counter +=1;

button.addEventListener("click", () =>{
    if(counter === 1){
        button.innerHTML = "Clicked 1 time"
        counter ++;
    }else if(counter == 10){
        button.style.backgroundColor = "green"
        button.textContent = "Clicked 10 times, changing background color"
    }
    else{
        button.innerHTML = "Clicked " + counter + " times"
        counter ++;
    }
})

button.addEventListener("mouseover", e =>{
    e.target.style.backgroundColor = "tomato"
})
button.addEventListener("mouseout", e =>{
    e.target.style.backgroundColor = "rgb(164, 114, 211)"
})