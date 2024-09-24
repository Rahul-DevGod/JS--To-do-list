
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
       alert("Write something, you dumbo!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // Changed "list.Container" to "listContainer"
        inputBox.value = '';
        let span = document.createElement("span") ;// Clearing the input box after adding the task
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);



