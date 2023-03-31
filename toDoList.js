
// document.getElementById("add-btn").addEventListener("click", newTask);
// function newTask() {
// 	let inputTask = document.getElementById("input-task").value;
// 	let li = document.createElement("li");
// 	let tn = document.createTextNode(inputTask); 
// 	li.appendChild(tn);
// 	document.getElementById("task-list").appendChild(li);
// }



document.getElementById("taskListForm").addEventListener("submit", newTask);
async function newTask(event) {
	event.preventDefault();

	let inputTask = document.getElementById("input-task").value;
	let li = document.createElement("li");
	let tn = document.createTextNode(inputTask);
	li.appendChild(tn);
	document.getElementById("task-list").appendChild(li);
}

document.getElementById("remove-btn").addEventListener("click", removeTask);
function removeTask() {
	let inputTask = document.getElementById("input-task").value;
	let taskItem = document.querySelector(`li:contains(${inputTask})`);
	if (taskItem) {
		taskItem.remove();
	}
}
// (method) Document.createTextNode(data: string): Text
// Creates a text string from the specified value.

// @param data — String that specifies the nodeValue property of the text node.


// It took me several hours to realize this was what I asked Brian about during the lecture when I essentially said, "why use this, (it may have been the other one)?"

// 5 hours later this took 12 lines of code


