import React from "react"
import PropTypes from "prop-types"

class Row extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <tr>{ children }</tr>
    )
  }
}

export default Row
