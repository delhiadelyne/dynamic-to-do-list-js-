// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Get the input value and trim whitespace
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Task Creation
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Task Removal
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeButton);

        // Append li to task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
