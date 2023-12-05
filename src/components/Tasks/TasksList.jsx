/* eslint-disable react/prop-types */
import { useState } from 'react'
import './taskslist.css'
import { Task } from './Task'
import { ModalTask } from './ModalTask'

export function TasksList ({tasks, deleteTask, pickTask, getTaskToEdit, editTask}) {

    const [showList, setShowList] = useState(true)

    function handlerShowList (){
        setShowList(!showList)
        return
    }

    return (
        <div className="tasksList">
            <h2>List</h2>

           { 
                showList && (
                    
                    tasks.length === 0
                    ?
                    <p>You dont write yet</p>
                    :
                    <Task tasks={tasks} deleteTask={deleteTask} getTaskToEdit={getTaskToEdit}/>
                )
            }

            {
                pickTask && (
                    <ModalTask pickTask={pickTask} editTask={editTask}/>
                )
            }

            <button className='tasksList-button-show' onClick={handlerShowList}>{ showList ? `Hide` : `Show`}</button>
        </div>
    )
}
