import React from 'react'
import PropTypes from 'prop-types'

class Body extends React.PureComponent {
  static propsTypes = {
    children: PropTypes.any
  }
  
  render() {
    return(
      <div className="sn-modal__body">{this.props.children}</div>
    )
  }
}

export default Body