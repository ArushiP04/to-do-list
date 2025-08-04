function createNewList() {
  const listContainer = document.getElementById("list-container");

  const listDiv = document.createElement("div");
  listDiv.className = "list";

  const listTitle = prompt("Enter list name:");
  listDiv.innerHTML = `
    <h2>${listTitle}</h2>
    <div class="tasks"></div>
    <input type="text" placeholder="New task..." />
    <input type="datetime-local" />
    <button onclick="addTask(this)">Add Task</button>
  `;

  listContainer.appendChild(listDiv);
}

function addTask(button) {
  const listDiv = button.parentElement;
  const taskInput = listDiv.querySelector('input[type="text"]');
  const dateInput = listDiv.querySelector('input[type="datetime-local"]');
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (!taskText) return;

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  taskDiv.innerHTML = `
    <input type="checkbox" onchange="toggleComplete(this)" />
    <span>${taskText}</span>
    ${taskDate ? `<small>📅 ${new Date(taskDate).toLocaleString()}</small>` : ""}
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  listDiv.querySelector(".tasks").appendChild(taskDiv);
  taskInput.value = "";
  dateInput.value = "";
}

function toggleComplete(checkbox) {
  const taskDiv = checkbox.parentElement;
  taskDiv.classList.toggle("completed");
}

function editTask(button) {
  const taskDiv = button.parentElement;
  const span = taskDiv.querySelector("span");
  const newText = prompt("Edit task:", span.textContent);
  if (newText) span.textContent = newText;
}

function deleteTask(button) {
  const taskDiv = button.parentElement;
  taskDiv.remove();
}
