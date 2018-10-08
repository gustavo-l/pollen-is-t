import React from 'react'

import { withRouter } from 'react-router'

import Button from '../common/components/Button'
import { connect } from 'react-redux'
import { redirect, setToken } from '../main/main.session.reducer'
import FormGroup from '../common/components/Forms/FormGroup'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { RenderInput } from '../common/util/redux-form/RenderInput'
/**
 *
 * ?Formulario redux form
 * @param {...} *parametros injetados do redux form ex: handleSubmit*
 * *
 */

const validate = values => {
    const error = {}
    const { user, password } = values
    if (!user) error.user = 'Digite o usuario'
    if (!password) error.password = 'Digite a senha'

    return error
}

let LoginForm = ({ handleSubmit, login, ...rest }) => (
    <form onSubmit={handleSubmit(login)}>
        <FormGroup>
            <Field name="user" placeholder="Usuário" component={RenderInput} />
            <Field
                name="password"
                type="password"
                placeholder="Senha"
                component={RenderInput}
            />
            <Button type="submit" variant="warning">
                Entrar
            </Button>
        </FormGroup>
    </form>
)

/**
 * ?reduxForm: HOC que injeta propriedades e o estado do form contido no reducer reduxform
 * ??form: Nome do formulário salvo na store
 * ??validate: Função de validação
 * @see {@link https://redux-form.com/7.4.2/docs/api/reduxform.md/}
 */

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    login: ({ user, password }) =>
        dispatch({
            type: 'LOGIN',
            payload: {
                url: '/auth',
                method: 'post',
                data: {
                    user,
                    password
                },
                success: response => {
                    setToken(response.data.token)
                    redirect('/')
                },
                pending: () => console.log('pending'),
                fail: response => {
                    throw new SubmissionError({
                        user: ' ',
                        password: 'Usuario ou senha incorretos'
                    })
                }
            },
            meta: {
                api: true
            }
        })
})

LoginForm = reduxForm({ form: 'loginForm', validate })(LoginForm)

LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default withRouter(LoginForm)
