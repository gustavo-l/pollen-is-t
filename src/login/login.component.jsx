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
            <h2>Entre para continuar</h2>
            <Field
                type="text"
                name="user"
                small
                label="Endereço de e-mail"
                component={RenderInput}
            />
            <Field
                type="password"
                name="password"
                small
                label="Palavra-passe"
                component={RenderInput}
            />
            <Button type="submit" small disabled={submitting} fullwidth inform>
                Entrar
            </Button>
            <div className="rememberme-container">
                <CheckBox className="flexitem-1" label="Lembrar" />
                <a href="#">Precisa de ajuda?</a>
            </div>
            <div className="separator">
                <span className="separator-text">ou continue com</span>
                <hr />
            </div>

            <div className="register-options-container">
                <div className="item-margin flexitem-1">
                    {error && <strong>{error}</strong>}
                    <Button disabled={submitting} facebook fullwidth inform>
                        Facebook
                    </Button>
                </div>
                <div className="item-margin flexitem-1">
                    <Button disabled={submitting} google fullwidth inform>
                        Google
                    </Button>
                </div>
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
