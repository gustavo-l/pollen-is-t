import React from 'react'
import './checkbox.styles.scss'
export const CheckBox = ({ label, ...props }) => (
    <label className="container">
        <span className="checktext">{label}</span>
        <input type="checkbox" className="checkbox" {...props} />
        <span className="checkmark" />
    </label>
)
