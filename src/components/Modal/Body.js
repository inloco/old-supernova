import React, { PropTypes } from 'react'

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