import { httpClient } from '../common/util/http/common.http'
import {
    createAction,
    createAsyncTypes
} from '../common/util/redux/redux.helper'

export const LOAD_PRODUCT_ASYNC = createAsyncTypes('@@product/LOAD_PRODUCTS')
const productsSuccess = data =>
    createAction(LOAD_PRODUCT_ASYNC.SUCCESS, {
        data
    }) /** ({type: '@@users/CREATE_USER_REQUEST}, payload: {data}) */
const productRequest = () => createAction(LOAD_PRODUCT_ASYNC.REQUEST)
const productFail = () => createAction(LOAD_PRODUCT_ASYNC.FAIL)

export const loadProducts = ({ size, page }) => dispatch =>
    new Promise(async resolve => {
        try {
            dispatch(productRequest())
            const response = await httpClient.get({
                url: `/products/${size}/${page}`,
                token: localStorage.getItem('token')
            })
            dispatch(productsSuccess(response.data))
            resolve(true)
        } catch (err) {
            resolve(false)
            dispatch(productFail())
        }
    })
