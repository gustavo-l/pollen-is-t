import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Row = ({ vertical, justify, children, nogutter }) => (
    <div
        className={classNames(
            'row',
            vertical ? `align-items-${vertical}` : '',
            justify ? `justify-content-${justify}` : '',
            nogutter ? 'no-gutters' : ''
        )}
    >
        {children}
    </div>
)
Row.propTypes = {
    vertical: PropTypes.oneOfType(['start', 'center', 'end']),
    justify: PropTypes.oneOfType([
        'start',
        'center',
        'end',
        'around',
        'between'
    ])
}
export default Row
