import React, { PropTypes } from "react"

class Header extends React.Component {
  render() {
    return(
      <div className="sn-modal__header">{this.props.children}</div>
    )
  }
}

export default Header