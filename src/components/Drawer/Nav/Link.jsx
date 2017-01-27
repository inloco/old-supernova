import React from 'react'

const Link = props => {
  return React.cloneElement(props.children, {
    className: 'sn-layout__drawer-navigation__link'
  })
}

export default Link
