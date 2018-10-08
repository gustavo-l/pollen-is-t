import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createHashHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer as formReducer } from 'redux-form'

import { session } from './main.session.reducer'
import logger from 'redux-logger'
import { api } from './middlewares/api'

export const hashHistory = createHashHistory()

/**
 * *middleware: middlewares da aplicação, logger e router
 */
const middleware = composeWithDevTools(
    applyMiddleware(routerMiddleware(hashHistory), api, logger)
)

/**
 * *form: formReducer
 * *Reducer responsável pelos formulários da aplicação
 */
const rootReducer = combineReducers({
    form: formReducer,
    session
})

export const store = createStore(
    connectRouter(hashHistory)(rootReducer),
    middleware
)
