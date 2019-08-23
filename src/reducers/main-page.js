import { MODAL_TOGGLE } from '../actions/mainAction'
import { MODAL_CLOSE } from '../actions/mainAction'

const initialState = {
    registerModalState: false,
    authorize: false,
    hostname: 'http://127.0.0.1:7777'
}

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case MODAL_TOGGLE:
            return { 
                ...state, 
                registerModalState: action.payload
            }
        case MODAL_CLOSE:
                return { 
                    ...state, 
                    registerModalState: action.payload
                }
        default:
            return state
    }
}
