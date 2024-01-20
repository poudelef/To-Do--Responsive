function addTask() {
    const newTaskInput = document.getElementById("newTaskinput");
    const tasklist = document.getElementById("Task-list");
    const display_time = document.getElementById("times");

    if (newTaskInput.value !== "") {
        const newListItem = document.createElement("li");
        newListItem.textContent = newTaskInput.value;

        // create a div to store 2 divs
        const timeContainer = document.createElement("div");
        timeContainer.style.display = "flex";
        timeContainer.style.flexDirection = "row";
        timeContainer.classList.add("time-container");
        timeContainer.style.height = "30px";
        timeContainer.style.width = "20vw";
        timeContainer.style.margin = "3px";

        // create a small div
        const small_time = document.createElement("div");
        small_time.style.flex = "2";
        small_time.style.transform = "scale(0)";

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
        

        // create a big div
        const big_time = document.createElement("div");
        big_time.style.flex = ".5";
        big_time.style.transform = "scale(1)";
        big_time.innerText = "!!T!!";

        big_time.addEventListener("mouseenter", function (){
            small_time.style.transform = "scale(1)";
            small_time.style.transition =  "ease-in";
            small_time.style.transitionDuration = "0.3s"
        })

        big_time.addEventListener("mouseleave", function (){
            small_time.style.transform = "scale(0)";
            small_time.style.transition =  "ease-in";
            small_time.style.transitionDuration = "0.3s"
        })
    
        

        timeContainer.appendChild(small_time);
        timeContainer.appendChild(big_time);

        // create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            tasklist.removeChild(newListItem);
            display_time.removeChild(timeContainer);
        });

        newListItem.insertBefore(timeContainer, newListItem.firstChild);
        newListItem.appendChild(removeButton);

        tasklist.appendChild(newListItem);
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
