export const MODAL_TOGGLE = 'MODAL_TOGGLE'
export const MODAL_CLOSE = 'MODAL_CLOSE'

export function modalToggle() {
    return dispatch => {
        dispatch({
            type: MODAL_TOGGLE,
            payload: true,
        })
    }
}

export function modalClose() {
    console.log('close')
    return dispatch => {
        dispatch({
            type: MODAL_CLOSE,
            payload: false,
        })
    }
}