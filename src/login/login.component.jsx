import React from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'

import { httpClient } from '../common/util/http/common.http'
import { Button } from '../common/components/button/button.component'
import { Input } from '../common/components/input/input.component'

import './login.styles.scss'

async function getusers(data) {
    try {
        alert(JSON.stringify(data))
        const response = await httpClient.post({ url: '/auth', data })
        console.log(response.data)
    } catch (err) {
        throw new SubmissionError({
            password: 'Usuario ou senha incorretos'
        })
    }
}

const RenderInput = ({ input, label, type, meta }) => (
    <div>
        <Input
            {...input}
            fullwidth
            inform
            type={type}
            placeholder={label.concat('...')}
            error={meta.touched && meta.error ? meta.error : undefined}
        />
    </div>
)
const DemoForm = ({ handleSubmit, submitting, error }) => (
    <div className="panel">
        <form onSubmit={handleSubmit(getusers)}>
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
                <Button type="submit" disabled={submitting} fullwidth inform>
                    Entrar
                </Button>
            </div>
        </form>
    </div>
)

const validate = values => {
    const errors = {}
    if (!values.user) errors.user = 'Digite o usuário'
    if (!values.password) errors.password = 'Digite a senha'
    return errors
}

export default reduxForm({
    form: 'login',
    validate
})(DemoForm)
