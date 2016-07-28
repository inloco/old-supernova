import React, { PropTypes } from "react"

class Tooltip extends React.Component {
  static propTypes = {
    position: PropTypes.string,
    message:  PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    position: "top"
  }

  getPositionClassName() {
    return `sn-tooltips--${this.props.position}`
  }

  getClassName() {
    return `sn-tooltips ${this.getPositionClassName()}`
  }

  render() {
    const { message, children } = this.props

    return (
      <span className={this.getClassName()} aria-label={message}>
        {children}
      </span>
    )
  }
}

export default Tooltip
