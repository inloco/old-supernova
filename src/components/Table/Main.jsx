import React, { PropTypes } from "react"

class Table extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <table className="sn-table sn-table--stripped sn-table--bordered sn-table--flat sn-table--only-content">
        { children }
      </table>
    )
  }
}

export default Table