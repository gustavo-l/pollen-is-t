import React from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { withRouter } from 'react-router'
import { RenderInput } from '../common/util/redux-form/input.forms'
import { RenderCheckBox } from '../common/util/redux-form/checkbox.forms'
import { Button } from '../common/components/button/button.component'
import { httpClient } from '../common/util/http/common.http'
import { hide } from 'redux-modal'
async function createUser(data, dispatch) {
    try {
        const { user, firstname, lastname, password, email, state } = data
        const response = await httpClient.post({
            url: '/user',
            data: {
                user,
                firstname,
                lastname,
                password,
                email,
                register: null,
                confirmed: state,
                state: !!state
            },
            token: null
        })
        console.log(response.data)
        dispatch(hide('userCreate'))
    } catch (err) {
        console.log(err)
        throw new SubmissionError({
            password: 'Usuario ou senha incorretos'
        })
    }
}

export const validate = values => {
    const errors = {}
    if (!values.user) errors.user = 'Digite o usuário'
    if (!values.firstname) errors.firstname = 'Digite o nome'
    if (!values.lastname) errors.lastname = 'Digite o sobrenome'
    if (!values.password) errors.password = 'Digite a senha'
    if (!values.email) errors.email = 'Digite o email'
    if (!values.confirmPassword) errors.confirmPassword = 'Confirme a senha'
    if (values.confirmPassword !== values.password)
        errors.confirmPassword = 'Senhas não batem'
    if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            values.email
        )
    )
        errors.email = 'Digite um email valido'
    return errors
}

const UserCreate = ({ submitting, handleSubmit }) => (
    <div className="panel">
        <form onSubmit={handleSubmit(createUser)}>
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
            <Field name="state" label="Ativo?" component={RenderCheckBox} />
            <Button type="submit" small disabled={submitting} fullwidth inform>
                Criar Usuario
            </Button>
        </form>
    </div>
)

export default withRouter(
    reduxForm({
        form: 'userCreate',
        validate
    })(UserCreate)
)
