import React from 'react'

const BalloonBox = props => {
  return (
    <div className="sn-balloon-box" {...props}>
      {props.children}
    </div>
  )
}

export default BalloonBox