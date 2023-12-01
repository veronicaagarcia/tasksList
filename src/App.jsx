import { Header } from './components/Header/Header'
import { FormTasks } from './components/FormTasks/FormTasks'
import { TasksList } from './components/TasksList/TasksList'
import { useTasks } from './useTasks'

function App() {
 
  const { 
    tasks,
    countTask,
    addTask,
    deleteTask,
    editTask,
    taskToEdit,
    getTaskToEdit,
  } = useTasks()

  return (
    <>
      <Header countTask={countTask} />
      <main style={{"display":"flex", "justifyContent" : "space-between"}}>
        <FormTasks addTask={addTask}/>
        <TasksList 
          tasks={tasks} 
          deleteTask={deleteTask} 
          editTask={editTask}
          taskToEdit={taskToEdit}
          getTaskToEdit={getTaskToEdit}
        />
      </main>
    </>
  )
}

export default App
