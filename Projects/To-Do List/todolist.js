const addButton = document.getElementById("addTask");
const inputField = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(){
    const task = inputField.value.trim()

    if(task !== ""){
        const newTask = document.createElement("div");
        newTask.classList.add("new-task");
        
        const taskTest = document.createElement("span");
        taskTest.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌"
        deleteBtn.classList.add("deleteButton");
        deleteBtn.addEventListener("click", ()=>{
            newTask.remove();
        });

       

        newTask.appendChild(taskTest);
        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);

        inputField.value = "";
    }
}

addButton.addEventListener("click", addTask)
inputField.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        addTask();
    }
})
