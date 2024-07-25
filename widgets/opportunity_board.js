// dailyGrowthChecklist.js

// Function to create a new task element
function createTaskElement(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.classList.add('task-content');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', () => {
        taskContent.classList.toggle('completed');
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => {
        taskItem.remove();
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(removeButton);

    return taskItem;
}

// Function to add a new task to the checklist
function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
}

// Function to handle the task form submission
function handleTaskFormSubmit(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
}

// Initialize the checklist
function initChecklist() {
    const taskForm = document.getElementById('task-form');
    taskForm.addEventListener('submit', handleTaskFormSubmit);
}

// Wait for the DOM to load before initializing
document.addEventListener('DOMContentLoaded', initChecklist);
