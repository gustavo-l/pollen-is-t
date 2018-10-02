import React from 'react'
import { isAuthSelector } from '../main/main.session'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
let Home = ({ isAuth }) => (
    <div>
        <h1>Bem vindo a rota home temporaria</h1>
        <h2>SNK é muito legal</h2>
        <h3>{isAuth ? 'Você está logado!' : 'Você NÃO está logado'}</h3>
    </div>
)
const mapStateToProps = state => ({
    isAuth: isAuthSelector(state)
})
Home = connect(mapStateToProps)(Home)
export default withRouter(Home)
