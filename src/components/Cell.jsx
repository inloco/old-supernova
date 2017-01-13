import React from 'react'

const Cell = props => {
  const { size, ...cellProps } = props
  const sizeClassName = `sn-cell--${size}`

  return (
    <div className={`${sizeClassName}`} {...cellProps} />
  )
}

Cell.defaultProps = {
  size: 'auto'
}

export default Cell