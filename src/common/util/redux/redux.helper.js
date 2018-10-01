const asyncTypes = {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL'
}

export const createAsyncTypes = typeString =>
    Object.values(asyncTypes).reduce((acc, curr) => {
        console.log(acc)
        acc[curr] = `${typeString}_${curr}`
        return acc
    }, {})

export const createAction = (type, payload = {}) => ({
    type,
    payload: { ...payload }
})

export const createReducer = (initialState, handlers) => (
    state = initialState,
    action
) =>
    handlers.hasOwnProperty(action.type)
        ? handlers[action.type](state, action)
        : state
