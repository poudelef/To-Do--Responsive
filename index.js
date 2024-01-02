function addTask(){

    // Adding items
    const newTask = document.getElementById("newTaskinput");
    const tasklist = document.getElementById("Task-list");

    const newListItem = document.createElement("li");
    newListItem.textContent = newTask.value;

    tasklist.appendChild(newListItem);

    // removing items

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", ()=>{
        tasklist.removeChild(newListItem);
    });
    newListItem.appendChild(removeButton);

    // Clearing the input text sfter submitting Enter

    document.getElementById("newTaskinput").value = '';
    
}

