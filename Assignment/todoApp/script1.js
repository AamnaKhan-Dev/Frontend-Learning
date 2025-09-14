document.addEventListener('DOMContentLoaded', function () {
    const lightModeBtn = document.getElementById('lightModeBtn');
    const container = document.querySelector('.container');
    const todoApp = document.querySelector('.todo-app');

    lightModeBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        container.classList.toggle('light-mode');
        const isLightMode = container.classList.contains('light-mode');
        toggleLightModeButton(isLightMode);
    });

    function toggleLightModeButton(isLightMode) {
        const buttonIcon = lightModeBtn.querySelector('img');
        const iconSrc = isLightMode ? './images/dark-mode.png' : './images/light-mode.png';
        buttonIcon.src = iconSrc;

        // Change container background color
        container.style.backgroundColor = isLightMode ? '#242526' : '#ffc0cb';

        // Change todo-app background color
        todoApp.style.backgroundColor = isLightMode ? '#928e85' : '#ffecd0';
    }
});

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskCount = document.getElementById("task-count");

function addTask() {
    if (inputBox.value === '') {
        alert("Please Add your task first!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<img src="./images/delete.png" alt="Delete">';
        li.appendChild(span);
    }
    inputBox.value = '';
    updateTaskCount();
    saveData();
}

function updateTaskCount() {
    const completedTasks = document.querySelectorAll('.checked').length;
    const totalTasks = document.querySelectorAll('li').length;
    taskCount.textContent = `Completed Tasks: ${completedTasks} / Total Tasks: ${totalTasks}`;
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        updateTaskCount();
        saveData();
    } else if (e.target.tagName === "IMG") { // Check if the clicked element is an <img> tag
        e.target.parentElement.parentElement.remove(); // Remove the parent of the parent of the <img> tag (which is the <li> element)
        updateTaskCount();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showSavedTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
    updateTaskCount();
}

showSavedTasks();

function switchToMinimalMode() {
    window.location.href = 'index.html';
}

