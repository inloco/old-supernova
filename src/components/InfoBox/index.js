import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class InfoBox extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['danger', 'info', 'warning'])
  }

  static defaultProps = {
    type: 'info'
  }

  render() {
    return (
      <div className={`sn-info-box sn-info-box--${this.props.type}`}>
         <span className="sn-info-box__title">{this.props.title}</span>
         <div className="sn-info-box__content">{this.props.content}</div>
      </div>
    )
  }
}
