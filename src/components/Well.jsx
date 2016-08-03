import React, { PropTypes } from "react"

class Well extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return(
      <div className="sn-well">
        {this.props.children}
      </div>
    )
  }
}

export default Well
