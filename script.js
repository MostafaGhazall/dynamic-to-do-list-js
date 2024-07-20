
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array
    let tasks = [];

    // Load tasks from Local Storage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            tasks.forEach(task => addTaskToDOM(task));
        }
    }

    // Save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task to the DOM
    function addTaskToDOM(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        removeButton.onclick = function() {
            const index = tasks.indexOf(taskText);
            if (index > -1) {
                tasks.splice(index, 1);
                saveTasks();
            }
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        addTaskToDOM(taskText);
        tasks.push(taskText);
        saveTasks();

        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when the page loads
    loadTasks();
});