import React, { PropTypes } from 'react'

class Row extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    head: PropTypes.bool
  }

  render() {
    const headerClassName = this.props.head ? `sn-table__header` : ''

    return (
      <tr className={headerClassName}>
        { this.props.children }
      </tr>
    )
  }
}

export default Row