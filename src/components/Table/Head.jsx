import React, { PropTypes } from "react"

class Head extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }
  
  render() {
    const { children } = this.props
    
    return (
      <thead>
        <tr>{ children }</tr>
      </thead>
    )
  }
}

export default Head