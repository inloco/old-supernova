import React, { PropTypes } from 'react'

class Steps extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    activeStep: PropTypes.number
  }

  static defaultProps = {
    activeStep: 0
  }

  getStatusByIndex(index) {
    const { activeStep } = this.props

    if(index < activeStep) {
      return 'done'
    } else if (index === activeStep) {
      return 'active'
    }
  }

  renderSteps() {
    return this.props.children.map((step, index) => {
      return React.cloneElement(step, {
        index,
        status: this.getStatusByIndex(index),
        key: index
      })
    })
  }
}

export default Steps