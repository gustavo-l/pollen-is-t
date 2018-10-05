import { reduxForm } from 'redux-form'
import { Button } from '../common/components/button/button.component'
import { Input } from '../common/components/input/input.component'
import { connect } from 'react-redux'
import { show } from 'redux-modal'

import React from 'react'

let ProductSearchForm = ({ pending, handleOpen }) => (
    <div>
        <div className="headline-user">
            <Button
                className="action-button"
                fullwidth
                disabled={pending}
                onClick={handleOpen('productCreate')}
            >
                Incluir
            </Button>
        </div>
        <div className="search-user">
            <Input fullwidth placeholder="Pesquisar" />
        </div>
    </div>
)
ProductSearchForm = reduxForm({ form: 'productCreate' })(ProductSearchForm)
export default connect(
    null,
    dispatch => ({ handleOpen: name => () => dispatch(show(name)) })
)(ProductSearchForm)
