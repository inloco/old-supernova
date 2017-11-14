import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Tooltip extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    position: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    position: "top",
    size: "md",
    className: ''
  }

  render() {
    const { message, children } = this.props

    return (
      <span className={this.getClassName()} aria-label={message}>
        {children}
      </span>
    )
  }

  getClassName() {
    return classNames(
      'sn-tooltips',
      `sn-tooltips--${this.props.position}`,
      `sn-tooltips--${this.props.size}`,
      this.props.className
    )
  }
}

export default Tooltip
