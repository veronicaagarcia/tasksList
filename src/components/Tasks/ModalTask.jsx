import { useState } from "react"

export function ModalTask ({pickTask, editTask}) {
            
    const [newValues, setNewValues] = useState({inputTitle : '',inputDescription: '', id: null })
  console.log(pickTask)

    function handlerOnChangeEditTitle (e){
        e.preventDefault()

        setNewValues({...newValues, inputTitle : e.target.value})

        
    }
    function handlerOnChangeEditDescription (e){
        e.preventDefault()

        setNewValues({...newValues, inputDescription: e.target.value})
        
           
        
    }
    
    function saveChangesOrClose (e) {
        e.preventDefault()
        if(newValues.inputTitle === ''){
            setNewValues({...newValues, inputTitle : pickTask.inputTitle})
        }
        if(newValues.inputDescription === ''){
            setNewValues({...newValues, inputDescription : pickTask.inputDescription})
        }
        editTask({...newValues, id: pickTask.id})
        
    }

    return (
        <div className='modal'>
            <h3>Edit Task</h3>
            <li>
                <input
                    onChange={handlerOnChangeEditTitle} 
                    className='tasksList-title' 
                    name="editTitle" 
                    value={newValues.inputTitle? newValues.inputTitle : pickTask.inputTitle}
                />
                <textarea
                    onChange={handlerOnChangeEditDescription} 
                    className='tasksList-description' 
                    name="editDescription" 
                    value={newValues.inputDescription ? newValues.inputDescription : pickTask.inputDescription}
                />
            </li>
                <div>
                    <button onClick={saveChangesOrClose}>Save changes</button>
                    <button onClick={saveChangesOrClose}>Close</button>
                </div>
        </div>
    )
}