import React from 'react'

const BalloonBox = props => {
  return (
    <div {...props} className={`sn-balloon-box ${props.className}`} />
  )
}

export default BalloonBox
