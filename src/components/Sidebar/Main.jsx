import React from "react"
import PropTypes from "prop-types"

class Sidebar extends React.Component {
  static propTyes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const{ children } = this.props

    return (
      <div className="side">
        <div className="geral">
          { children }
        </div>
      </div>
    )
  }
}

export default Sidebar
