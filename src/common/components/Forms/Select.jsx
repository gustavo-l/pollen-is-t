import React from 'react'
import classNames from 'classnames'
const Select = ({ large, small, children, ...rest }) => (
    <select
        className={classNames(
            'form-control',
            large ? 'form-control-lg' : '',
            small ? 'form-control-sm' : ''
        )}
        {...rest}
    >
        {children}
    </select>
)
export default Select
