import React from 'react'
import PropTypes from 'prop-types'

class Tooltip extends React.Component {
  static propTypes = {
    position: PropTypes.string,
    message:  PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    position: "top",
    size: "md"
  }

  getPositionClassName() {
    return `sn-tooltips--${this.props.position}`
  }

  getSizeClassName() {
    return `sn-tooltips--${this.props.size}`
  }

  getClassName() {
    return `
      sn-tooltips
      ${this.getPositionClassName()}
      ${this.getSizeClassName()}
    `
  }

  get() {
    return `sdsad`
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
