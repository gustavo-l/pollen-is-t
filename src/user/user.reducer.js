// import _ from 'lodash'

import {
    LOAD_USERS_ASYNC,
    CREATE_USERS_ASYNC,
    UPDATE_USERS_ASYNC,
    SET_SELECTED_USER,
    DISABLE_USERS_ASYNC
} from './user.actions'
const initialState = {
    fetchedUsers: [],
    pending: false
}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS_ASYNC.SUCCESS: {
            return {
                ...state,
                fetchedUsers: action.payload.data,

                pending: false
            }
        }
        case LOAD_USERS_ASYNC.FAIL: {
            return {
                ...state,
                fetchedUsers: [],
                pending: false
            }
        }
        case LOAD_USERS_ASYNC.REQUEST: {
            return {
                ...state,
                fetchedUsers: [],
                pending: true
            }
        }
        case CREATE_USERS_ASYNC.SUCCESS:
        case CREATE_USERS_ASYNC.FAIL:
        case UPDATE_USERS_ASYNC.SUCCESS:
        case UPDATE_USERS_ASYNC.FAIL:
        case DISABLE_USERS_ASYNC.SUCCESS:
        case DISABLE_USERS_ASYNC.FAIL:
            return { ...state, pending: false }

        case CREATE_USERS_ASYNC.REQUEST:
        case UPDATE_USERS_ASYNC.REQUEST:
        case DISABLE_USERS_ASYNC.REQUEST:
            return { ...state, pending: true }

        default:
            return state
    }
}

/**
 * 
 *   // case SET_SELECTED_USER:
        //     return {
        //         ...state,
        //         selectedUsers: [
        //             ..._.filter(
        //                 state.selectedUsers,
        //                 o => o._id !== action.payload.data
        //             ),
        //             ..._.map(
        //                 _.filter(state.fetchedUsers, {
        //                     _id: action.payload.data
        //                 }),
        //                 o => _.set(o, 'checked', !o.checked)
        //             )
        //         ]
        //     }
 */
