const taskForm  = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("addd-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

let currentTask = {};
const taskData = [];

// adding an event listener

openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

// adding an event listener for the close button

closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal();
});

// adding an event listener for the cancel or update button

cancelBtn.addEventListener("click", () => {
   
    confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
    confirmCloseDialog.close();
});

// adding an event listener for the add or update button
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataArrIndex = taskData.findIndex((item) =>  item.id === currentTask.id );
   

});