import React from 'react'
import PropTypes from 'prop-types'

const Nav = props => {
  return (
    <nav className="sn-layout__drawer-navigation">
      {props.children}
    </nav>
  )
}

export default Nav