import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { RenderInput } from '../common/util/redux-form/input.forms'
import { withRouter } from 'react-router'
import { Button } from '../common/components/button/button.component'
import { httpClient } from '../common/util/http/common.http'
import { connect } from 'react-redux'

import { assign } from 'lodash'

const validate = values => {
    const errors = {}
    if (!values.name) errors.name = 'Nome'
    if (!values.description) errors.description = 'Desc'
    if (!values.price) errors.price = 'Preco'
    if (isNaN(values.price)) errors.price = 'Coloca o numero'
}

const updateProduct = async (data, dispatch) => {
    try {
        const { name, description, code, pricep, pricem, priceg } = data
        console.log(data)
        const response = await httpClient.put({
            url: `/product/${data._id}`,
            data: {
                name,
                description,
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
                flowershop: '5bab7d6a6a0e924cfc515a11'
            },
            token: localStorage.getItem('token')
        })
        alert(response)
    } catch (err) {
        alert(err)
    }
}

let ProductUpdate = ({ submitting, handleSubmit }) => (
    <div>
        <form onSubmit={handleSubmit(updateProduct)}>
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

            <Button type="submit" small disabled={submitting} fullwidth inform>
                Atualizar Produto
            </Button>
        </form>
    </div>
)

const modalSelector = state =>
    typeof state.modal.productUpdate !== 'undefined'
        ? state.modal.productUpdate.props.initial
        : {}

// const sizeSelector = (state, size) =>
//     _.find(modalSelector(state).prices, { size })

ProductUpdate = reduxForm({
    form: 'productUpdate',
    validate
})(ProductUpdate)

ProductUpdate = connect(state => ({
    initialValues: assign(modalSelector(state), {
        pricep: 10,
        priceg: 10,
        pricem: 10
    })
}))(ProductUpdate)

export default withRouter(ProductUpdate)
