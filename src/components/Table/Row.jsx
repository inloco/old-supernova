import React, { PropTypes } from "react"

class Row extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const headerClassName = this.props.header ? `sn-table__header` : ''

    return (
      <tr className={headerClassName}>
        { this.props.children }
      </tr>
    )
  }
}

export default Row