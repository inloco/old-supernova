import React, { PropTypes } from "react"

class Body extends React.Component {
  render() {
    return(
      <div className="modal-body">{this.props.children}</div>
    )
  }
}

export default Body