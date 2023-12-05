import { ACTIONS } from "../actions/actions";

export const initialState = {
    countTask: 0,
    tasks: [],
    pickTask: null,
    loading: true,
    error: false, 
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTIONS.ADD_TASK:

            const counter = state.tasks.length + 1
            
            return {
                ...state,
                countTask: counter,
                tasks : [action.payload, ...state.tasks],
                loading: false
            }
        case ACTIONS.DELETE_TASK:
            
            const counterD = state.tasks.length - 1
            const tasksNoDeleted = state.tasks.filter(item => item.id !== action.payload)
        
            return {
                ...state,
                countTask: counterD,
                tasks : tasksNoDeleted,
                loading: false
            }
        case ACTIONS.GET_TASK:
            
            const pickTask = state.tasks.find(task => task.id === action.payload)
            
            return {
                ...state,
                pickTask: pickTask,
                loading: false
            }
        case ACTIONS.EDIT_TASK:
            const findTask = state.tasks.findIndex(item => item.id == action.payload.id)
            const finalArray = [...state.tasks]
            finalArray[findTask]= action.payload
            return {
                ...state,
                tasks : [...finalArray],
                loading: false, 
                pickTask: null
            }         
        default:
            return state
    }
}