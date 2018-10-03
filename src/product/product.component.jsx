import React from 'react'
import { withRouter } from 'react-router'

import { Card } from '../common/components/card/card.component'
import { connect } from 'react-redux'
import {
    loadProducts,
    updateProduct,
    createProduct,
    deleteProduct
} from './product.actions'
import { productSelector } from './product.reducer'

let Product = props => (
    <div>
        <h2>Seus produtos</h2>
        <Card
            heading="hello"
            description="world"
            title="title"
            avatar="https://via.placeholder.com/300x300"
        >
            <strong>Hello World</strong>
        </Card>
        <Card
            heading="hello"
            description="world"
            title="title"
            avatar="https://via.placeholder.com/300x300"
        >
            <strong>Hello World</strong>
        </Card>
    </div>
)

const mapStateToProps = state => ({
    products: productSelector(state)
})

const mapDispatchToProps = dispatch => ({
    loadProducts: ({ size, page }) => loadProducts({ size, page })(dispatch),
    createProduct: ({ ...rest }) => createProduct({ ...rest })(dispatch),
    updateProduct: _id => updateProduct(dispatch),
    deleteProduct: _id => deleteProduct(_id)(dispatch)
})
Product = connect(
    mapStateToProps,
    mapDispatchToProps
)(Product)
export default withRouter(Product)
