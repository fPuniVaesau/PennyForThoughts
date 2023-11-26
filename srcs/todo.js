
let add_button = document.querySelector(".add-task");
let newTaskInput = document.querySelector(".items-todo");
let taskContainer = document.querySelector(".pending-task-wrapper");
let error = document.querySelector(".error");
let taskPending = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (taskCount) => {
    taskPending.innerText = taskCount;
}

const addTask = () => {
    let taskName = newTaskInput.value.trim();
    error.style.display = "none";

    if(!taskName){

        setTimeout(() => {
            error.style.display = "block";
        }, 200);

        return;
    }

    const task = `<div class="addedNewTask">
    <input type="checkbox" class="task-complete">
    <span class = "taskName">${taskName}</span>
    
    <button class = "edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
    <i class="fa-solid fa-explosion"></i>
    </button>
    </div>`;

    taskContainer.insertAdjacentHTML("beforeend", task);

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.onclick = () =>{
            button.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        }
    });

    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach(edit => {
        edit.onclick = (e) => {
            let targetElement = e.target;
            if(!(e.target.className == "edit")){
                targetElement = e.target.parentElement;
            }

            newTaskInput.value = targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        }
    })

    // Re work code to update the count once only when the task is complete and deleted and once if it is only justed checked off.
    
    const taskCheck = document.querySelectorAll(".task-complete");
    taskCheck.forEach(checkBox => {
        checkBox.onchange = () => {
            checkBox.nextElementSibling.classList.toggle("completed");

            if(checkBox.checked){
                taskCount -= 1;
            }
            else{
                taskCount += 1;
            }
            displayCount(taskCount);
        }
    })


  
    taskCount += 1;
    displayCount(taskCount);
    newTaskInput.value = "";
};


add_button.addEventListener("click", addTask)

window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);
    newTaskInput.value = "";
}



// console.log(add_button)
// console.log(newTaskInput)
// console.log(taskContainer)
// console.log(error)
// console.log(taskPending)

