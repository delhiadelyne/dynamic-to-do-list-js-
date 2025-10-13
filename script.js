// Wait for the DOM to fully load before running any scripts
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task text and trim any extra whitespace
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Set the remove button click event to delete the task
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the new task to the task list
        taskList.appendChild(li);

        // Clear the input field for the next task
        taskInput.value = '';
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing "Enter" key in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
