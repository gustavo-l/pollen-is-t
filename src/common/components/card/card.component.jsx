import React from 'react'
import './card.styles.scss'

export const Card = ({
    title,
    heading,
    description,
    avatar,
    head,
    body,
    children
}) => (
    <div className="card">
        <div className="container">
            {heading && (
                <h4>
                    <b>{heading}</b>
                </h4>
            )}
            {head}
        </div>
        {avatar && <img src={avatar} alt="Avatar" style={{ width: '100%' }} />}
        <div className="container">
            {title && (
                <h4>
                    <b>{title}</b>
                </h4>
            )}
            {description && <p>{description}</p>}
            {body}
            {children}
        </div>
    </div>
)
