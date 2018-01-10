import React from 'react'
import PropTypes from 'prop-types'
import SnDrawerButton from './../_Shared/SnDrawerButton'

class SnHeader extends React.Component {
  static propTypes = {
    handleDrawerButtonClick: PropTypes.func.isRequired,
    headerTitle: PropTypes.element.isRequired,
    navItems: PropTypes.element
  }

  render() {
    return (
      <div className='sn-header'>
        <SnDrawerButton onClick={ this.props.handleDrawerButtonClick } />
        { this.props.headerTitle }
        { this.props.navItems }
      </div>
    )
  }
}

export default SnHeader