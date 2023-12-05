import { Header } from './components/Header/Header'
import { FormTasks } from './components/FormTasks/FormTasks'
import { TasksList } from './components/Tasks/TasksList'
import { useReducer } from 'react'
import { initialState, taskReducer } from './reducers/taskReducer'
import { ACTIONS } from './actions/actions'
import { Task } from './components/Tasks/Task'
import { ModalTask } from './components/Tasks/ModalTask'

function App() {

  const [state, dispatch] = useReducer(taskReducer, initialState)
  
  function addTask (data) {
    dispatch({type: ACTIONS.ADD_TASK, payload: data})
  }
  function deleteTask (id) {
    dispatch({type: ACTIONS.DELETE_TASK, payload: id})
  }
  function getTaskToEdit (id) {
    dispatch({type: ACTIONS.GET_TASK, payload: id})
  }
  function editTask (data) {
    dispatch({type: ACTIONS.EDIT_TASK, payload: data})
  }
  
  return (
    <>
      <Header countTask={state.countTask} />
      <main style={{"display":"flex", "justifyContent" : "space-between"}}>
        <FormTasks addTask={addTask}/>
        <TasksList 
          tasks={state.tasks} 
          deleteTask={deleteTask}
          getTaskToEdit={getTaskToEdit}
          pickTask={state.pickTask}
          editTask={editTask}
        > 
          {/* <Task 
            tasks={state.tasks} 
            deleteTask={deleteTask}
            getTaskToEdit={getTaskToEdit}
          />
          <ModalTask 
            pickTask={state.pickTask}
            editTask={editTask}
          /> */}
        </TasksList>
      </main>
    </>
  )
}

export default App
