import React, { PropTypes } from "react"

class Steps extends React.Component {
  static propTyes = {
    children:    PropTypes.node.isRequired,
    defaultStep: PropTypes.number
  }

  static defaultProps = {
    defaultStep: 0
  }

  getStatusByIndex(index) {
    const { defaultStep } = this.props

    if(index < defaultStep) {
      return "done"
    } else if (index === defaultStep) {
      return "active"
    }
  }

  renderSteps() {
    return this.props.children.map((step, index) => {
      return React.cloneElement(step, {
        status: this.getStatusByIndex(index),
        key:    index
      })
    })
  }

  render() {
    return (
      <div className="sn-steps sn-steps__bubble">
        <ul className="sn-steps__bubble-list">
          {this.renderSteps()}
        </ul>
      </div>
    )
  }
}

export default Steps