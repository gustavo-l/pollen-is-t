import { httpClient } from '../common/util/http/common.http'

const LOAD_USERS_SUCCESS = '@@users/LOAD_USERS_SUCCESS'
const LOAD_USERS_REQUEST = '@@users/LOAD_USERS_REQUEST'
const LOAD_USERS_FAIL = '@@users/LOAD_USERS_FAIL'

const loadUsersSuccess = data => ({
    type: LOAD_USERS_SUCCESS,
    payload: { data }
})
const loadUserRequest = () => ({ type: LOAD_USERS_REQUEST })
const loadUserFail = () => ({ type: LOAD_USERS_FAIL })

export const loadUsers = ({ size, page }) => dispatch =>
    new Promise(async resolve => {
        try {
            dispatch(loadUserRequest())
            const response = await httpClient.get({
                url: `/user/${size}/${page}`,
                token: localStorage.getItem('token')
            })
            dispatch(loadUsersSuccess(response.data))
            resolve(true)
        } catch (err) {
            resolve(false)
            dispatch(loadUserFail)
        }
    })

export const users = (
    state = {
        fetchedUsers: [],
        pending: false
    },
    action
) => {
    switch (action.type) {
        case LOAD_USERS_SUCCESS: {
            return {
                ...state,
                fetchedUsers: action.payload.data,
                pending: false
            }
        }
        case LOAD_USERS_FAIL: {
            return { ...state, fetchedUsers: [], pending: false }
        }
        case LOAD_USERS_REQUEST: {
            return { ...state, fetchedUsers: [], pending: true }
        }
        default:
            return state
    }
}
