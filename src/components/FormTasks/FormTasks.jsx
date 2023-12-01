/* eslint-disable react/prop-types */
import './formtasks.css'

export function FormTasks ({addTask}) {

    function handlerAddTask (e) {
        e.preventDefault()
        let inputTitle = ''
        let inputDescription = ''
        const id = Date.now()

        if(e.target.title.value=== '' && e.target.description.value === ''){
            alert('You need to write either the title or the description of the task')
            return
        }
        if(e.target.title.value === ''){
            inputTitle = 'Missing Title'
        } else {
            inputTitle = e.target.title.value
        }
        if(e.target.description.value === ''){
            inputDescription = 'Missing Description'
        } else {
            inputDescription = e.target.description.value
        }

        addTask({inputTitle, inputDescription, id})
        e.target.reset()
    }

    return (
        <div className="formTasks">
        <h2>New task</h2>
        <form type="submit" onSubmit={handlerAddTask}>
            <label>Title</label>
            <input type="text"
            placeholder="Change styles"
            name="title"></input>
            <label>Description</label>
            <textarea placeholder="To do that i have a lot of things to do, like..." name="description"></textarea>
            <button type="submit">Add</button>
        </form>
        </div>
    )
}