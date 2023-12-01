import { useState } from 'react'

export function useTasks(){
  const [countTask, setCountTask] = useState(0)
  const [tasks, setTasks] = useState([])
  const [taskToEdit, setTaskToEdit] = useState(null)
  
  function addTask (data) {
    setTasks([...tasks, data])
    setCountTask(tasks.length + 1)
    console.log(tasks, 'tareas')
    // setTasks( JSON.parse(localStorage.getItem('TASKS')) || []);
    // localStorage.setItem('TASKS', JSON.stringify([...tasks, data]))
  }
  
  function deleteTask (id) {
    setCountTask(tasks.length - 1)
    const newTasks = tasks.filter(item => item.id !== id)
    setTasks(newTasks)
  }

  function getTaskToEdit (id) {
    const itemToEdit = tasks.filter(item => item.id === id)
    setTaskToEdit(itemToEdit[0])
  }
     
  function editTask (task) {
    if(!task){
      setTaskToEdit(null)
    } else {
      console.log('task', task)
      const prevTasks = [...tasks]
      const indexToEdit = prevTasks.findIndex(item => item.id === task.id)
      prevTasks[indexToEdit] = task
      setTasks(prevTasks)
      setTaskToEdit(null)
    }
    
    //   const indexToEdit = prevTasks.indexOf(item => item.id === task.id)
    //   prevTasks[indexToEdit] 
    // const newTasks = tasks.filter(item => item.id !== id)
    // // console.log(newTasks, 'newTasks')
    // const data = {id, title, description}
    // // console.log(data, 'data')
    // setTasks([...newTasks, data])
    // // console.log(tasks)
 }

  return ({
    tasks,
    countTask,
    addTask,
    deleteTask,
    editTask,
    taskToEdit,
    getTaskToEdit
  })
}