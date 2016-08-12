import React, { PropTypes } from "react"

class Title extends React.Component {
  render() {
    return (
      <div className="sn-layout__drawer-title">
        {this.props.children}
      </div>
    )
  }
}

export default Title