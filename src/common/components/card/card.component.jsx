import React from 'react'
import './card.styles.scss'

export const Card = ({ title, heading, description, avatar, children }) => (
    <div className="card">
        <div className="container">
            <h4>
                <b>{heading}</b>
            </h4>
        </div>
        {avatar && <img src={avatar} alt="Avatar" style={{ width: '100%' }} />}
        <div className="container">
            <h4>
                <b>{title}</b>
            </h4>
            <p>{description}</p>
            {children}
        </div>
    </div>
)
