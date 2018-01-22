import React from 'react'
import PropTypes from 'prop-types'
import SnDrawerButton from './_Shared/SnDrawerButton'
import SnBrand from './_Shared/SnBrand'
import { Link } from 'react-router-dom'

class SnSysbar extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    nav: PropTypes.element,
    href: PropTypes.string
  }

  static defaultProps = {
    nav: null,
    href: '#'
  }

  render() {
    return (
      <div className='sn-sysbar'>
        <SnDrawerButton onClick={ this.context.handleOpenDrawerClick } />
        <Link to={this.props.href}>
          <SnBrand src={ this.props.src } alt={ this.props.alt } />
        </Link>
        { this.props.nav }
      </div>
    )
  }
}

SnSysbar.contextTypes = {
  handleOpenDrawerClick: PropTypes.func
}

export default SnSysbar