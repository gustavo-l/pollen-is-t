import React from 'react'
import './navbar.styles.scss'

export const Navbar = ({ children, logo }) => (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" draggable={false} />

        {children}
    </nav>
)

export const Navitem = ({ label }) => <div className="navitem">{label}</div>
