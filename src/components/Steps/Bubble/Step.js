import React, { PropTypes } from 'react'
import BaseStep from './../Step'

class Step extends BaseStep {
  render() {
    return (
      <li className={this.getStatusClassName()}>
        {this.props.label}
      </li>
    )
  }
}

export default Step