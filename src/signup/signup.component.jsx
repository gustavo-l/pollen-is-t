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
                <Button disabled={submitting} facebook fullwidth inform>
                    Entrar com facebook
                </Button>
                <Button disabled={submitting} google fullwidth inform>
                    Entrar com Google
                </Button>
                <div className="separator">
                    <span className="separator-text">OU</span>
                    <hr />
                </div>
                <Field name="firstname" label="Nome" component={RenderInput} />
                <Field
                    name="lastname"
                    label="Sobrenome"
                    component={RenderInput}
                />
                <Field name="email" label="Email" component={RenderInput} />

                <Field
                    name="password"
                    label="Senha"
                    type="password"
                    component={RenderInput}
                />
                <Field
                    name="confirmPassword"
                    label="Confirmar Senha"
                    type="password"
                    component={RenderInput}
                />
                <Field name="user" label="Usuário" component={RenderInput} />

                {/* <Field
                    name="phones"
                    label="Telefones"
                    component={RenderInput}
                    {...phoneMask}
                /> */}
                <Button type="submit" disabled={submitting} fullwidth inform>
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
