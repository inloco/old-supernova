import React from "react"
import PropTypes from "prop-types"

class Table extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <table className="table table-hover table-striped table-bordered table-grey js-table-material js-tablesorter-campaigns tablesorter">
        { children }
      </table>
    )
  }
}

export default Table
