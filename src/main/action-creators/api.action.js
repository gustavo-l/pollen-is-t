export const createApiRequest = ({
    type,
    context,
    url,
    method,
    data,
    params,
    success,
    pending,
    fail,
    ...rest
}) => ({
    type: `[${context}] ${type}`,
    payload: {
        url,
        method,
        data,
        success,
        pending,
        fail,

        ...rest
    },
    meta: {
        api: true
    }
})
