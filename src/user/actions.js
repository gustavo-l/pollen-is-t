const LOAD_USERS = '@@users/LOAD_USERS'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return { users: action.payload.users }

        default:
            return state
    }
}

export const loadUsers = data => ({ type: LOAD_USERS, payload: { data } })
