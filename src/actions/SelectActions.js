export const ADD_OPTION = 'ADD_OPTION'

export function addOption(option) {
    return dispatch => {
        dispatch({
            type: ADD_OPTION,
            payload: option,
        })
    }
}