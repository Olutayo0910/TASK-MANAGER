const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')
// Load tasks from /api/tasks
const showTasks = async () => {
  loadingDOM.style.visibility = 'visible'
  try {
    const response = await axios.get('/api/v1/tasks')
    const tasks = response.data.tasks
    if (tasks.length < 1) {
      tasksDOM.innerHTML = '<h5 class="text-center">No tasks in your list</h5>'
      loadingDOM.style.visibility = 'hidden'
      return
    }
    const allTasks = tasks.map((task) => {
        const completed = task.completed;
        const taskID = task._id;
        const name = task.name;
        return `
    <div class="task-container single-task max-w-2xl mx-auto mt-5 p-4 bg-white shadow-lg rounded-lg ${completed ? 'line-through' : ''}">
      <div class="flex justify-between items-center">
        <h5 class="flex items-center">
          <span class="mr-2"><i class="far fa-check-circle"></i></span>${name}
        </h5>
        <div class="task-links flex space-x-2">
          <!-- edit link -->
          <a href="task.html?id=${taskID}" class="edit-link">
            <i class="fas fa-edit"></i>
          </a>
          <!-- delete btn -->
          <button type="button" class="delete-btn" data-id="${taskID}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `;
    })
    .join('')
    tasksDOM.innerHTML = allTasks

    }catch (error) {
        tasksDOM.innerHTML =
          '<h5 class="empty-list">There was an error, please try later....</h5>'
      }
      loadingDOM.style.visibility = 'hidden'
}

showTasks()

// delete task /api/tasks/:id

tasksDOM.addEventListener('click', async (e) => {
    const el = e.target
    if (el.parentElement.classList.contains('delete-btn')) {
      loadingDOM.style.visibility = 'visible'
      const id = el.parentElement.dataset.id
      try {
        await axios.delete(`/api/v1/tasks/${id}`)
        showTasks()
      } catch (error) {
        console.log(error)
      }
    }
    loadingDOM.style.visibility = 'hidden'
  })
  
  // form
  
  formDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = taskInputDOM.value
  
    try {
      await axios.post('/api/v1/tasks', { name })
      showTasks()
      taskInputDOM.value = ''
      formAlertDOM.style.display = 'block'
      formAlertDOM.textContent = `success, task added`
      formAlertDOM.classList.add('text-green-500')
    } catch (error) {
      formAlertDOM.style.display = 'block'
      formAlertDOM.innerHTML = `error, please try again`
    }
    setTimeout(() => {
      formAlertDOM.style.display = 'none'
      formAlertDOM.classList.remove('text-green-500', 'text-red-500')
    }, 3000)
  })


