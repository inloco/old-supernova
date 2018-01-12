import React from 'react'
import PropTypes from 'prop-types'
import SnDrawerButton from './../_Shared/SnDrawerButton'

class SnHeader extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    nav: PropTypes.element
  }

  render() {
    return (
      <div className='sn-header'>
        <SnDrawerButton onClick={ this.context.handleOpenDrawerClick } />
        { this.props.children }
        { this.props.nav }
      </div>
    )
  }
}

SnHeader.contextTypes = {
  handleOpenDrawerClick: PropTypes.func
}

export default SnHeader