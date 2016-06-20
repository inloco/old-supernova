import React, { PropTypes } from "react"

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