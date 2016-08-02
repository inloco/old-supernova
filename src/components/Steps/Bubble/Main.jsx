import React, { PropTypes } from "react"
import BaseSteps from "./../Main"

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