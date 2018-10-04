import { OPEN_MODAL, CLOSE_MODAL } from './modal.actions'

const initialState = {
    open: false
}

export const modal = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case OPEN_MODAL: {
            return {
                ...state,
                open: true
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                open: false
            }
        }
        default:
            return state
    }
}
