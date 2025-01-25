const InputEl = document.getElementById('todo-input');
const addTaskBtnEl = document.getElementById('add-task-btn');
const todoListEl = document.getElementById('todo-list');
const delBtnEl = document.getElementById('del-btn');

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();


  addTaskBtnEl.addEventListener('click', addTask);

  InputEl.addEventListener('keypress', (evenT) => {
    if (evenT.key === 'Enter') {
      addTask();
    }
  });

  function addTask() {
    const taskInput = InputEl.value.trim();
    if (taskInput) {
      createTask(taskInput);
      InputEl.value = '';
      saveTasks();
    } else {
      alert("enri media , task yali?");
    }
  }

  function createTask(taskInput) {
    const newListEl = document.createElement('li');
    const taskTextEl = document.createElement('span');

    taskTextEl.textContent = taskInput;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'del-btn';
    delBtn.addEventListener('click', () => {
      newListEl.remove();
      saveTasks();
    });

    newListEl.appendChild(taskTextEl);
    newListEl.appendChild(delBtn);
    todoListEl.appendChild(newListEl);
  }

  function saveTasks() {
    const tasks = [];
    todoListEl.querySelectorAll('li').forEach((task) => {
      const spanText = task.querySelector('span').textContent.trim();
      tasks.push(spanText);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function renderTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task) => {
      createTask(task);
    })
  }
})