import React from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import {
    loadProducts,
    updateProduct,
    createProduct,
    deleteProduct
} from './product.actions'
import { productSelector } from './product.reducer'
import ProductCreate from './product.create'
import ProductUpdate from './product.update'
import Modal from '../common/components/modal/modal.component'
import './product.styles.scss'
import ProductSearchForm from './product.searchform'
import Loadable from 'react-loadable'
import { Loading } from '../main/main.loading'
import { show } from 'redux-modal'

import _ from 'lodash'

const ProductView = Loadable({
    loader: () =>
        import('../common/templates/productview/productview.component'),
    loading: Loading
})
class Product extends React.PureComponent {
    async componentDidMount() {
        this.props.loadProducts({ size: 10, page: 0 })
    }
    render() {
        const { handleOpen, products } = this.props
        return (
            <div>
                <ProductSearchForm pending={this.props.pending} />
                <div className="product-container">
                    {products.map((data, index) => (
                        <ProductView
                            data={data}
                            key={index}
                            onUpdate={_id =>
                                handleOpen('productUpdate', {
                                    initial: _.filter(
                                        products,
                                        o => o._id === _id
                                    )[0]
                                })
                            }
                        />
                    ))}
                </div>
                <Modal name="productCreate">
                    <ProductCreate />
                </Modal>
                <Modal name="productUpdate">
                    <ProductUpdate />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: productSelector(state),
    pending: state.product.pending
})

const mapDispatchToProps = dispatch => ({
    loadProducts: ({ size, page }) => loadProducts({ size, page })(dispatch),
    createProduct: ({ ...rest }) => createProduct({ ...rest })(dispatch),
    updateProduct: _id => updateProduct(dispatch),
    deleteProduct: _id => deleteProduct(_id)(dispatch),

    handleOpen: (name, props) => dispatch(show(name, props))
})
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Product)
)
