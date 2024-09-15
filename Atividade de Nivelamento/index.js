function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor, insira uma tarefa!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Concluir';
    completeButton.onclick = function () {
        li.classList.toggle('completed');
    };
    li.appendChild(completeButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.className = 'remove';
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };
    li.appendChild(removeButton);

    taskList.appendChild(li);
    taskInput.value = '';
}
