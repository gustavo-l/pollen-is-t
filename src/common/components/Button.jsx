import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ variant, children, ...rest }) => (
    <button
        type="button"
        className={classNames('btn', variant ? `btn-${variant}` : '')}
        {...rest}
    >
        {children}
    </button>
)

Button.propTypes = {
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link'
    ])
}
export default Button
