const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// function addTask(){
//     if(inputBox.value === ''){
//         alert("Please Add your task first!")
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value='';
//     saveData();
// }
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

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showSavedTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showSavedTasks();
function switchToVibrantMode() {
    window.location.href = 'vibrant.html';
}


