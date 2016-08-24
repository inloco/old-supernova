import React, { PropTypes } from "react"

class Footer extends React.Component {
  render() {
    return(
      <div className="sn-modal__footer">{this.props.children}</div>
    )
  }
}

export default Footer