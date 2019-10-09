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
  		e.task_desc_field.reset()
  		e.form_variable.reset()
  		form_variable.reset()
   	});
  form_variable.reset()
});
