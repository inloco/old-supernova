import React from 'react'
import PropTypes from 'prop-types'

class SnDrawerFooter extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return(
      <div className='sn-drawer__footer'>
        { this.props.children }
      </div>
    )
  }
}

export default SnDrawerFooter