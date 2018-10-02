import React from 'react'
import './button.styles.scss'
import classNames from 'classnames'

/**
 * ?...props: O resto das propriedades que não interessam E.G: as propriedades do <button></button> JSX
 */

export const Button = ({
    fullwidth,
    facebook,
    inform,
    google,
    large,
    small,
    ...props
}) => (
    <button
        className={classNames(
            'btn',
            fullwidth ? 'fullwidth' : '',
            facebook ? 'facebook' : '',
            google ? 'google' : '',
            inform ? 'inform' : '',
            large ? 'large' : '',
            small ? 'small' : ''
        )}
        {...props}
    >
        {props.value}
        {props.children}
    </button>
)
