import React from 'react'
import classNames from 'classnames'
const Input = ({ large, small, valid, invalid, className, ...rest }) => (
    <input
        type="text"
        className={classNames(
            className,
            'form-control',
            large ? 'form-control-lg' : '',
            small ? 'form-control-sm' : '',
            valid ? 'is-valid' : '',
            invalid ? 'is-invalid' : ''
        )}
        {...rest}
    />
)
export default Input
