import React, { PropTypes } from "react"

class Header extends React.Component {
  render() {
    return(
      <div className="modal-header">{this.props.children}</div>
    )
  }
}

export default Header