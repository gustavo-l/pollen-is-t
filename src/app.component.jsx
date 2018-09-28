import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, hashHistory } from './main/main.store'
import { ConnectedRouter } from 'connected-react-router'
import Main from './main/main.component'
import '../public/index.scss'

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <ConnectedRouter history={hashHistory}>
                <div>
                    <Main />
                </div>
            </ConnectedRouter>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)
