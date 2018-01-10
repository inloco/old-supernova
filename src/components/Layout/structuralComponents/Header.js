import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <header className='sn-layout__main__header'>
        { this.props.children }
      </header>
    )
  }
}

export default Header