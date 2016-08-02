import React, { PropTypes } from "react"

class Steps extends React.Component {
  static propTyes = {
    children:   PropTypes.node.isRequired,
    raised:     PropTypes.bool,
    activeStep: PropTypes.bool
  }

  static defaultProps = {
    raised: false,
    activeStep: 0
  }

  getStatusByIndex(index) {
    const { activeStep } = this.props

    if(index < activeStep) {
      return "done"
    } else if (index === activeStep) {
      return "active"
    }
  }

  renderSteps() {
    return this.props.children.map((step, index) => {
      return React.cloneElement(step, {
        index,
        status: this.getStatusByIndex(index),
        key:    index
      })
    })
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