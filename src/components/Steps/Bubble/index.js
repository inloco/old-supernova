import React from 'react'
import PropTypes from 'prop-types'
import BaseSteps from './../index'

class Steps extends BaseSteps {
  render() {
    return (
      <div className="sn-steps sn-steps__bubble">
        <ul className="sn-steps__bubble-list">
          {this.renderSteps()}
        </ul>
      </div>
    )
  }
}

export default Steps