import React, { PropTypes } from 'react'

const Title = props => {
  return (
    <div className="sn-layout__drawer-title">
      {props.children}
    </div>
  )
}

export default Title