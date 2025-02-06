
    document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("myInput");
    const addTaskButton = document.querySelector(".addBtn");
    const taskList = document.getElementById("unlist");

    addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText == "") {
    alert("Field cannot be empty");
    return;
}
    const listItem = document.createElement("li");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener("change", function () {
    listItem.classList.toggle("completed");
});

    const taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "🗑️";
    removeButton.classList.add("delete-button");
    removeButton.addEventListener("click", function () {
    taskList.removeChild(listItem);
});

    taskLabel.prepend(taskCheckbox);
    listItem.appendChild(taskLabel);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
});
});

