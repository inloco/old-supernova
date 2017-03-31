import React, { PropTypes } from 'react'

class Body extends React.Component {
  render() {
    return(
      <div className="sn-modal__body">{this.props.children}</div>
    )
  }
}

export default Body