import React from 'react'

const Grid = props => {
  const { vertical, className, ...gridProps } = props
  const gridType = vertical ? 'sn-grid--vertical' : 'sn-grid--horizontal'

  return (
    <div className={`sn-grid ${gridType} ${className}`} {...gridProps} />
  )
}

Grid.defaultProps = {
  vertical: false
}

export default Grid
