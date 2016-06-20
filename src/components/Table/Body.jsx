import React, { PropTypes } from "react"

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