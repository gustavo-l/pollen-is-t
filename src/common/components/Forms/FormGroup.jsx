import React from 'react'

import classNames from 'classnames'
const FormGroup = ({ children, ...rest }) => (
    <div type="text" className="form-group" {...rest}>
        {children}
    </div>
)
export default FormGroup
