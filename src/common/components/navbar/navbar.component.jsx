import React from 'react'

import { Link } from 'react-router-dom'

import './navbar.styles.scss'

export const Navbar = ({ children, logo }) => (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" draggable={false} />
        {children}
    </nav>
)

export const Navitem = ({ children, label }) => (
    <div className="navitem">
        {label}
        {children && <div className="navitem-menu">{children}</div>}
    </div>
)

export const NavitemDropdown = ({ label, to }) => (
    <Link to={to} className="navitem-menuitem">
        {label}
    </Link>
)
