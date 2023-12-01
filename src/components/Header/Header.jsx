import './header.css'
export function Header ({countTask}) {
    return (
        <div className='header'>
            <h1>My <span>Do Things</span> List</h1>
            <button>
                { 
                    countTask === 1
                    ?
                    `${countTask} TASK`
                    :
                    `${countTask} TASKS`
                }
            </button>
            
        </div>
    )
}