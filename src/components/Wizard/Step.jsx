import React, { PropTypes } from "react"

class Step extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className="sn-wizard-step">
        {this.props.children}
      </div>
    )
  }
}

export default Step
