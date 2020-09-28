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
    // CREATE NEW LINK ELEMENT
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
    console.log(li)

    e.preventDefault();
  }

}