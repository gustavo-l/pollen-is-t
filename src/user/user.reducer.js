import { LOAD_USERS_ASYNC } from './user.actions'
const initialState = {
    fetchedUsers: [],
    pending: false
}
export const users = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS_ASYNC.SUCCESS: {
            console.log(action)
            return {
                ...state,
                fetchedUsers: action.payload.data,
                pending: false
            }
        }
        case LOAD_USERS_ASYNC.FAIL: {
            return { ...state, fetchedUsers: [], pending: false }
        }
        case LOAD_USERS_ASYNC.REQUEST: {
            return { ...state, fetchedUsers: [], pending: true }
        }
        default:
            return state
    }
}
