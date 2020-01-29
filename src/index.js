document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener("submit", createNewTask);
  // const deleteButton = document.getElementById("delete")
});
function createNewTask(event){
  event.preventDefault()
  const createNewDescription = document.getElementById('new-task-description')
  const createLi = document.createElement('li')
  createLi.innerHTML = `${createNewDescription.value} <button class="delete">&times;</button>`
  
  const deleteButton = createLi.getElementsByClassName("delete")[0]
  deleteButton.addEventListener("click", function(e){
    createLi.remove()
  });
  console.log(deleteButton)
  appendNewTask(createLi)
  event.target.reset()
}

const appendNewTask = (task) => {
  document.getElementById('tasks').appendChild(task)
}


// let deleteButtons = Array.from(document.getElementsByClassName('delete'))

// deleteButtons.forEach(function(button){
//   button.addEventListener("click", function(event) {
//     let li = event.target.parentNode
//     li.remove()
//   })
// })

//button is clicked
//read what was in the text box
// append it to the tasks

/* ### Deliverables:

- users should be able to type a task into the input field
- users should be able to click some form of a submit button
- the task string that the user provided should appear 
  on the DOM after the submit button has been activated */



