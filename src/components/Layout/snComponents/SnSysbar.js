import React from 'react'
import PropTypes from 'prop-types'
import SnDrawerButton from './_Shared/SnDrawerButton'
import SnBrand from './_Shared/SnBrand'

class SnSysbar extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    nav: PropTypes.element
  }

  static defaultProps = {
    nav: null
  }

  render() {
    return (
      <div className='sn-sysbar'>
        <SnDrawerButton onClick={ this.context.handleOpenDrawerClick } />
        <SnBrand src={ this.props.src } alt={ this.props.alt } />
        { this.props.nav }
      </div>
    )
  }
}

SnSysbar.contextTypes = {
  handleOpenDrawerClick: PropTypes.func
}

export default SnSysbar