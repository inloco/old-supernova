import React, { PropTypes } from "react"

class Table extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children, className } = this.props

    return (
      <table className={className}>
        { children }
      </table>
    )
  }
}

export default Table