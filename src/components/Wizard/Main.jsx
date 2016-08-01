import React, { PropTypes } from "react"

class Wizzard extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    step:     PropTypes.number
  }

  static defaultProps = {
    step: 0
  }

  constructor(props) {
    super(props)

    this.state = { step: props.step }
  }

  canMoveFoward() {
    return this.state.step < this.props.children.length - 1
  }

  canMoveBackward() {
    return this.state.step > 0
  }

  next() {
    if(this.canMoveFoward()) {
      this.setState({ step: this.state.step + 1 })
    }
  }

  previous() {
    if(this.canMoveBackward()) {
      this.setState({ step: this.state.step - 1 })
    }
  }

  render() {
    const { step } = this.state

    return (
      <div>
        {this.props.children[step]}
      </div>
    )
  }
}

export default Wizzard
