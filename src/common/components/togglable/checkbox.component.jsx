import React from 'react'
import './checkbox.styles.scss'
export const CheckBox = ({ label }) => (
    <label className="container">
        <span className="checktext">{label}</span>
        <input type="checkbox" className="checkbox" />
        <span className="checkmark" />
    </label>
)
