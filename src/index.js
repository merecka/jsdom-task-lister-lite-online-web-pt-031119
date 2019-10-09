document.addEventListener("DOMContentLoaded", () => {
 
  let form_variable = document.getElementById("create-task-form");
  let task_desc_field = document.querySelector("#new-task-description");
  let tasks_list = document.getElementById("tasks");

  form_variable.addEventListener("submit", function(e){
   		e.preventDefault() //prevents form from being submitted
  		const new_task = document.createElement('li')
  		new_task.innerText = task_desc_field.value // sets the individual task string equal to what is written in the description field
  		tasks_list.appendChild(new_task) // appends individual tasks to the UL "tasks"
  		let delete_button = document.createElement("BUTTON") // creates a delete button
  		delete_button.innerHTML = "Delete" // adds the word Delete to the delete button
  		new_task.appendChild(delete_button) // adds delete buttont to each task

  		function removeItem() {
  			tasks_list.removeChild(new_task) // removes individual tasks from tasks list
  		}

  		delete_button.addEventListener("click", removeItem)
  		e.currentTarget.reset() // clears the form after submitting it
   	});

});
