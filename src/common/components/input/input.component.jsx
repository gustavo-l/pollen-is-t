import React from 'react'
import './input.styles.scss'
import classNames from 'classnames'

export const Input = ({ fullwidth, inform, error, large, ...props }) => (
    <div>
        <input
            className={classNames(
                'inpt',
                fullwidth ? 'fullwidth' : '',
                error ? 'error' : '',
                inform ? 'inform' : '',
                large ? 'large' : ''
            )}
            {...props}
        >
            {props.children}
        </input>
        {error && <span className="inpt-error-text">{error}</span>}
    </div>
)
