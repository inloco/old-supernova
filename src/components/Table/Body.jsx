import React from "react"
import PropTypes from "prop-types"

class Body extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <tbody>{ children }</tbody>
    )
  }
}

export default Body
