import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ fluid, children }) => (
    <div className={fluid ? 'container' : 'container-fluid'}>{children}</div>
)
Container.propTypes = {
    fluid: PropTypes.bool
}
export default Container
