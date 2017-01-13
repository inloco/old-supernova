import React from 'react'

const Cell = props => {
  const { size, className, ...cellProps } = props
  const sizeClassName = `sn-cell--${size}`

  return (
    <div className={`${sizeClassName} ${className}`} {...cellProps} />
  )
}

Cell.defaultProps = {
  size: 'auto'
}

export default Cell