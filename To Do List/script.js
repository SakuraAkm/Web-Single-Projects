// TO-DO-LIST ~~~~~~~~~~~~~~~~~~~~~~~~~~

const inputTaskBar = document.querySelector(".add-task input");
const ADD = document.querySelector(".add-task button");
const toDoList = document.getElementById('to-do-list');
let counter = 0;


// ADDING TASKS ~~~~~~~~~~~~~~~~~
function addTask() {
    let text = inputTaskBar.value;

    if (text != "") {
        inputTaskBar.value = "";

        let task = document.createElement("li");
        task.classList.add("container", "mx-auto");
        task.innerHTML = `<input type="checkbox" name="${counter}" id="${counter}">${text}`

        counter++;

        toDoList.appendChild(task);

        // LINE TRHOUGH / DELETING LIST ~~~~~~~~~~~~~~~~~

        task.addEventListener("click", () => {
            const checkBox = task.querySelector("input");
            task.classList.toggle("line-through");
            checkBox.checked = !checkBox.checked;
        })

        task.addEventListener("dblclick", () => {
            task.remove();
        })

    }
}

ADD.addEventListener("click", addTask)

inputTaskBar.addEventListener("keydown", () => {
    if (event.key == "Enter") {
        addTask();
    }
})
