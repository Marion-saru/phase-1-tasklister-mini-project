document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  let li;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const input = document.getElementById("new-task-description");
    const taskText = input.value;

    if (taskText.trim() !== "") {
      li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      input.value = ""; 
    }

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.fontSize ="10px"

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    input.value = ""; 

  });
});
