// import _ from 'lodash'

import {
    LOAD_PRODUCT_ASYNC,
    CREATE_PRODUCT_ASYNC,
    UPDATE_PRODUCT_ASYNC,
    DELETE_PRODUCT_ASYNC
} from './product.actions'
const initialState = {
    fetchedProducts: [],
    pending: false
}

export const product = (state = initialState, action) => {
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
        case CREATE_PRODUCT_ASYNC.SUCCESS:
        case UPDATE_PRODUCT_ASYNC.SUCCESS:
        case DELETE_PRODUCT_ASYNC.SUCCESS: {
            return {
                ...state,
                pending: false
            }
        }
        default:
            return state
    }
}

export const productSelector = state => state.product.fetchedProducts
