document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm';
  
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text flex-1 text-gray-800';
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);
  
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-task bg-green-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500';
        completeButton.addEventListener('click', () => {
          listItem.classList.toggle('completed');
          taskSpan.classList.toggle('line-through');
          taskSpan.classList.toggle('text-gray-500');
        });
        listItem.appendChild(completeButton);
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-task bg-red-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500';
        removeButton.addEventListener('click', () => {
          listItem.remove();
        });
        listItem.appendChild(removeButton);
  
        taskList.appendChild(listItem);
        taskInput.value = '';
      }
    };
  
    // Event listener for the add task button
    addTaskButton.addEventListener('click', addTask);
  
    // Event listener for the Enter key
    taskInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });