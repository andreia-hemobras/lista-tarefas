let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("btn-add");
let listArea = document.getElementById("list-area")

let taskCounter = 0;

function addTask() {
    let inputValue = taskInput.value;

    if ((inputValue !== "") && (inputValue !== null) && (inputValue !== undefined)) {
        taskCounter++;

        let newTask = `
            <div id="${taskCounter}" class="item">
                <div class="item-icon" onclick="markTask(${taskCounter})" ><span id="icon_${taskCounter}" class="material-symbols-outlined">circle</span></div>
                <div class="item-name" onclick="markTask(${taskCounter})">${inputValue}</div>
                <div class="item-button">
                    <button class="delete" onclick="deleteTask(${taskCounter})">
                        <span class="material-symbols-outlined">delete</span> Deletar
                    </button>
                </div>
            </div>
        `;

        listArea.innerHTML += newTask;
        taskInput.value = "";
        taskInput.focus();
    }
}

function deleteTask(id) {
    let deletedItem = document.getElementById(id);
    deletedItem.remove();
}

function markTask(id) {
    let task = document.getElementById(id);
    let icon = document.getElementById("icon_" + id);

    let taskClass = task.getAttribute("class");

    if (taskClass === "item") {
        task.classList.add("clicked");
        icon.innerText = "check_circle";
        task.parentNode.appendChild(task);
    } else {
        task.classList.remove("clicked");
        icon.innerText = "circle";
        task.parentNode.prepend(task);
    }
}

taskInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
})
