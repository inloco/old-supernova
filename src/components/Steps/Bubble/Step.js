import React from 'react'
import PropTypes from 'prop-types'
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