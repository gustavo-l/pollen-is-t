import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createHashHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer as formReducer } from 'redux-form'

import { users } from '../user/user.reducer'
import { modal } from '../common/components/modal/modal.reducer'
import { product } from '../product/product.reducer'

import { session } from './main.session'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const hashHistory = createHashHistory()

/**
 * *middleware: middlewares da aplicação, thunk logger e router
 */
const middleware = composeWithDevTools(
    applyMiddleware(thunk, logger, routerMiddleware(hashHistory))
)

/**
 * *form: formReducer
 * *Reducer responsável pelos formulários da aplicação
 */
const rootReducer = combineReducers({
    form: formReducer,
    users,
    modal,
    session,
    product
})

export const store = createStore(
    connectRouter(hashHistory)(rootReducer),
    middleware
)
