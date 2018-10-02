import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { Button } from '../common/components/button/button.component'
import { RenderInput } from '../common/util/redux-form/input.forms'

import { withRouter } from 'react-router'
import { validate } from './signup.validation'
import { signup } from './signup.async'

import './signup.styles.scss'

const LoginForm = ({ handleSubmit, submitting }) => (
    <div className="panel">
        <form onSubmit={handleSubmit(signup)}>
            <div>
                <div className="signup-alt">
                    Cadastre-se com <a href="#/user">Facebook</a> ou{' '}
                    <a href="" target="_blank">
                        Google
                    </a>
                </div>
                <div className="separator">
                    <span className="separator-text">ou</span>
                    <hr />
                </div>
                <Field
                    name="email"
                    label="Endereço de email"
                    component={RenderInput}
                />
                <Field
                    name="firstname"
                    label="Primeiro nome"
                    component={RenderInput}
                />
                <Field
                    name="lastname"
                    label="Último nome"
                    component={RenderInput}
                />
                <Field name="user" label="Usuário" component={RenderInput} />
                <Field
                    name="password"
                    label="Criar uma senha"
                    type="password"
                    component={RenderInput}
                />
                <Button
                    type="submit"
                    small
                    disabled={submitting}
                    fullwidth
                    inform
                >
                    Cadastrar
                </Button>
            </div>
        </form>
    </div>
)

export default withRouter(
    reduxForm({
        form: 'signup',
        validate
    })(LoginForm)
)
