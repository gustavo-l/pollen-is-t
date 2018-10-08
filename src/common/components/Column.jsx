import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

const Column = ({ xl, lg, md, sm, xs, alignSelf }) => (
    <div
        className={classNames(
            xl ? `col-xl-${xl}` : '',
            lg ? `col-lg-${lg}` : '',
            md ? `col-md-${md}` : '',
            sm ? `col-sm-${sm}` : '',
            xs ? `col-xs-${xs}` : '',

            alignSelf ? `align-self-${alignSelf}` : ''
        )}
    />
)
Column.propTypes = {
    alignSelf: PropTypes.oneOf(['start', 'center', 'end'])
}
export default Column
