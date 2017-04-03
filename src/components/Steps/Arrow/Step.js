import React, { PropTypes } from 'react'
import BaseStep from './../Step'

const IS_DONE = 'is-done'

class Step extends BaseStep {
  static propTypes = {
    ...BaseStep.propTypes,
    index: PropTypes.number
  }

  getClassName() {
    return `sn-steps__item ${this.getStatusClassName()}`
  }

  renderIcon() {
    const isDone = this.getStatusClassName() === IS_DONE
    const className = `sn-steps__number-icon${isDone ? ' material-icons' : ''}`
    const content = isDone ? 'done' : (this.props.index + 1)

    return (
      <i className={`${className}`}>
        {content}
      </i>
    )
  }

  render() {
    return (
      <div className={this.getClassName()}>
        {this.renderIcon()}
        {this.props.label}
      </div>
    )
  }
}

export default Step