import React from 'react'
import PropTypes from 'prop-types'
import Icon from './../../../Icons'

class SnDrawerButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className='sn-drawer-button'>
        <Icon code='menu' onClick={ this.props.onClick } />
      </button>
    )
  }
}

export default SnDrawerButton