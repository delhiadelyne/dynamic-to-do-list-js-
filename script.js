// script.js
// Handles adding, removing, and persisting tasks with localStorage.

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let tasks = [];

  // Save tasks to localStorage
  function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Add a task to the list
  function addTask(taskTextParam = null, save = true) {
    const taskText = taskTextParam !== null ? taskTextParam : taskInput.value.trim();

    if (taskText === "") {
      if (taskTextParam === null) alert("Please enter a task!");
      return;
    }

    // Create list item
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Remove handler
    removeBtn.addEventListener("click", () => {
      const liArray = Array.from(taskList.children);
      const index = liArray.indexOf(li);
      if (index > -1) {
        taskList.removeChild(li);
        tasks.splice(index, 1);
        saveTasksToLocalStorage();
      }
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save task
    if (save) {
      tasks.push(taskText);
      saveTasksToLocalStorage();
    }

    if (taskTextParam === null) {
      taskInput.value = "";
    }
  }

  // Load tasks on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks = storedTasks;
    tasks.forEach(task => addTask(task, false));
  }

  // Event listeners
  addButton.addEventListener("click", () => addTask());
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") addTask();
  });

  // Initialize
  loadTasks();
});
