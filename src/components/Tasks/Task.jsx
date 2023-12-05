/* eslint-disable react/prop-types */
import './taskslist.css'

export function Task ({deleteTask, tasks, getTaskToEdit}) {

    function handlerEdit (id) {
        getTaskToEdit(id)
    }

    function handlerDelete (id) {
        deleteTask(id)
    }
    return (
        <ul>
            { tasks.map(item => (
                <li key={item.id}>
                    <div>
                        <h3 className='tasksList-title'>{item.inputTitle}</h3>
                        <button 
                            onClick={()=> handlerEdit(item.id)}
                            className='tasksList-button-svg-edit'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                        </button>
                        <button 
                            onClick={()=> handlerDelete(item.id)}
                            className='tasksList-button-svg-delete'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                    <p
                    className='tasksList-description' 
                    name="editDescription">{item.inputDescription}</p>
                    <hr></hr>
                </li>
            ))}
        </ul>
    )
}