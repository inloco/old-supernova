import React from 'react'
import PropTypes from 'prop-types'

class Row extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    head: PropTypes.bool,
    className: PropTypes.string
  }

  render() {
    const headerClassName = this.props.head ? `sn-table__header` : ''
    const customClass = this.props.className || ''

    return (
      <tr className={`${headerClassName} ${customClass}`}>
        { this.props.children }
      </tr>
    )
  }
}

export default Row
