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
import ProductCreate from './product.create'

import './product.styles.scss'

class Product extends React.PureComponent {
    async componentDidMount() {
        this.props.loadProducts({ size: 10, page: 0 })
    }
    render() {
        return (
            <div>
                <h2>Seus produtos</h2>
                {console.log(this.props.products)}
                <div className="product-container">
                    {this.props.products.map((data, index) => (
                        <div key={index} className="product-item">
                            <Card
                                heading={data.code}
                                description={data.description}
                                title={data.name}
                                avatar="https://via.placeholder.com/300x300"
                            >
                                {data.prices.map((price, index) => (
                                    <div key={index}>
                                        <b>{`R$ ${price.value}, Tamano ${
                                            price.size
                                        }\n`}</b>
                                    </div>
                                ))}
                            </Card>
                        </div>
                    ))}
                </div>
                <div className="panel">
                    <ProductCreate />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: productSelector(state)
})

const mapDispatchToProps = dispatch => ({
    loadProducts: ({ size, page }) => loadProducts({ size, page })(dispatch),
    createProduct: ({ ...rest }) => createProduct({ ...rest })(dispatch),
    updateProduct: _id => updateProduct(dispatch),
    deleteProduct: _id => deleteProduct(_id)(dispatch)
})
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Product)
)
