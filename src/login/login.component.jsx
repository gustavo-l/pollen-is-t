import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { RenderInput } from '../common/util/redux-form/input.forms'

import { withRouter } from 'react-router'

import { Button } from '../common/components/button/button.component'
import { CheckBox } from '../common/components/togglable/checkbox.component'

import { login } from './login.async.js'
import { validate } from './login.validation.js'

import './login.styles.scss'

const LoginForm = ({ handleSubmit, submitting, error }) => (
    <div className="panel">
        <form onSubmit={handleSubmit(login)}>
            <div>
                {error && <strong>{error}</strong>}
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

                <Field name="user" label="Usuario" component={RenderInput} />
                <Field
                    name="password"
                    label="Senha"
                    type="password"
                    component={RenderInput}
                />
                <div className="rememberme-container">
                    <CheckBox
                        className="rememberme-item"
                        label="Lembrar de mim?"
                    />
                    <a href="#">Precisa de ajuda?</a>
                </div>
                <Button type="submit" disabled={submitting} fullwidth inform>
                    Entrar
                </Button>
            </div>
        </form>
    </div>
)

export default withRouter(
    reduxForm({
        form: 'login',
        validate
    })(LoginForm)
)
