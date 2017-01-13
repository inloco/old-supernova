import React from 'react'

const Layout = props => {
  const drawerClassName = props.drawer ? 'sn-layout--fixed-drawer' : ''

  return (
    <div className="sn-layout__container">
      <div className={`sn-layout ${drawerClassName}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout