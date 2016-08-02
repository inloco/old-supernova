import React, { PropTypes } from "react"

class Sidebar extends React.Component {
  static propTypes = {
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
