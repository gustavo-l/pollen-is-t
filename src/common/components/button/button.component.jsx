import React from 'react'
import './button.styles.scss'
import classNames from 'classnames'

export const Button = ({ fullwidth, facebook, inform, google, ...props }) => {
    return (
        <div>
            <button
                className={classNames(
                    'btn',
                    fullwidth ? 'fullwidth' : '',
                    facebook ? 'facebook' : '',
                    google ? 'google' : '',
                    inform ? 'inform' : ''
                )}
                {...props}
            >
                {props.value}
                {props.children}
            </button>
        </div>
    )
}
