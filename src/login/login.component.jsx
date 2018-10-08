import React from 'react'

import { withRouter } from 'react-router'

import Button from '../common/components/Button'
import { connect } from 'react-redux'

/**
 *
 * ?Formulario redux form
 * @param {...} *parametros injetados do redux form ex: handleSubmit*
 * *
 */

let LoginForm = ({ login, ...rest }) => (
    <div className="panel">
        <form>
            <Button
                variant="warning"
                onClick={login({ user: 'logitz', password: '123' })}
            >
                Hello
            </Button>
        </form>
    </div>
)

/**
 * ?reduxForm: HOC que injeta propriedades e o estado do form contido no reducer reduxform
 * ??form: Nome do formulário salvo na store
 * ??validate: Função de validação
 * @see {@link https://redux-form.com/7.4.2/docs/api/reduxform.md/}
 */
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    login: ({ user, password }) => () =>
        dispatch({
            type: 'LOGIN',
            payload: {
                url: '/auth',
                method: 'post',
                data: {
                    user,
                    password
                },
                success: response => console.log(response),
                pending: () => console.log('pending'),
                fail: response => console.log('fail')
            },
            meta: {
                api: true
            }
        })
})

LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default withRouter(LoginForm)
