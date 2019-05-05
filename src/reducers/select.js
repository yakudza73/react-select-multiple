import { ADD_OPTION } from '../actions/SelectActions'

const initialState = {
    list: [
        {label:"bmw", value: 0, id: 1}, 
        {label:"bmw x2", value: 1, id: 2}, 
        {label:"bmw x3", value: 2, id: 3}, 
        {label:"opel", value: 3, id: 4}
    ]
}

export function selectReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_OPTION:
            return { 
                ...state, 
                list: [...state.list, action.payload] 
            }

        default:
            return state
    }
}
