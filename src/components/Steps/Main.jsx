import React, { PropTypes } from "react"

class Steps extends React.Component {
  static propTyes = {
    children: PropTypes.node.isRequired,
    raised:   PropTypes.bool
  }

  static defaultProps = {
    raised: false
  }

  getRaisedClassName() {
    return this.props.raised ? "sn-steps--raised" : ""
  }

  getClassName() {
    return `sn-steps ${this.getRaisedClassName()}`
  }

  render() {
    return (
      <div className={this.getClassName()}>
        {this.props.children}
      </div>
    )
  }
}

export default Steps