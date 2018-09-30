import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { Button } from '../common/components/button/button.component'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

let UserForm = ({ handleSubmit, submitting }) => (
    <div className="panel">
        <form>
            <div>
                <h1>Users</h1>
            </div>
        </form>
    </div>
)

export default withRouter(UserForm)
