import React, { PropTypes } from 'react'

const Nav = props => {
  return (
    <nav className="sn-layout__drawer-navigation">
      {props.children}
    </nav>
  )
}

export default Nav