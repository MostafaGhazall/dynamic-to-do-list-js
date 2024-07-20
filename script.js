// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task to the list
  function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new li element and set its text content to taskText
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Assign an onclick event to the remove button to remove the li element from taskList
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the li element, then append the li to taskList
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = "";
  }

  // Add an event listener to addButton to call addTask when the button is clicked
  addButton.addEventListener("click", addTask);

  // Add an event listener to taskInput for the 'keypress' event to allow tasks to be added by pressing the “Enter” key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
