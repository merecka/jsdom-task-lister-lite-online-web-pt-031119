document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form_variable = document.getElementById("create-task-form");
  let task_desc_field = document.querySelector("#new-task-description");
  let tasks_list = document.getElementById("tasks");

  form_variable.addEventListener("submit", function(e){
   		e.preventDefault() //prevents form from being submitted
  		const new_task = document.createElement('li')
  		new_task.innerText = task_desc_field.value
  		tasks_list.appendChild(new_task)
  		let delete_button = document.createElement("BUTTON")
  		delete_button.innerHTML = "Delete"
  		new_task.appendChild(delete_button)

  		delete_button.addEventListener("click", )
  		e.target.reset() // clears the form after submitting it
   	});

});
