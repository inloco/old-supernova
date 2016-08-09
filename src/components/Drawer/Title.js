import React, { PropTypes } from "react"

class Title extends React.Component {
  render() {
    return (
      <div className="sn-layout-title">
        {this.props.children}
      </div>
    )
  }
}

export default Title