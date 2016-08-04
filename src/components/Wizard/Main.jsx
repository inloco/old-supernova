import React, { PropTypes } from "react"

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
      this.handleOnChange()
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
  }

  previous() {
    if(this.canMoveBackward()) {
      this.handleOnChange()
      this.setState({ activeStep: this.state.activeStep - 1 })
    }
  }

  handleOnChange() {
    const { onChange } = this.props

    if(onChange) {
      onChange()
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
