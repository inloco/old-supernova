import React, { PropTypes } from "react"
import BaseStep from "./../Step"

class Step extends BaseStep {
  static propTypes = {
    ...BaseStep.propTypes,
    index:  PropTypes.number
  }

  static defaultProps = {
    active: false
  }

  getClassName() {
    return `sn-steps__item ${this.getStatusClassName()}`
  }

  render() {
    const { label, index } = this.props

    return (
      <div className={this.getClassName()}>
        <i className="sn-steps__number-icon">{index + 1}</i>
        {label}
      </div>
    )
  }
}

export default Step