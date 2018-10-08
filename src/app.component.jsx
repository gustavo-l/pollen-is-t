import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, hashHistory } from './main/main.store'
import { ConnectedRouter } from 'connected-react-router'
import Main from './main/main.component'

import '../node_modules/bootstrap/dist/js/bootstrap.js'

import './app.styles.scss'

/**
 * *HashRouter: Componente do react-router equivalente à <Router history={hash}></Router>
 * *Provider: Provider da store do redux. Acessível com ex: connect(map, dispatch)(Component)
 * *ConnectedRouter: Coloca informações da rota no redux
 * *Main: Renderização principal da SPA
 */

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
