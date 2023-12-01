/* eslint-disable react/prop-types */
import { useState } from 'react'
import './taskslist.css'
import { TotalTasks } from './TotalTasks'

export function TasksList ({tasks, deleteTask, editTask ,taskToEdit, getTaskToEdit}) {

    const [showList, setShowList] = useState(true)
    const [taskEdited, setTaskEdited] = useState(null)

    function handlerShowList (){
        setShowList(!showList)
        return
    }

    function handlerOnChangeEditTitle (e){
        e.preventDefault()
        if(taskEdited){
            setTaskEdited({...taskEdited, inputTitle: e.target.value})
        } else {
            setTaskEdited({...taskToEdit, inputTitle: e.target.value})
        }
    }

    function handlerOnChangeEditDescription (e){
        e.preventDefault()
        if(taskEdited){
            setTaskEdited({...taskEdited, inputDescription: e.target.value})
        } else {
            setTaskEdited({...taskToEdit, inputDescription: e.target.value})
        }
    }

    function saveChangesOrClose (e) {
        e.preventDefault()
        if(!taskEdited){
            editTask({})
        } else {
            editTask({...taskEdited, id : taskToEdit.id })
        }
        setTaskEdited(null)
    }

    return (
        <div className="tasksList">
            <h2>List</h2>
            {
                taskToEdit && (
                    <div className='modal'>
                        <h3>Edit Task</h3>
                        <li>
                            <input
                                onChange={handlerOnChangeEditTitle} 
                                className='tasksList-title' 
                                name="editTitle" 
                                value={taskEdited ? taskEdited.inputTitle : taskToEdit.inputTitle}
                            />
                            <textarea
                                onChange={handlerOnChangeEditDescription} 
                                className='tasksList-description' 
                                name="editDescription" 
                                value={taskEdited ? taskEdited.inputDescription : taskToEdit.inputDescription}
                            />
                        </li>
                        <div>
                            <button onClick={saveChangesOrClose}>Save changes</button><button onClick={saveChangesOrClose}>Close</button>
                        </div>
                    </div>
                )
            }

           { showList &&(
                tasks.length === 0
                ?
                <p>You dont write yet</p>
                :
                (<TotalTasks tasks={tasks} deleteTask={deleteTask} getTaskToEdit={getTaskToEdit}/>)
            )}
            <button className='tasksList-button-show' onClick={handlerShowList}>{ showList ? `Hide` : `Show`}</button>
        </div>
    )
}
