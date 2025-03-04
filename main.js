const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".add-todo")
const todoIncomplete = document.querySelector(".todo-Incomplete")
const todoInprogress = document.querySelector(".todo-Inprogress")
const todoComplete = document.querySelector(".todo-Complete")

todoButton.addEventListener("click", () => {
  const inputValue = todoInput.value
  console.log(inputValue)

  if (inputValue.trim === '') {
    return;
  }

  const createElement = document.createElement("div")
  createElement.classList.add("todo-item")
  createElement.textContent = inputValue;
  createElement.setAttribute('draggable', 'true')

  const deleteButton = document.createElement('i')
  deleteButton.classList.add('fa-solid')
  deleteButton.classList.add('fa-x')
  deleteButton.classList.add('fa-icon')
  
  todoIncomplete.appendChild(createElement)
  createElement.appendChild(deleteButton)

  todoInput.value = '';

  deleteButton.addEventListener('click', () => {
    // createElement.classList.remove('todo-item')
    // createElement.classList.add('inactive')
    createElement.remove()
  })

  createElement.addEventListener('dragstart', function (e) {
    let target = e.target
    // console.log(target)
    target.classList.add('dragging')

    // todoInprogress.addEventListener('dragover', function (e){
    //   e.preventDefault();
    // })
    // todoInprogress.addEventListener('drop', function (e) {
    //   todoInprogress.appendChild(target);
    //   target = null;
    // })
  })

  createElement.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging')
  })
  // todoIncompleted.push([...createElement, createElement])
  // console.log(todoIncompleted)

  // const todoItem = document.querySelector(".todo-item")
})

const handleDragOver = (e) => {
  e.preventDefault()
  const target = e.target

  if(target.classList.contains('todo-items')){
    target.classList.add('drag-over')
  }
}

const handleDragLeave = (e) => {
  const target = e.target

  if (target.classList.contains('todo-items')) {
    target.classList.remove('drag-over')
  }
}

const dragDown = (e) => {
  e.preventDefault()
  const target = e.target
  target.classList.remove('drag-over')

  const draggedItem = document.querySelector('.dragging')

  if(target.classList.contains('todo-items')){
    target.appendChild(draggedItem)
  }
}

[todoIncomplete, todoInprogress, todoComplete].forEach(section => {
  section.addEventListener('dragover', handleDragOver)
  section.addEventListener('dragleave', handleDragLeave)
  section.addEventListener('drop', dragDown)
})