import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.PureComponent {
  static propsTypes = {
    children: PropTypes.any
  }
  
  render() {
    return(
      <div className="sn-modal__footer">{this.props.children}</div>
    )
  }
}

export default Footer