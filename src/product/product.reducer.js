// import _ from 'lodash'

import { LOAD_PRODUCT_ASYNC } from './product.actions'
const initialState = {
    fetchedProducts: [],
    pending: false
}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT_ASYNC.SUCCESS: {
            return {
                ...state,
                fetchedProducts: action.payload.data,

                pending: false
            }
        }
        case LOAD_PRODUCT_ASYNC.FAIL: {
            return {
                ...state,
                fetchedProducts: [],
                pending: false
            }
        }
        case LOAD_PRODUCT_ASYNC.REQUEST: {
            return {
                ...state,
                fetchedProducts: [],
                pending: true
            }
        }

        default:
            return state
    }
}
