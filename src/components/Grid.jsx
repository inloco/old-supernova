import React from 'react'

const Grid = props => {
  const { horizontal, className, ...gridProps } = props
  const horizontalClassName = horizontal ? 'sn-grid--horizontal' : ''

  return (
    <div className={`sn-grid ${horizontalClassName} ${className}`} {...gridProps} />
  )
}

export default Grid