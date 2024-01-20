function addTask() {
    const newTaskInput = document.getElementById("newTaskinput");
    const tasklist = document.getElementById("Task-list");


    if (newTaskInput.value !== "") {
        const newListItem = document.createElement("li");
        const textContentDiv = document.createElement("div");
        textContentDiv.textContent = newTaskInput.value;
        textContentDiv.style.marginBottom = "1rem";
        

        // create a div to store 2 divs
        const timeContainer = document.createElement("div");
        timeContainer.style.display = "flex";
        timeContainer.style.flexDirection = "row";
        timeContainer.classList.add("time-container");
        timeContainer.style.height = "30px";
        timeContainer.style.width = "20vw";
        timeContainer.style.margin = "3px";
        timeContainer.style.flex = "1";

        // create a small div
        const small_time = document.createElement("div");
        small_time.style.flex = "1";
        small_time.style.transform = "scale(0)";
        small_time.style.paddingRight = "1rem"

        // Displaying time inside div

        let currentDate = new Date();
        let dateTime = currentDate.toLocaleDateString('default',{
            year: "2-digit",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"

        })

        small_time.innerText = dateTime;
     
    
        // Creating hover effect using javaScript.

        newListItem.addEventListener("mouseenter", function (){
            small_time.style.transform = "scale(1)";
            small_time.style.transition =  "ease-in";
            small_time.style.transitionDuration = "0.3s"
        })


        newListItem.addEventListener("mouseleave", function (){
            small_time.style.transform = "scale(0)";
            small_time.style.transition =  "ease-in";
            small_time.style.transitionDuration = "0.3s"
        })
    
        

        timeContainer.appendChild(small_time);


        
        

        // create remove button
        const removeButton = document.createElement("button");
        timeContainer.style.flex = "0.5";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            tasklist.removeChild(newListItem);
            tasklist.removeChild(timeContainer);
        });

        newListItem.insertBefore(timeContainer, newListItem.firstChild);
        newListItem.append(textContentDiv);
        newListItem.appendChild(removeButton);

        // This adds new list above the old. 
        // If we did append then it will adds new list just below the old list.
        tasklist.insertBefore(newListItem, tasklist.firstChild);
    } else {
        // Handle the case when the input is empty
        const newListItem = document.createElement("li");
        newListItem.textContent = "Empty";

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            tasklist.removeChild(newListItem);
            display_time.removeChild(timeContainer);
        });

        newListItem.appendChild(removeButton);

        tasklist.appendChild(newListItem);

    }

    newTaskInput.value = '';
    
}
