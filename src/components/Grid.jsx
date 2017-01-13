import React from 'react'

const Grid = props => {
  const { horizontal, ...gridProps } = props
  const horizontalClassName = horizontal ? 'sn-grid--horizontal' : ''

  return (
    <div className={`sn-grid ${horizontalClassName}`} {...gridProps} />
  )
}

export default Grid