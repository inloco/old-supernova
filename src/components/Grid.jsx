import React from 'react'

function getGutterClassName(gutter) {
  if(gutter) {
    return typeof gutter === 'string'
              ? `sn-grid--cell-gutter-${gutter}`
              : 'sn-grid--cell-gutter'
  }

  return ''
}

const Grid = props => {
  const { bleed, gutter, vertical, className, ...gridProps } = props
  const gridTypeClassName = vertical ? 'sn-grid--vertical' : 'sn-grid--horizontal'
  const gutterClassName = getGutterClassName(gutter)
  const bleedClassName = bleed ? 'sn-grid--bleed-all' : ''

  return (
    <div
      className={`
        sn-grid
        ${bleedClassName}
        ${gridTypeClassName}
        ${className}
        ${gutterClassName}
      `} {...gridProps} />
  )
}

Grid.defaultProps = {
  vertical: false
}

export default Grid
