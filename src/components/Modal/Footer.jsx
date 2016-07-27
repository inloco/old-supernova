import React, { PropTypes } from "react"

class Footer extends React.Component {
  render() {
    return(
      <div className="modal-footer">{this.props.children}</div>
    )
  }
}

export default Footer