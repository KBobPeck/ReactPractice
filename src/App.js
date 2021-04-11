import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import About from './components/About'
import AddTasks from './components/AddTasks'
import { useState, useEffect } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  //on load will gather the list of tasks from the server and build the site
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks();
  }, [])

  //fetches tasks from local host
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json()

    return data
  }


  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000 + 1)
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id));
  }

  //toggle reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ?
          { ...task, reminder: data.reminder } :
          task
      )
    )
  }

  return (
    <Router>
      <div className="container">

        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        {/* The tracker will show you the events and hide the  */}
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && (<AddTasks onAdd={addTask} />)}
            {tasks.length > 0 ?
              (<Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />) :
              ('No tasks to show')}
          </>
        )} />

        {/* he about Page will show and hide the tasks */}
        <Route path='/about' component={About} />


        <Footer />

      </div>
    </Router>
  );
}

export default App;
