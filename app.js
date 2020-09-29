// DEFINE UI VARS
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// LOAD ALL EVENT LISTENERS
loadEventListeners();

// Load ALL EVENT LISTENRES
function loadEventListeners() {
  // ADD TASK EVENT
  form.addEventListener('submit', addTask);
  // REMOVE TASK EVENT
  taskList.addEventListener('click', removeTask);
  // CLEAR TASK EVENT
  clearBtn.addEventListener('click', claerTasks);
  // FILTER TASKS EVENT
  filter.addEventListener('keyup', filterTasks);
}

// Add TASK
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }
  if (taskInput.value !== "") {
    // CREATE LI ELEMENT
    const li = document.createElement('li');
    // ADD CLASS
    li.className = 'collection-item';
    // CREATE TEXT NODE APPEND TO LI
    li.appendChild(document.createTextNode(taskInput.value));
    // CREATE A NEW LINK ELEMENT
    const link = document.createElement('a');
    // ADD CLASS
    link.className = 'delete-item secondary-content';
    // ADD ICON html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // APPEND THE LINK TO LI
    li.appendChild(link);

    // APEND LI TO UL
    taskList.appendChild(li);

    // Clear Input
    taskInput.value = '';

    e.preventDefault();
  }
}

// REMOVE TASK
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
// CLEAR TASKS
function claerTasks(e) {
  if (confirm('Are you sure?')) {
    // taskList.innerHTML = '';
    // FASTER WAY
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}

// FILTER TASKS
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}