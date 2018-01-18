import React from 'react'
import PropTypes from 'prop-types'
import BaseSteps from './../index'

class Steps extends BaseSteps {
  render() {
    return (
      <div className='sn-steps sn-steps__small-bubble'>
        <ul className='sn-steps__small-bubble-list'>
          {this.renderSteps()}
        </ul>
      </div>
    )
  }
}

export default Steps