import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { RenderInput } from '../common/util/redux-form/input.forms'
import { withRouter } from 'react-router'
import { Button } from '../common/components/button/button.component'
import { httpClient } from '../common/util/http/common.http'

const validate = values => {
    const errors = {}
    if (!values.name) errors.name = 'Nome'
    if (!values.description) errors.description = 'Desc'
    if (!values.price) errors.price = 'Preco'
}

const createProduct = async (data, dispatch) => {
    try {
        const { name, description, code, pricep, pricem, priceg } = data
        const response = await httpClient.post({
            url: '/product',
            data: {
                name,
                description,
                code,
                prices: [
                    {
                        value: pricep,
                        size: 'p',
                        description: 'p'
                    },
                    {
                        value: priceg,
                        size: 'g',
                        description: 'g'
                    },
                    {
                        value: pricem,
                        size: 'm',
                        description: 'm'
                    }
                ],
                filters: { type: ['57ace6221694e75fd99b06c6'] },
                flowershop: '5bab7d6a6a0e924cfc515a11',
                production_time: 1
            },
            token: localStorage.getItem('token')
        })
        alert(response)
    } catch (err) {
        alert(err)
    }
}

let ProductCreate = ({ submitting, handleSubmit }) => (
    <div>
        <form onSubmit={handleSubmit(createProduct)}>
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
            <Field
                name="pricep"
                label="Preço P"
                type="number"
                component={RenderInput}
            />

            <Field
                name="pricem"
                label="Preço M"
                type="number"
                component={RenderInput}
            />
            <Field
                name="priceg"
                label="Preço G"
                type="number"
                component={RenderInput}
            />
            <Field name="code" label="Código" component={RenderInput} />
            <Button type="submit" small disabled={submitting} fullwidth inform>
                Cadastrar Produto
            </Button>
        </form>
    </div>
)

ProductCreate = reduxForm({
    form: 'productCreate',
    validate
})(ProductCreate)
export default withRouter(ProductCreate)
