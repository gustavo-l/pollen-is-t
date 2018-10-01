import React from 'react'

import { Link } from 'react-router-dom'

import './navbar.styles.scss'

/**
 * ?children: Children são os componentes entre as tags
 * ?ex: <element>
 * ?        <child1></child1>
 * ?        <child2></child2>
 * ?        <child3></child3>
 * ?    </element>
 * ?Então a propriedade {children} vai conter os componentes child1, 2. ..
 *
 */

export const Navbar = ({ children, logo, menu }) => (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" draggable={false} />
        {children}
        <img src={menu} alt="Menu" className="menu" draggable={false} />
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
