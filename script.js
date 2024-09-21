const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

