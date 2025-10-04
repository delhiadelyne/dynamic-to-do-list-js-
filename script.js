// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Define the addTask function
    function addTask() {
        // Retrieve and trim value from input
        const taskText = taskInput.value.trim();

        // If empty, alert the user
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Assign onclick event to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeBtn);

        // Append li to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listener to Add button
    addButton.addEventListener("click", addTask);

    // Attach event listener to input field for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
