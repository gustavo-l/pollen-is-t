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

let LoginForm = ({ sendGet, ...rest }) => (
    <div className="panel">
        <form>
            <Button variant="warning" onClick={sendGet}>
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
    login: () =>
        dispatch({
            type: 'LOGIN',
            payload: {
                url: '/auth',
                method: 'post',
                success: () => console.log('success'),
                pending: () => console.log('pending'),
                fail: () => console.log('fail')
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
