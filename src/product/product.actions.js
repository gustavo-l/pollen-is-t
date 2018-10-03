import { httpClient } from '../common/util/http/common.http'
import {
    createAction,
    createAsyncTypes
} from '../common/util/redux/redux.helper'

export const LOAD_PRODUCT_ASYNC = createAsyncTypes('@@product/LOAD_PRODUCTS')
export const CREATE_PRODUCT_ASYNC = createAsyncTypes(
    '@@product/CREATE_PRODUCTS'
)
export const DELETE_PRODUCT_ASYNC = createAsyncTypes(
    '@@product/DELETE_PRODUCTS'
)
export const UPDATE_PRODUCT_ASYNC = createAsyncTypes(
    '@@product/UPDATE_PRODUCTS'
)

const loadProductsSuccess = data =>
    createAction(LOAD_PRODUCT_ASYNC.SUCCESS, {
        data
    })
const loadProductRequest = () => createAction(LOAD_PRODUCT_ASYNC.REQUEST)
const loadProductFail = () => createAction(LOAD_PRODUCT_ASYNC.FAIL)

const createProductsSuccess = data =>
    createAction(CREATE_PRODUCT_ASYNC.SUCCESS, {
        data
    })
const createProductRequest = () => createAction(CREATE_PRODUCT_ASYNC.REQUEST)
const createProductFail = () => createAction(CREATE_PRODUCT_ASYNC.FAIL)

const deleteProductsSuccess = data =>
    createAction(DELETE_PRODUCT_ASYNC.SUCCESS, {
        data
    })
const deleteProductRequest = () => createAction(DELETE_PRODUCT_ASYNC.REQUEST)
const deleteProductFail = () => createAction(DELETE_PRODUCT_ASYNC.FAIL)

const updateProductsSuccess = data =>
    createAction(UPDATE_PRODUCT_ASYNC.SUCCESS, {
        data
    })
const updateProductRequest = () => createAction(UPDATE_PRODUCT_ASYNC.REQUEST)
const updateProductFail = () => createAction(UPDATE_PRODUCT_ASYNC.FAIL)

export const loadProducts = ({ size, page }) => dispatch =>
    new Promise(async resolve => {
        try {
            dispatch(loadProductRequest())
            const response = await httpClient.get({
                url: `/products/${size}/${page}`,
                token: localStorage.getItem('token')
            })
            dispatch(loadProductsSuccess(response.data))
            resolve(true)
        } catch (err) {
            resolve(false)
            dispatch(loadProductFail())
        }
    })
export const createProduct = ({ ...rest }) => dispatch =>
    new Promise(async resolve => {
        try {
            dispatch(createProductRequest())
            const response = await httpClient.post({
                url: `/products`,
                data: { ...rest },
                token: localStorage.getItem('token')
            })
            dispatch(createProductsSuccess(response.data))
            resolve(true)
        } catch (err) {
            resolve(false)
            dispatch(createProductFail())
        }
    })
export const updateProduct = _id => dispatch =>
    new Promise(async resolve => {
        try {
            dispatch(updateProductRequest())
            const response = await httpClient.get({
                url: `/products/${_id}`,
                token: localStorage.getItem('token')
            })
            dispatch(updateProductsSuccess(response.data))
            resolve(true)
        } catch (err) {
            resolve(false)
            dispatch(updateProductFail())
        }
    })
export const deleteProduct = _id => dispatch =>
    new Promise(async resolve => {
        try {
            dispatch(deleteProductRequest())
            const response = await httpClient.delete({
                url: `/products/${_id}`,
                token: localStorage.getItem('token')
            })
            dispatch(deleteProductsSuccess(response.data))
            resolve(true)
        } catch (err) {
            resolve(false)
            dispatch(deleteProductFail())
        }
    })
