import React, { PropTypes } from "react"
import BaseSteps from "./../Main"

class Steps extends BaseSteps {
  static propTypes = {
    ...BaseSteps.propTypes,
    raised: PropTypes.bool
  }

  static defaultProps = {
    ...BaseSteps.defaultProps,
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
        {this.renderSteps()}
      </div>
    )
  }
}

export default Steps