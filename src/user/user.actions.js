import { httpClient } from '../common/util/http/common.http'
import {
    createAction,
    createReducer,
    createAsyncTypes
} from '../common/util/redux/redux.helper'

export const LOAD_USERS_ASYNC = createAsyncTypes('@@users/LOAD_USERS')
const CREATE_USERS_ASYNC = createAsyncTypes('@@/user/CREATE_USER')
const UPDATE_USERS_ASYNC = createAsyncTypes('@@/user/UPDATE_USERS')
const DELETE_USERS_ASYNC = createAsyncTypes('@@/user/DELETE_USERS')

const loadUsersSuccess = data =>
    createAction(LOAD_USERS_ASYNC.SUCCESS, { data })
const loadUserRequest = () => createAction(LOAD_USERS_ASYNC.REQUEST)
const loadUserFail = () => createAction(LOAD_USERS_ASYNC.FAIL)

const createUserSuccess = data =>
    createAction(CREATE_USERS_ASYNC.SUCCESS, { data })
const createUserRequest = () => createAction(CREATE_USERS_ASYNC.REQUEST)
const createUserFail = () => createAction(CREATE_USERS_ASYNC.FAIL)

const updateUserSuccess = data =>
    createAction(UPDATE_USERS_ASYNC.SUCCESS, { data })
const updateUserRequest = () => createAction(UPDATE_USERS_ASYNC.REQUEST)
const updateUserFail = () => createAction(UPDATE_USERS_ASYNC.FAIL)

export const loadUsers = ({ size, page }) => dispatch =>
    new Promise(async resolve => {
        try {
            dispatch(loadUserRequest())
            const response = await httpClient.get({
                url: `/user/${size}/${page}`,
                token: localStorage.getItem('token')
            })
            console.log(response.data)
            dispatch(loadUsersSuccess(response.data))
            resolve(true)
        } catch (err) {
            resolve(false)
            dispatch(loadUserFail())
        }
    })

export const createUser = ({ ...rest }) => dispatch =>
    new Promise(async resolve => {
        try {
            dispatch(createUserRequest())
            const response = await httpClient.post({
                url: `/user`,
                data: { ...rest },
                token: localStorage.getItem('token')
            })
            dispatch(createUserSuccess(response.data))
            resolve(true)
        } catch (err) {
            resolve(false)
            dispatch(createUserFail())
        }
    })
export const updateUser = ({ _id, ...rest }) => dispatch =>
    new Promise(async resolve => {
        try {
            dispatch(updateUserRequest())
            const response = await httpClient.put({
                url: `/user`,
                data: { ...rest },
                token: localStorage.getItem('token')
            })
            dispatch(updateUserSuccess(response.data))
            resolve(true)
        } catch (err) {
            resolve(false)
            dispatch(updateUserFail())
        }
    })
