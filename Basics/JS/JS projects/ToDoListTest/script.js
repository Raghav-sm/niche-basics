const getTodoInput = document.getElementById('todo-input');
const getAddTaskBtn = document.getElementById('add-task-btn');
const getTodoList = document.getElementById('todo-list');

let tasks = [];

getAddTaskBtn.addEventListener('click', () => {
  const taskText = getTodoInput.value.trim(); // for div we can use textContent
  if (taskText == "") return;
  let newTask = {
    id: Date.now(),
    text: taskText,
    isCompleted: false
  }
  tasks.push(newTask);
  saveTasks();
  getTodoInput.value = "";
  console.log(tasks);

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

})