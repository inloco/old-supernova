import React, { PropTypes } from "react"

class Subheader extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className="sn-layout__subheader">
        {this.props.children}
      </div>
    )
  }
}

export default Subheader
