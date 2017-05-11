import React from 'react'
import PropTypes from 'prop-types'

class Wizzard extends React.Component {
  static propTypes = {
    children:   PropTypes.node.isRequired,
    activeStep: PropTypes.number,
    onChange:   PropTypes.func
  }

  static defaultProps = {
    activeStep: 0
  }

  constructor(props) {
    super(props)

    this.state = { activeStep: props.activeStep }
  }

  canMoveFoward() {
    return this.state.activeStep < this.props.children.length - 1
  }

  canMoveBackward() {
    return this.state.activeStep > 0
  }

  next() {
    if(this.canMoveFoward()) {
      this.move(1)
    }
  }

  previous() {
    if(this.canMoveBackward()) {
      this.move(-1)
    }
  }

  move(direction) {
    const newStep = this.state.activeStep + direction

    this.setState({ activeStep: newStep })
    this.handleOnChange(newStep)
  }

  handleOnChange(newStep) {
    const { onChange } = this.props

    if(onChange) {
      onChange(newStep)
    }
  }

  render() {
    const { activeStep } = this.state

    return (
      <div>
        {this.props.children[activeStep]}
      </div>
    )
  }
}

export default Wizzard
