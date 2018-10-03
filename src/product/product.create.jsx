import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { RenderInput } from '../common/util/redux-form/input.forms'
import { withRouter } from 'react-router'

const validate = values => {
    const errors = {}
    if (!values.name) errors.name = 'Nome'
    if (!values.description) errors.description = 'Desc'
    if (!values.price) errors.price = 'Preco'
}

let ProductCreate = props => {
    return (
        <div>
            <Field
                name="name"
                label="Nome do produto"
                component={RenderInput}
            />
            <Field
                name="description"
                label="Descrição do produto"
                component={RenderInput}
            />
            <Field name="price" label="Price" component={RenderInput} />
        </div>
    )
}

ProductCreate = reduxForm({
    form: 'productCreate',
    validate
})
export default withRouter(ProductCreate)
